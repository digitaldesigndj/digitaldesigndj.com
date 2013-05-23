# Import
balUtil = require('bal-util')
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
		image: "/images/buckingham_balcony.jpg"
	niagara:
		image: "/images/horseshoe_falls.jpg"
	bear:
		image: "http://placebear.com/1200/800"
	houston:
		image: "/images/houston.jpg"
	gulf:
		image: "/images/galveston_beach.jpg"
	lake_skyline: 
		image: "/images/toronto_island_skyline.jpg"
	park:
		image: "/images/high_park_cherry_blossoms.jpg"
	toronto_sunset:
		image: "/images/toronto_sunset.jpg"
	toronto_waterline:
		image: "/images/toronto_waterline.jpg"
	long_exposure_orbit:
		image: "/images/long_exposure_orbit.jpg"
backgroundSelection = 'long_exposure_orbit'


# DocPad Configuration
docpadConfig =

	# =================================
	# Standard Configuration

	# regenerateEvery: 1000*60*30  # 30 minutes

	# r.js optimizes stg/ in second build step and writes final site to out/
	outPath: 'stg'

	# =================================
	# Plugins Config
	
	plugins:
		handlebars:
			precompileOpts:
				wrapper: "amd"

	# plugins:
	# 	repocloner:
	# 		repos: [
	# 			name: 'digitaldesigndj.com'
	# 			path: 'test'
	# 			url: 'https://github.com/digitaldesigndj/digitaldesigndj.com.git'
	# 		]

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
				Hello, come on in.
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
				'/css/style.css'
			]

			# The website's scripts
			scripts: [
				# '/vendor/tweets-widget.js'
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