// Routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


module.exports = function (app) {
    // API GET Requests
    app.get("/api/survey", function (req, res) {
        res.json(tableData);
    });

    // API POST Requests
    app.post("/api/survey", function (req, res) {
        if (friendsData.length < 5) {
            friendsData.push(req.body);
            res.json(true);
        }
        else {
            surveyData.push(req.body);
            res.json(false);
        }
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        friendsData = [];

        console.log(friendsData);
    });
};
