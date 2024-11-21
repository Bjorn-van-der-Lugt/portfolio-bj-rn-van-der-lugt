const app = require('./app'); // Ensure this matches the location of your app.js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
