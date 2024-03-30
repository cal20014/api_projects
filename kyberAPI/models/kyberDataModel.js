const mongoose = require("mongoose");

const kyberSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  gltfFileName: String,
  thumbnailImageName: String,
  categoryList: [String],
});

const kyberDataSchema = new mongoose.Schema({
  kybers: [kyberSchema],
});

const KyberData = mongoose.model(
  "KyberData",
  kyberDataSchema,
  "kyber_data_collection"
);

module.exports = KyberData;
