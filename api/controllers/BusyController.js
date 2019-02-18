/**
 * TasksController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    amIBusy:function(req, res) {
        
        Tasks.find({})
        .then((list)=>{
            if (list && list.length > 10) {
                res.send('you have alot of tasks!  Yes you are busy.');
            } else {
                res.send('you only have '+list.length+' tasks.  Youre lazy.');
            }
        })
    }
};

