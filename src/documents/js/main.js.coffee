define (require) ->
	$ = require("jquery")
	# tk = require("vendor/typekit")
	tk = require("typekit")

	$('#outer').css({'margin-bottom':window.innerHeight+'px'})
