/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ok: function(request , response){
        response.ok();       //200
        // response.forbidden();    //403
        // response.notFound();    //404
        // response.serverError();  //500
    },

    shock: function (request, response) {
        response.forbidden();    //403
    },

    error: function (request, response) {
        response.serverError();  //500
    },

    // about: function (request, response){
    //     response.view('about', { layout: 'layoutNew'});
    // },

    /**
     * arrow function works fine here!
     * 
     */
    about: (req, res) => {
        res.view('about', {
          layout: 'layoutNew'
        });
    },

    page1: function (request, response) {
        response.view('home');
        response.send('this is page1');
    },

    page2: function (request, response){
        response.send('this is page2');
    },

    page3: function (request, response) {
        console.log(request.url);
        console.log(request.user);
        response.send("page3");
    },
    index: (req, res) => {
        // res.view('homepage');
        if(typeof a === undefined) {
            console.log("a in undefined")
        }
        else 
            res.send("homepage!");
    }

};

