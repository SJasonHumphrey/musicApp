const artist = require('../data/artist.json');

//import express
const express = require('express');
//invoke the express router 
const router = express.Router();


//sub router
let logo = artist.artists[0].strArtistLogo;
let artistPic = artist.artists[0].strArtistWideThumb;
let artistBio = artist.artists[0].strBiographyEN
router.get('/', (req, res) => {

    res.render('index', {
        artistLogo: logo,
        artistPhoto: artistPic,
        artistBio: artistBio,

        
    })
});

//export out to main application 
module.exports = router;