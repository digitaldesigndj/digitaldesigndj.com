<p>The last 10 commits to <a href="{{link}}">this</a> site:</p>
<ul>
{{#each entries}}
	<li>{{title}}<br/><span>{{author}}
	{{#if publishedDate}} - <a href="{{link}}">{{publishedDate}}</a></span></li>{{/if}}
{{/each}}
</ul>