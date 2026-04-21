require('dotenv').config();
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  console.error('FATAL ERROR: DB_URI environment variable is not defined. Exiting.');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log('Secure Connection Established to FinGuard Cluster');
  } catch (err) {
    console.error(`MongoDB Atlas Connection Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  } finally {
    // Optional: Close the connection after success (if we only want to test connection)
    // mongoose.connection.close();
  }
};

connectDB();
