const db = require('../database/models');

const candidatesController = {
    all: function(req,res) {
        db.Candidate.findAll().then(function(candidates){
            res.status(200).json({
                list: candidates
            })
        })
    }
}

module.exports = candidatesController;