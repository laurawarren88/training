const express = require('express')
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

// Serve the HTML file
app.get('/', (_req, res) => {
    res.render('index'); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});