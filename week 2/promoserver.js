var mongoose = require('mongoose'),
    assert = require('assert');

var Promos = require('./models/promotions');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var newPromo = Promos({
        name: "Weekend Grand Buffet",
      image: "images/buffet.png",
      label: "New",
      price: "19.99",
      description: "Featuring . . ."
    });

    // save the user
    newPromo.save(function (err) {
        if (err) throw err;
        console.log('Promotion created!');

        // get all the users
        Promos.find({}, function (err, promotion) {
            if (err) throw err;

            // object of all the users
            console.log(promotion);
                        db.collection('promotion').drop(function () {
                db.close();
            });
        });
    });
});