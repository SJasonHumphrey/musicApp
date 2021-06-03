const artist = require('../data/artist.json');
const express = require("express");
const router = express.Router();

const feedbackData = require("../data/feedback.json"); 

const fs = require("fs");

let logo = artist.artists[0].strArtistLogo;


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/feedback", (req, res) => {
    res.render("feedback", {
    pageTitle: "Alter Bridge - Feedback Form",
    pageID: "feedback",
    artistLogo: logo 
    });
});

router.get("/api", (req, res) => {
    res.json(feedbackData)
});

router.post("/api", (req, res) => {

    console.log("form data", req.body);
    
    feedbackData.unshift(req.body);


    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })

    res.json(feedbackData);
});

module.exports = router;