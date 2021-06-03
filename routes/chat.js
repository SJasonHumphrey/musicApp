const artist = require('../data/artist.json');
const express = require("express");
const router = express.Router();
let logo = artist.artists[0].strArtistLogo;
router.get('/chat', (req, res) => {

    res.render('chat', {
        pageID: 'chat',
        pageTitle: 'Alter Bridge Chat',
        artistLogo: logo
    });
});






module.exports = router;