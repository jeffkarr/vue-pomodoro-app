const express = require('express');
const app = express();

// static folder
app.use(express.static(__dirname + '/public/'));
// handle spa
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Server running on port ${port}`));