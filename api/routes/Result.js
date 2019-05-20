const express = require("express");
const router = express.Router();
const dbTypes = require("../schemas/types");
const {invalidType} = require("../errorMessages");

router.get(
  "/result/:type/:filter?/:value?/:category?",
  async (request, response) => {
    if (!dbTypes[request.params.type]) {
      response.json({
        error: {message: invalidType(request.params.type)},
      });
    }

    const filter = {};
    if (!request.params.category)
      filter[request.params.filter] = request.params.value;

    dbTypes[request.params.type].find(filter, (error, data) => {
      if (!request.params.category) {
        error ? response.json({error: error}) : response.json(data);
      } else {
        const results = data.filter(item => {
          const date = new Date(item[request.params.filter]);
          switch (request.params.value) {
            case "year":
              return date.getFullYear() == request.params.category;
            case "month":
              return date.getMonth() + 1 == request.params.category;
            case "day":
              return date.getDate() == request.params.category;
          }
        });

        error ? response.json({error: error}) : response.json(results);
      }
    });
  }
);

module.exports = router;
