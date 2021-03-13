const express = require('express');
const app = express();

app.use(express.static('public'));

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
            res.send(`<h1>${sum}</h1>`)
        }
    }
});

app.listen(3000, () => {
    console.log('Listening to post 3000')
})