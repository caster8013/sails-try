/**
 * ShoppingController
 *
 * @description :: Server-side logic for managing shoppings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function(req, res){
        Shopping.find({})
        .then((list)=>{
            res.send(list);
        })
        .catch((err)=>{
            res.send(err);
        });
    }
};

