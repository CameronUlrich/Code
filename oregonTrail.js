const express = require('express')
const app = express()
app.use(express.static('public'))
app.get('/', function (req, res) {
res.sendFile('views/index.html', {root: __dirname })
})
app.get('/mainmenu', function (req, res) {
res.sendFile('views/mainmenu.html', {root: __dirname })
})
app.get('/game', function (req, res) {
res.sendFile('views/game.html', {root: __dirname })
})
app.get('/topten', function (req, res) {
res.sendFile('views/topten.html', {root: __dirname })
})

app.get('/trail', function (req, res) {
res.sendFile('views/trail.html', {root: __dirname })
})


// require our gameController (so we can access the data in it)
var game = require('./controllers/gameController');
// create an API route so we can request a screen by sending the id (array index)
app.get('/game/getNewGameScreen/:screenId', function(req, res) {
// get the screen
var gameScreen = game.startGameScreens[req.params.screenId];

//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
res.setHeader('Content-Type', 'text/html');
res.send(gameScreen);
})

//var game = require('./controllers/gameController');
//app.get('/game/saveProfession/:profession', function(req, res) {
// get the screen
//var gameScreen = game.saveProfession[req.params.profession];
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
//res.setHeader('Content-Type', 'text/html');
//res.send(gameScreen);
//})

//var game = require('./controllers/gameController');
//app.get('/game/savePlayerName/:playerId/:playerName', function(req, res) {
// get the screen
//var gameScreen = game.savePlayerName[req.params.playerId.playerName];
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
//res.setHeader('Content-Type', 'text/html');
//res.send(gameScreen);
//})

//var game = require('./controllers/gameController');
//app.get('/game/saveStartMonth/:startMonth', function(req, res) {
// get the screen
//var gameScreen = game.saveStartMonth[req.params.startMonth];
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
//res.setHeader('Content-Type', 'text/html');
//res.send(gameScreen);
//})

//var game = require('./controllers/gameController');
app.get('/game/getSettings', function(req, res) {
// get the screen
var gameScreen = game.gameSettings;
//console.log("\n this is the main node file! \n" + gameScreen)
// return the html
res.setHeader('Content-Type', 'application/json');
res.send(gameScreen);
})

//var profession = require('./controllers/gameController');
app.get('/game/saveProfession/:profession', function(req, res){
	game.gameSettings.profession = req.params.profession
	console.log("settings : " + req.params.profession);

	res.setHeader('Content-Type', 'text/plain');
	res.send(game.gameSettings.profession);
})

//var playerNames = require('./controllers/gameController');
app.get('/game/savePlayerName/:playerId/:playerName', function(req, res){
	game.gameSettings.playerNames[req.params.playerId] = req.params.playerName
	console.log("settings : " + game.gameSettings);

	res.setHeader('Content-Type', 'text/plain');
	res.send(game.gameSettings.playerNames);
})

app.get('/game/saveStartMonth/:startMonth', function(req, res){
	game.gameSettings.startMonth = req.params.startMonth
	console.log("settings : " + game.gameSettings);

	res.setHeader('Content-Type', 'text/plain');
	res.send(game.gameSettings.startMonth);
})




app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})