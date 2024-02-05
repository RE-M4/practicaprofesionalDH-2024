const db = require('../database/models');

const degreesController = {
    all: function(req,res) {
        db.Degree.findAll().then(function(degrees){
            res.status(200).json({
                list: degrees
            })
        })
    }
}

module.exports = degreesController;