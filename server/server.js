const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI in environment');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});
