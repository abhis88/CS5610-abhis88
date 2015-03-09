var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/week7');


var WebsiteSchema = new mongoose.Schema({
    name: String
}, { collection: 'website' });

var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

var site1 = new WebsiteModel({ name: 'Site 1' });
site1.save();



app.get("/api/Week7/Exp1", function (req, res) {
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


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data


app.use(express.static(__dirname + '/public'));

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

app.delete("/api/player/:id", function (req, res) {
    players.splice(req.params.id, 1);
    res.json(players);
})

app.get("/api/player", function (req, res) {
    res.json(players);
})

app.get("/api/player/:id", function (req, res) {
    res.json(players[req.params.id]);
})

app.post("/api/player", function (req, res) {
    players.push(req.body);
    res.json(players);
})

app.put("/api/player/:id", function (req, res) {
    players[req.params.id] = req.body;
    res.json(players);
})


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

app.get("/process", function (req, res) {
    res.json(process.evn);
});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);