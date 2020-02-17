const Bill = require('../models/Bill');

module.exports = {
    add: function (req, res) {
        let bill = new Bill(req.body);

        bill.save()
            .then(bill => res.status(200).json(bill))
            .catch(err => {
                res.status(400).send("There's was an error while adding the bill", err)
            });
    },
    getAll: function (req, res) {
        Bill.find(function (err, bills) {
            if (err) {
                res.status(400).send("There's was an error while retrieving the bills");
            }
            else {
                res.status(200).json(bills);
            }
        });
    },
    getById: function (req, res) {
        Bill.findById(req.params.id, function (err, bill) {
            if (err) {
                res.status(400).send("There's was an error while retrieving this bill " + err);
            }
            else {
                res.status(200).json(bill);
            }
        })
    },
    delete: function (req, res) {
        Bill.findByIdAndRemove(req.params.id, function (err, bill) {
            if (err) {
                res.status(400).send("There's was an error while removing the bill", err);
            }
            else {
                res.status(200).json(req.params.id);
            }
        });
    },
    update: function (req, res) {
        Bill.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, bill) {
            if (err) {
                res.status(400).send("There's was an error while updating the bill", err);
            }
            else {
                res.status(200).json(bill);
            }
        });
    }
};