<p>The last 10 commits to <a href="">this</a> site:</p>
<ul>
{{#each .}}
	<li>
		<a href="{{url}}"><img src="{{author.avatar_url}}" width="34" height="34" style="float: left;" /></a>
	<div style="margin: 0 0 0 40px;">
		{{commit.message}}<br/>
		<span>{{commit.author.name}}</span>
		</li>
	</div>
{{/each}}
</ul>