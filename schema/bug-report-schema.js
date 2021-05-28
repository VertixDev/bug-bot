const mongoose = require("mongoose")

const reqString = {
  type: String,
  required: true,
};

const bugReportSchmea = mongoose.Schema({
    authorId: reqString,
    code: reqString,
    type: reqString,
    date: reqString,
    reason: reqString,
});

module.exports = mongoose.model("bug-report", bugReportSchmea);