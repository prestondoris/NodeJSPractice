const express = require('express');
const app = express();
app.use(express.static("public"));

// This line allows you to leave off the .ejs file name when using res.render()
app.set("view engine", "ejs");


app.get('/', function(req, res){
	res.send('Welcome to the Jungle');
});

app.get('/fallinginlovewith/:thing', function(req, res){
	let thing = req.params.thing
	// remember without the app.set() line above, you HAVE to include .ejs in res.render()
	res.render('love', {thingVar: thing});
});


app.get('/posts', function(req, res){
	let posts = [
		{title: 'Post 1', author: 'Susy'},
		{title: 'My adorable pet bunny', author: 'Charlie'},
		{title: 'Can you believe this Pomsky', author: 'Preston'},
	];
	res.render('posts', {posts: posts});
});


app.listen(3000, function(){
	console.log('The server is listening on Port 3000');
});