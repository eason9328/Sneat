const mongoose = require("mongoose")
const DataSchema = {
    _id:Number,
    Year:Number,
    Revenue:Array,
}
const DataModel = mongoose.model("Data",DataSchema,'Data')
module.exports = DataModel