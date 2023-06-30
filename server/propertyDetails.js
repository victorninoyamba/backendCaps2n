const mongoose = require("mongoose");

const PropertyList = new mongoose.Schema(
  {
    propertytype: String,
    sellingprice: String,
    location: String,
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
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    

  },
  {
    collection: "Properties",
  }
);

mongoose.model("Properties", PropertyList);
