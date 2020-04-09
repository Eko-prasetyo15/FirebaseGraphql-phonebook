var express = require('express');
var router = express.Router();
var firebase = require('firebase')

/* GET home page. */
router.get('/', function (req, res, next) {
  const contactReference = firebase.database().ref("/contact/");
  //Attach an asynchronous callback to read the data
  contactReference.on("value", function (snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    contactReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

//Create new instance
router.post('/', function (req, res) {
  const id = req.body.id
  const name = req.body.name;
  const addres = req.body.name;
  const phone = req.body.phone;

  const referencePath = '/contact/'+id+'/';
  const contactReference = firebase.database().ref(referencePath);
  contactReference.set({name: name, addres: addres, phone : phone}, function(error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send("Data saved successfully.");
    }
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id
  var name = req.body.name
  var addres = req.body.addres;
  var phone = req.body.phone;

  var referencePath = '/contact/'+id+'/';
  var contactReference = firebase.database().ref(referencePath);
  contactReference.update({name: name, addres: addres, phone : phone}, function(error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

//Delete an instance
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  var referencePath = '/contact/'+id+'/';
  var contactReference = firebase.database().ref(referencePath);
  contactReference.remove((error)=>{
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});
module.exports = router;
