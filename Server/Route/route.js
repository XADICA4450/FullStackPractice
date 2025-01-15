const express = require('express');
const {
    getAllData,
    deleteData,
    getDataById,
    postData,
    editData,
    searchByPrice,
}=require("../Controller/Controller");

const router = express.Router();
router.get("/", getAllData);
router.delete("/:id",deleteData);
router.post("/",postData);
router.get("/:id", getDataById);
router.put("/:id", editData);
router.get("/search", searchByPrice);


module.exports = router;