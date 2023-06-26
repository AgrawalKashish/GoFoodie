const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://GoFoodie:gofoodie@cluster0.ibpfiqr.mongodb.net/gofoodie?retryWrites=true&w=majority";
const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connected to mongodb");
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
      // console.log(fetched_data);
    global.food_items = fetched_data;
      // console.log(global.food_items)
    const fetched_data1 = await mongoose.connection.db.collection("food_category").find({}).toArray();
    global.food_category = fetched_data1;
    //console.log(global.food_category)
  }
   catch (err) {
    console.log("error", err);
  }
};

module.exports = mongodb;
