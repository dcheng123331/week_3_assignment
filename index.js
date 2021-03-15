const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/getData', (req, res) => {
    const {number} = req.query;

    if (number === undefined) {
        res.send('Lack of Parameter');
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        if (sum === 0) {
            res.send('Wrong Parameter');
        } else {
            res.send(`${sum}`)
        }
    }
});

app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if(name) {
        res.render('myName', {name});
    } else {
        res.render('user')
    }

})

// app.get('/trackName', (req, res) => {
//     res.render('user');
// });

app.post('/trackName', (req, res) => {
    res.cookie('name', req.body.name)
    res.redirect('/myName');
});

app.listen(3000, () => {
    console.log('Listening to post 3000')
})