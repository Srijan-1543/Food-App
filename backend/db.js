<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 46da6290ae76d6109024d307e0eff6c15018c567
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://user:test@cluster0.qagccn0.mongodb.net/Store?retryWrites=true&w=majority';

const mongoDB = async (callback) => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to DB');

    const food_items = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_items = food_items;
    global.foodCategory = foodCategory;

  } catch (error) {
    throw new Error('Error connecting to MongoDB: ' + error.message);
  }
};

module.exports = mongoDB;
<<<<<<< HEAD
=======
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://user:test@cluster0.qagccn0.mongodb.net/Store?retryWrites=true&w=majority';

const mongoDB = async (callback) => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to DB');

    const food_items = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

    global.food_items = food_items;
    global.foodCategory = foodCategory;

  } catch (error) {
    throw new Error('Error connecting to MongoDB: ' + error.message);
  }
};

module.exports = mongoDB;
>>>>>>> 2e2a10fef9a47ec1cd57d9fdf95c071bc9869587
=======
>>>>>>> 46da6290ae76d6109024d307e0eff6c15018c567
