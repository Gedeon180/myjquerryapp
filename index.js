
var express = require('express');
var router = express.Router();

// our constructor
function Note(ptitle, pDetail, pPriority) {
  this.title= ptitle;
  this.detail = pDetail;
  this.priority = pPriority;
}

ServerNotes = [];
// save typing time, make up 3 for testing
ServerNotes.push(new Note("Eat Lunch", "Make a pizza", 2));
ServerNotes.push(new Note("Homework", "Get Prog209 HW done early", 1));
ServerNotes.push(new Note("Play vid game", "kill thousands of zombies", 3));

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('index.html');
});

/* GET All Notes data */
router.get('/getAllNotes', function(req, res) {
  res.status(200).json(ServerNotes);
});


/* Add one new note */
router.post('/AddNote', function(req, res) {
  const newNote = req.body;
  ServerNotes.push(newNote);
  res.status(200).json(newNote);
});


router.delete('/DeleteNote/:title', (req, res) => {
  const title = req.params.title;
  let found = false;
  console.log(title);    

  for(var i = 0; i < ServerNotes.length; i++) // find the match
  {
      if(ServerNotes[i].title === title){
        ServerNotes.splice(i,1);  // remove object from array
          found = true;
          break;
      }
  }

  if (!found) {
    console.log("not found");
    return res.status(500).json({
      status: "error"
    });
  } else {
  res.send('Note ' + title + ' deleted!');
  }
});

module.exports = router;
