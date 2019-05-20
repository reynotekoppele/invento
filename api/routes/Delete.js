const express = require("express");
const router = express.Router();
const dbTypes = require("../schemas/types");
const {invalidType} = require("../errorMessages");

router.get("/delete/:type/:id", async (request, response) => {
  if (!dbTypes[request.params.type]) {
    response.json({
      error: {message: invalidType(request.params.type)},
    });
  }

  dbTypes[request.params.type].findOneAndDelete(
    {_id: request.params.id},
    (error, deletedItem) => {
      error ? response.json({error: error}) : response.json(deletedItem);
    }
  );
});

module.exports = router;
