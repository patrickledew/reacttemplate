'use strict';

const MongoClient = require('mongodb').MongoClient;

const GAME_STATS = "gamestats";
const USERS = "users";
const REGISTRATION = "registration";
const SCOUTING = "scouting";

const Mongo = function () {
    let mongoUrl = process.env.MONGODB_URI;
    if (mongoUrl == null) {
        this.url = "mongodb://localhost:27017/";
        this.dbName = "template";
    }
    else {
        const decode = /^(mongodb:\/\/(?:.)*@?(?:[^\/])*)\/(.*)$/.exec(mongoUrl);
        this.url = mongoUrl;
        this.dbName = decode[2];
    }
};

Mongo.prototype.getScoutingData = function (match, next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) {
            console.log(err.message);
            return;
        }
        var dbo = db.db(this.dbName);
        var query = match ? match : {}; //If the match field was provided, use that to find matches.
        console.log("QUERY IS: " + JSON.stringify(query));
        dbo.collection(SCOUTING).find(query).project({ _id: 0 }).toArray(function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            db.close();
            next(result);
        });
    });
}

Mongo.prototype.getGameStats = function (next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) {
            console.log(err.message);
            return;
        }
        var dbo = db.db(this.dbName);
        var query = {};
        dbo.collection(GAME_STATS).find(query).project({ _id: 0 }).toArray(function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            db.close();
            next(result);
        });
    });
};

Mongo.prototype.addGameStats = function (data, next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) {
            console.log(err.message);
            return;
        }
        var dbo = db.db(this.dbName);
        console.log(data);
        dbo.collection(GAME_STATS).insertOne(data, (err, res) => {
            if (err) {
                console.log(err.message);
                return;
            }
            db.close();
            next();
        });
    }
    )
};

Mongo.prototype.getUser = function (username, password, next) {
    MongoClient.connect(this.url, (err, db) => {
        if (err) {
            console.log(err.message);
            return;
            //do nothing? throwing breaks stuff (i.e server crashes)
        }
        var dbo = db.db(this.dbName);
        var query = { username, password }
        dbo.collection(USERS).findOne(query, (err, res) => {
            if (err) {
                console.log(err.message);
                return;
            }
            db.close();
            next(res);
        });
    })
};

Mongo.prototype.addRegistrationInfo = function (data, next, fail) {
    if (!(data.firstName && data.lastName && (data.studentPhone || data.studentEmail || data.parentPhone || data.parentEmail))) { //User must provide at least 1 contact, as well as name
        fail(new Error("Not Enough Info")); //User hasnt provided enough information error
        return;
    }
    MongoClient.connect(this.url, (err, db) => {
        if (err) {
            fail(err); //Connection Error
            return;
        }
        var dbo = db.db(this.dbName);
        dbo.collection(REGISTRATION).find({ firstName: data.firstName, lastName: data.lastName }).count((err, count) => { //Check if there are any entries with the same name

            if (err) {
                db.close();
                fail(err); //find or count error
                return;
            }
            if (count == 0) { //If there is no previous entry

                dbo.collection(REGISTRATION).insertOne(data, (err, res) => { //Insert the data into the db
                    if (err) {
                        db.close();
                        fail(err); //Insert error
                        return;
                    } else {
                        db.close();
                        next(); //SUCCESS!
                    }
                });
            } else {
                db.close();
                fail(new Error("Duplicate")); //Duplicate error
                return;
            }
        });
    }
    );
};

module.exports = () => {
    return new Mongo();
};
