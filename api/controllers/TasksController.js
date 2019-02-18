/**
 * TasksController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	_config: {
        shortcuts: true,
        rest: true
    },

    find:function(req, res) {
        console.log(' use my own find.');
        Tasks.find()
        .then((list)=>{
            res.send(list);
        })
        .catch((err)=>{
            res.send(err);
        })
    },

    page:function(req, res) {
        Tasks.find({})
        .then((list)=>{
            res.view('Tasks.ejs', { cool:'yes', tasks:list });
        })
        
    },

    findtest: function(req, res){
        Tasks.find({})
        .exec(function (err, user) {
            console.log(user);
            res.send(user);
        });

    }
    
};

