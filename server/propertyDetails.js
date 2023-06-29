const mongoose = require("mongoose");

const PropertyList = new mongoose.Schema(
  {
    propertytype: String,
    sellingprice: String,
    description: String,
    bedrooms: Number,
    bathrooms: Number,
    carparks: Number,
    floorarea: Number,
    homefeatures: String,
    neighborhoodfeatures: String,
    foodhubs: String,
    grocery: String,
    gym: String,
    school: String,
    store: String,
    hospital: String,
    neighborhoodvicinity: String,
    

  },
  {
    collection: "Properties",
  }
);

mongoose.model("Properties", PropertyList);
