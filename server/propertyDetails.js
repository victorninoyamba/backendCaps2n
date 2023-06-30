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
    img1: Buffer,
    img2: Buffer,
    img3: Buffer,
    img4: Buffer,
    img5: Buffer,
    img6: Buffer,
    

  },
  {
    collection: "Properties",
  }
);

mongoose.model("Properties", PropertyList);
