# ASP.NET Core, Angular 2 and Typescript Starter #

<b>Uses Webpack for build</b>

<h3>Installation for Windows Users</h3>
<ol>
<li>VS 2015 will try to restore Nuget packages.</li>
<li>Then open a console, navigate to the <i>package.json</i> file, and run the following commands:
<ul>
<li>npm install</li>
</ul>
</li>
<li>Open <strong>appsettings.json</strong> file and alter the database connection string to reflect your SQL Server environment.</li>
<li>Start the initial database
<ol>
<li>dotnet ef database update</li>
</ol>
</li>

webpack-dev-server runs on port 5000.
asp.net core runs on port 5001.

In Development:
`run npm dev` first.
then start project in Visual Studio. This will automatically run localhost:5001


