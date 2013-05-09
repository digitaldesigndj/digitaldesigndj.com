# Import
balUtil = require('bal-util')
feedr = new (require('feedr')).Feedr
createsend = require('createsend')
createsendConnection = new createsend(process.env.CM_KEY)

# growl = require('growl')
# growl('You have mail!')
# growl('5 new messages', { sticky: true })

###
twit = require('twit')
twitConnection = new twit(
	consumer_key: process.env.TWITTER_CONSUMER_KEY
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET
	access_token: process.env.TWITTER_ACCESS_TOKEN
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
)
###

# Background
backgrounds =
	blossom:
		image: "/images/cherry_blossom.jpg"
		description: "High Park Cherry Blossoms 2013, Toronto ON."
	sky:
		image: "/images/toYYZ.jpg"
		description: "Clouds at 38k feet"
	balcony:
		image: "images/buckingham_balcony.jpg"
backgroundSelection = 'blossom'

# Spreadsheet
spreadsheetConnection = null
spreadsheetInfo = null
spreadsheetRows = null

# DocPad Configuration
docpadConfig =

	# =================================
	# Standard Configuration

	regenerateEvery: 1000*60*30  # 30 minutes


	# =================================
	# Template Data

	templateData:

		background: backgrounds[backgroundSelection].image
		opacity: backgrounds[backgroundSelection].opacity

		# Specify some site properties
		site:
			# The production url of our website
			url: "http://digitaldesigndj.com"

			# Here are some old site urls that you would like to redirect from
			oldUrls: [
				'djmux.com'
			]

			# The default title of our website
			title: "DigitalDesignDj"

			# The website description (for SEO)
			description: """
				You found me.
				"""

			# The website keywords (for SEO) separated by commas
			keywords: """
				Digtial Media, Digital Design, Digital Art, Disk Jockey, DJ, Code, Node, JavaScript
				"""

			# The website's styles
			styles: [
				# 'http://raw.github.com/iamceege/tooltipster/2.1.3/css/tooltipster.css'
				'/vendor/normalize.css'
				'/vendor/h5bp.css'
				'/styles/style.css'
				'http://fonts.googleapis.com/css?family=Droid+Sans:400,700'
			]

			# The website's scripts
			scripts: [
				# 'http://code.jquery.com/jquery-1.9.1.min.js'
				# 'http://raw.github.com/iamceege/tooltipster/2.1.3/js/jquery.tooltipster.min.js'
				'/scripts/script.js'
				'/vendor/tweets-widget.js'
				'/vendor/google-plus.js'
			]

			# Services
			services:
				# facebookLikeButton:
				# 	applicationId: '266367676718271'
				# twitterTweetButton: 'StartupHostel'
				# twitterFollowButton: 'StartupHostel'
				# gauges: '51427e6f108d7b293d0000d4'
				googleAnalytics: 'UA-18710277-1'


		# -----------------------------
		# Helper Functions

		# Get the prepared site/document title
		# Often we would like to specify particular formatting to our page's title
		# we can apply that formatting here
		getPreparedTitle: ->
			# if we have a document title, then we should use that and suffix the site's title onto it
			if @document.title
				"#{@document.title} | #{@site.title}"
			# if our document does not have it's own title, then we should just use the site's title
			else
				@site.title

		# Get the prepared site/document description
		getPreparedDescription: ->
			# if we have a document description, then we should use that, otherwise use the site's description
			@document.description or @site.description

		# Get the prepared site/document keywords
		getPreparedKeywords: ->
			# Merge the document keywords with the site keywords
			@site.keywords.concat(@document.keywords or []).join(', ')


	# =================================
	# DocPad Events

	# Here we can define handlers for events that DocPad fires
	# You can find a full listing of events on the DocPad Wiki
	events:

		# Extend Template Data
		# Prepare our spreadsheet
		extendTemplateData: (opts,next) ->
			# Prepare
			docpad = @docpad
			tasks = new balUtil.Group(next)
			users = []
			sales = 0

			# Find User or Create
			addUser = (newUser) ->
				for user in users
					checks = ['name','email','skype','twitter','facebook','website']
					for check in checks
						if user[check] and user[check] is newUser[check]
							for own key,value of newUser
								user[key] or= value or null
							return user
				users.push(newUser)
				return newUser

			# Spreadsheet Connection
			tasks.push (next) ->
				return next()  if spreadsheetConnection? or !(process.env.GOOGLE_SPREADSHEET_KEY and process.env.GOOGLE_USERNAME and process.env.GOOGLE_PASSWORD)
				spreadsheetConnection = new (require('google-spreadsheet'))(process.env.GOOGLE_SPREADSHEET_KEY)
				return spreadsheetConnection.setAuth(process.env.GOOGLE_USERNAME, process.env.GOOGLE_PASSWORD, next)

			# Spreadsheet Info
			tasks.push (next) ->
				return next()  if spreadsheetInfo? or !(spreadsheetConnection)
				spreadsheetConnection.getInfo (err,info) ->
					return next(err)  if err
					spreadsheetInfo = info
					return next()

			# Spreadsheet Rows
			tasks.push (next) ->
				return next() if spreadsheetRows? or !(spreadsheetInfo)
				spreadsheetInfo.worksheets[0].getRows (err,rows) ->
					return next(err)  if err
					spreadsheetRows = rows
					return next()

			# Speadsheet Users
			tasks.push ->
				return  if !(spreadsheetRows)
				for row in spreadsheetRows
					# Apply user information
					user = {}
					user.name = row.name or row.title or row.twitterusername or row.skypeusername or null
					user.email = row.email or null
					user.bio = row.bio or null
					user.confirmed = String(row.confirmed).toLowerCase() in ['yes','true']
					user.skype = row.skypeusername or null
					user.twitter = row.twitterusername or null
					user.facebook = (row.facebookurl or '').replace(/^.+com\//,'').replace(/\//g,'') or null
					user.website = row.websiteurl or null
					addUser(user)

			# Campaign Monitor Users
			tasks.push (next) ->
				return next()  if !(process.env.CM_LIST_ID)
				createsendConnection.listActive process.env.CM_LIST_ID, null, (err,data) ->
					return next(err)  if err
					for result in data.Results
						# Apply user information
						user = {}
						user.name = result.Name or null
						user.email = result.EmailAddress
						user.skype = null
						user.twitter = null
						for customField in result.CustomFields
							customFieldKey = customField.Key.toLowerCase()
							user[customFieldKey] or= customField.Value or null
						addUser(user)
					return next()

			# Twitter Users
			tasks.push (next) ->
				feedr.readFeed "http://api.twitter.com/1/statuses/followers.json?screen_name=StartupHostel&cursor=-1", (err,data) ->
					return next(err)  if err
					return next(data.errors[0].message)  if data?.errors?[0]?.message

					# Users
					for twitterUser in (data.users or [])
						# Apply user information
						user = {}
						user.name = twitterUser.name
						user.bio = twitterUser.description or null
						user.twitter = twitterUser.screen_name
						user.twitterID = twitterUser.id
						user.website = twitterUser.url or "http://twitter.com/#{twitterUser.screen_name}"
						user.avatar = twitterUser.profile_image_url or null
						addUser(user)

					# Done
					return next()

			# Facebook Users
			# https://neosmart-stream.de/facebook/how-to-create-a-facebook-access-token/
			tasks.push (next) ->
				return next()  if !(process.env.FACEBOOK_GROUP_ID and process.env.FACEBOOK_ACCESS_TOKEN)
				facebookGroupId = process.env.FACEBOOK_GROUP_ID
				facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN
				facebookFields = "about address bio email accounts gender name id religion username".replace(/\s/g,'%2C')
				feedr.readFeed "https://graph.facebook.com/#{facebookGroupId}/members?fields=#{facebookFields}&method=GET&format=json&callback=cb&access_token=#{facebookAccessToken}", (err,data) ->
					return next(err)  if err

					# Users
					for facebookUser in data.data
						# Apply user information
						user = {}
						user.name = facebookUser.name or null
						user.bio = facebookUser.bio or null
						user.gender = facebookUser.gender or null
						user.email = (facebookUser.email or '').replace('\u0040','@') or null
						user.facebook = facebookUser.username
						user.facebookID = facebookUser.id
						addUser(user)

					# Done
					return next()

			# Normalize Fields
			tasks.push (next) ->
				# Prepare
				userTasks = new balUtil.Group (err) ->
					return next(err)  if err
					docpad.log 'info', "Fetched #{users.length} users"
					opts.templateData.sales = sales
					opts.templateData.users = users
					return next()

				# Users
				balUtil.each users, (user,index) ->  userTasks.push (next) ->
					# Basics
					user = users[index]
					user.text or= user.name + (if user.bio then ": #{user.bio}" else '')
					user.website or= (if user.twitter then "http://twitter.com/#{user.twitter}") or (if user.facebook then "https://www.facebook.com/#{user.facebook}") or null
					user.avatar or= null
					user.hash = require('crypto').createHash('md5').update(user.email or user.name or index).digest("hex")

					# Sales
					sales++  if user.confirmed

					# Avatar
					avatarTasks = new balUtil.Group(next)

					# Avatar: Facebook
					avatarTasks.push (next) ->
						return next()  if user.avatar or !user.facebook
						user.avatar or= "http://graph.facebook.com/#{user.facebook}/picture"
						return next()

					# Avatar: Twitter
					avatarTasks.push (next) ->
						return next()  if user.avatar or !user.twitter
						feedr.readFeed "http://api.twitter.com/1/users/lookup.json?screen_name=#{user.twitter}", (err,twitterUser) ->
							return next(err)  if err
							user.avatar or= twitterUser.profile_image_url or null
							return next()

					# Avatar: Email
					avatarTasks.push (next) ->
						return next()  if user.avatar or !user.email
						user.avatar or= "http://www.gravatar.com/avatar/#{user.hash}.jpg"
						return next()

					# Avatar: run
					avatarTasks.run('sync')

				# Run
				userTasks.run()

			# Run
			return tasks.run('sync')

		# Generate After
		generateAfter: (opts,next) ->
			# Prepare
			docpad = @docpad
			config = docpad.getConfig()

			# Fetch
			stylesheet = docpad.getFileAtPath('styles/style')
			source = stylesheet.get('contentRendered')

			# Optimise
			new (require('enhance-css'))(
				rootPath: config.outPath
			).process source, (err,data) ->
				return next(err)  if err
				result = data.embedded.plain
				balUtil.writeFile stylesheet.get('outPath'), result, (err) ->
					return next(err)  if err
					stylesheet.set('contentRendered',result)
					return next()

			# Done
			true

		# Server Extend
		# Used to add our own custom routes to the server before the docpad routes are added
		serverExtend: (opts) ->
			# Extract the server from the options
			{server} = opts
			docpad = @docpad

			# As we are now running in an event,
			# ensure we are using the latest copy of the docpad configuraiton
			# and fetch our urls from it
			latestConfig = docpad.getConfig()
			oldUrls = latestConfig.templateData.site.oldUrls or []
			newUrl = latestConfig.templateData.site.url

			# Redirect any requests accessing one of our sites oldUrls to the new site url
			server.use (req,res,next) ->
				if req.headers.host in oldUrls
					res.redirect(newUrl+req.url, 301)
				else
					next()

# Export
module.exports = docpadConfig