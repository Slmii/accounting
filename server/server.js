const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// THIS IS THE HEROKU PORT (ITS ALWAYS DYNAMIC)
const port = process.env.PORT || 3000;

// GETS ALL ASSESTS FROM THIS DIRECTORY AND RUN AT START
app.use(express.static(publicPath));

// REQ = REQUEST
// RES = RESPONSE
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(8080, () => {
//     console.log('Example app listening on port 3000!');
// });