<p>The last 10 songs I have listened to on Spotify:</p>
<ul>
{{#each recenttracks.track}}
	{{#if [@attr].nowplaying}}
		Now Playing:
	{{/if}}
	<li>
	<a href="{{url}}"><img src="{{image.0.[#text]}}" width="34" height="34" style="float: left;" /></a>
	<div style="margin: 0 0 0 40px;">
		{{name}}<br/>
		<span>{{artist.[#text]}} - {{album.[#text]}}</span></li>
	</div>
	{{#if [@attr].nowplaying}}
		<br/>
	{{/if}}
{{/each}}
</ul>