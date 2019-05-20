const express = require("express");
const router = express.Router();
const dbTypes = require("../schemas/types");
const {invalidType} = require("../errorMessages");

router.post("/save/:type", async (request, response) => {
  if (!dbTypes[request.params.type]) {
    response.json({
      error: {message: invalidType(request.params.type)},
    });
  }

  dbTypes[request.params.type].create({...request.body}, (error, item) => {
    error ? response.json({error: error}) : response.json(item);
  });
});

router.post("/update/:type", async (request, response) => {
  if (!dbTypes[request.params.type]) {
    response.json({
      error: {message: invalidType(request.params.type)},
    });
  }

  dbTypes[request.params.type].findOneAndUpdate(
    {_id: request.body._id},
    {$set: {...request.body}},
    {new: true, upsert: false},
    (error, updatedItem) => {
      error ? response.json({error: error}) : response.json(updatedItem);
    }
  );
});

module.exports = router;
