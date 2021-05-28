//import express
const express = require('express');
const artist = require('../data/artist.json');
const albums = require('../data/album.json');
//invoke the express router 
const router = express.Router();
let logo = artist.artists[0].strArtistLogo;

let array = albums.album;
//sub route
router.get('/albums', (req, res) => {
    res.render('albums', {
    artistLogo: logo,
    array: array 

    });
});

//export out to main application 
module.exports = router;