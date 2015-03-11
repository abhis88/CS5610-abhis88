
/* REQUIRED MODULES*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'));

/* CONNECTION STRINGS FOR MONGODB and OPENSHIFT */
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/experiments'
mongoose.connect(connectionString);

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);

/* SCHEMA FOR MONGODB */

var studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    school: String,
    location: String,
    mobile: String,
    country: String,
    homeCountry: String,
    sport: String,
    age: String,
    weight: String
}, { collection: 'student' });

var playerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    speciality: String
}, { collection: 'player' });

/* MODEL FOR MONGODB */

var studentModel = mongoose.model('studentModel', studentSchema);
var playerModel = mongoose.model('playerModel', playerSchema);

/* ARRAY */

var coursesTaken = [
    {
        firstName: "Abhishek",
        lastName: "Kumar",
        courseTaken: [{ name: "Program Design Paradigm" }, { name: "Database Management" },
            { name: "Algorithms" }, { name: "Web Development" }]
    },
    {
        firstName: "Sachin",
        lastName: "Tendulkar",
        courseTaken: [{ name: "Program Design Paradigm" }, { name: "Database Management" },
            { name: "Algorithms" }, { name: "Web Development" }]
    },
    {
        firstName: "Yuvraj",
        lastName: "Singh",
        courseTaken: [{ name: "Program Design Paradigm" }, { name: "Database Management" },
            { name: "Algorithms" }, { name: "Web Development" }]
    },
    {
        firstName: "Bob",
        lastName: "Marley",
        courseTaken: [{ name: "Program Design Paradigm" }, { name: "Database Management" },
            { name: "Algorithms" }, { name: "Web Development" }]
    },
    {
        firstName: "Pankaj",
        lastName: "Tripathi",
        courseTaken: [{ name: "Program Design Paradigm" }, { name: "Database Management" },
            { name: "Algorithms" }, { name: "Web Development" }]
    }
];

/* ARRAY */

var players = [
    {
        firstName: "Sachin",
        lastName: "Tendulkar",
        speciality: "Batsman"
    },
    {
        firstName: "Yuvraj",
        lastName: "Singh",
        speciality: "Batsman"
    },
    {
        firstName: "Bhubaneswar",
        lastName: "Kumar",
        speciality: "Bowler"
    },
    {
        firstName: "Mohammad",
        lastName: "Sami",
        speciality: "Bowler"
    }
];

/* WEB SERVICE FOR FETCHING PLAYER INFO */

app.get("/Week7_Exp6.html/data", function (req, res) {
    playerModel.find(function (err, data) {
        res.json(data);
    });
});

/* WEB SERVICE FOR SAVE PLAYER INFO */

app.post("/Week7_Exp6.html/data", function (req, res) {
    var player1 = new playerModel(req.body);
    player1.save(function(err, doc){
        playerModel.find(function (err, data) {
            res.json(data);
        });
    });    
});

/* WEB SERVICE FOR FINDING PLAYER BY ID */

app.delete("/Week7_Exp6.html/data/:id", function (req, res) {
    playerModel.findById(req.params.id, function(err, doc){
        doc.remove();
        playerModel.find(function (err, data) {
            res.json(data);
        });
    });
});

/* WEB SERVICE */

app.delete("/api/player/:id", function (req, res) {
    players.splice(req.params.id, 1);
    res.json(players);
});

/* WEB SERVICES FOR FETCHING PLAYER LIST */

app.get("/api/player", function (req, res) {
    res.json(players);
})

/* WEB SERVICE FOR POSTING PLAYER INFO */

app.post("/api/player", function (req, res) {
    players.push(req.body);
    res.json(players);
})

/* WEB SERVICE BASED ON PLAYER ID */

app.get("/api/player/:id", function (req, res) {
    res.json(players[req.params.id]);
})

app.put("/api/player/:id", function (req, res) {
    players[req.params.id] = req.body;
    res.json(players);
});


/* Simple Hello World Experiment*/

app.get("/api/Exp2", function (req, res) {
    res.send('hello world');
});


/* You name it, It will print it Experiment*/

app.get("/api/Exp3/:id", function (req, res) {
    var para1 = req.params.id;
    res.send("You just typed this variable " + para1);
});

app.get("/api/Exp3/", function (req, res) {
    res.send("You have not typed anything");
});

/* Json response from Server Experiment*/

app.get("/api/Exp4", function (req, res) {
    res.json(coursesTaken);
});

app.get("/api/Exp4/:var", function (req, res) {
    res.json(coursesTaken[req.params.var]);
});


app.get("/api/Week7/Exp2", function (req, res) {
    var sampleData = {
        firstName: "Abhishek",
        lastName: "Kumar",
        school: "Northeastern University",
        location: "Boston",
        mobile: "8572348869",
        country: "USA",
        homeCountry: "India",
        sport: "Cricket",
        age: "26",
        weight: "80 Kg"
    };
    res.json(sampleData);
});

/* WEB SERVICE FOR FINDING STUDENT DATA */

app.get('/api/Week7/Exp3', function (req, res) {
    studentModel.find(function (err, data) {
        res.json(data);
    });
});

/* WEB SERVICE FOR FINDING STUDENT DATA BASED ON FIRST NAME */

app.get('/api/Week7/Exp3/firstName/:firstName', function (req, res) {
    studentModel.find({ firstName: { "$in": [req.params.firstName] } }, function (err, data) {
        res.json(data);
    });
});

/* WEB SERVICE FOR FINDING STUDENT DATA BASED ON LOCATION */

app.get('/api/Week7/Exp3/location/:location', function (req, res) {
    studentModel.find({ location: { "$in": [req.params.location] } }, function (err, data) {
        res.json(data);
    });
});

/* WEB SERVICE FOR FINDING STUDENT DATA BASED ON SCHOOL INFO */

app.get('/api/Week7/Exp3/school/:school', function (req, res) {
    studentModel.find({ school: { "$in": [req.params.school] } }, function (err, data) {
        res.json(data);
    });
});

/* WEB SERVICE FOR FINDING STUDENT COUNT */

app.get('/api/Week7/Exp4', function (req, res) {
    studentModel.count(function (err, data) {
        res.json("Count of the rows is " + data);
    });
});

/* WEB SERVICE FOR REMOVING STUDENT DATA BASED ON LOCATION */

app.get('/api/Week7/Exp5/location/:location', function (req, res) {
    studentModel.remove({ location: { "$in": [req.params.location] } }, function (err, data) {
        res.json("Number of records deleted : " + data);
    });
});

/* WEB SERVICE FOR REMOVING STUDENT DATA BASED ON FIRST NAME */

app.get('/api/Week7/Exp5/firstName/:firstName', function (req, res) {
    studentModel.remove({ firstName: { "$in": [req.params.firstName] } }, function (err, data) {
        res.json("Number of records deleted : " + data);
    });
});

/* WEB SERVICE FOR FOR LOADING STUDENT DATA */

app.get('/api/Week7/LoadData', function (req, res) {
    var student1 = new studentModel({ firstName: 'Abhishek', lastName: 'Kumar', school: 'Northeastern University', location: 'Boston', mobile: '8572348869', country: 'USA', homeCountry: 'India', sport: 'Cricket', age: '26', weight: '80 Kg' });
    var student2 = new studentModel({ firstName: 'Shakti', lastName: 'Patro', school: 'Northeastern University', location: 'Boston', mobile: '89999998998', country: 'USA', homeCountry: 'India', sport: 'Table Tennis', age: '27', weight: '85 Kg' });
    var student3 = new studentModel({ firstName: 'Vikas', lastName: 'Shriyan', school: 'Northeastern University', location: 'Boston', mobile: '9868686568', country: 'USA', homeCountry: 'India', sport: 'Cricket', age: '24', weight: '75 Kg' });
    var student4 = new studentModel({ firstName: 'Kartik', lastName: 'Mahaley', school: 'Northeastern University', location: 'Boston', mobile: '123456789', country: 'USA', homeCountry: 'India', sport: 'Cricket', age: '30', weight: '60 Kg' });
    var student5 = new studentModel({ firstName: 'Pankaj', lastName: 'Tripathi', school: 'Northeastern University', location: 'Boston', mobile: '987654321', country: 'USA', homeCountry: 'India', sport: 'Lawn Tennis', age: '25', weight: '80 Kg' });

    student1.save();
    student2.save();
    student3.save();
    student4.save();
    student5.save();

    res.json("Data loaded successfully");

});
