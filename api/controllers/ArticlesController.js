/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    update: (req, res)=>{
        let title = req.body.title;
        let body = req.body.body;

        Articles.update({ id: req.params.id }, {title: title, content: body})
        .then(()=>{
            res.redirect('/articles/list');
        })
        .catch((error)=>{
            res.view(500, { data: "Database update failed!" });
        });
    },

    edit: (req, res) => {
        Articles.findOne({ id: req.params.id })
            .then((article) => {
                res.view("edit", { article: article });
            })
            .catch((error) => {
                res.view(500, { data: "Database query failed!" });
            });
    },

    delete: function(req, res){
        Articles.destroy({id: req.params.id})
        .then(()=>{
            res.redirect('/articles/list');
        })
        .catch((error)=>{
            res.view(500,{data: "Database delete failed!"});
        });

        return false;
    },

    create: function(req, res){
        var title =  req.body.title;
        var body =  req.body.body;

        Articles.create({title:title, content: body})
        .then(()=>{
            res.redirect("/articles/list");
        })
        .catch((error)=>{
            res.view(500,{data: "Internal errrors!"});
        });
    },

    list: function(req, res){
        Articles.find({})
        .then((articles)=>{
            res.view('list',{ posts: articles });
        })
        .catch((err)=>{
            res.view(500,{data: "Internal server errors!"})
        })


        // res.view("homepageForArticles", { layout: "layoutForArticles"});
    },

    add: function(req, res){
        res.view("add");
    }
};

