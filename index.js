const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const data = {result: 0};

app.get('/getData', (req, res) => {
    const {number} = req.query;

    if (number === undefined) {
        res.send('Lack of Parameter.');
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        if (sum === 0) {
            res.render('wrongParam');
        } else {
            data.result = sum;
            res.render('rightParam', {data});
        }
    }
});

app.get('/sum.html', (req, res) => {
    res.render('./public/sum.html', {data})
})

app.listen(3000, () => {
    console.log('Listening to post 3000')
})