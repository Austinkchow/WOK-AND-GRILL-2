const express = require('express');
const router = express.Router();
const db = require('../models');

//routes

//index route
router.get('/', (req, res) => {
  db.Menu.find({}, (error, allMenu) => {
    if (error) {
      console.log(error);
    } else {
      const context = {
        allMenu: allMenu,
      };
      res.render('menu/index', context);
    }
  });
});

//new route
router.get('/new', (req, res) => {
  res.render('menu/new');
});

//create route
router.post('/', (req, res) => {
  db.Menu.create(req.body, (error, addedMenu) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/menu');
    }
  });
});

//Show route
router.get('/:index', (req, res) => {
  db.Menu.findById(req.params.index).populate("items").exec(
    function (error, foundMenu) {
      if (error) {
        console.log(error);
      } else {
        const context = {
          foundMenu: foundMenu,
        };
        res.render('menu/show', context);
      }
    })
});

//edit route
router.get('/:index/edit', (req, res) => {
  db.Menu.findById(req.params.index, (error, editedMenu) => {
    if (error) {
      console.log(error);
    } else {
      const context = {
        editedMenu: editedMenu,
      };
      res.render('menu/edit', context);
    }
  });
});

//update route
router.put('/:index', (req, res) => {
  db.Menu.findByIdAndUpdate(
    req.params.index,
    req.body, {
      new: true
    },
    (error, updatedMenu) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect(`/menu/${updatedMenu._id}`);
      }
    }
  );
});

//delete route
router.delete('/:index', (req, res) => {
  db.Menu.findByIdAndDelete(req.params.index, (error, deletedMenu) => {
    if (error) {
      console.log(error);
    } else {
      db.Item.remove({
        _id: {
          $in: deletedMenu.items
        }
      }, function (error, removedItems) {
        if (error) {
          console.log(error);
        } else {
          res.redirect('/menu');
        }
      });
    }
  });
});
module.exports = router;