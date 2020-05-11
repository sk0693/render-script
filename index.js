const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Example text!');
// });


app.get('/render/getjs', (req, res) => {
    res.sendFile(__dirname + '/public/ad.js');
});

app.get('/getImage',(req, res) => {
    res.send('/docree.jpg');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));