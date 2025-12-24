const express = require('express')
const router = express.Router()
const {getDataByYear} = require("../controller/Datacontroller")

router.get("/getDataByYear",async (req,res)=>{
    console.log(req.query);
    const result = await getDataByYear(req.query)
    res.send(result)
})

module.exports = router