const e = require('express');
const app = e();
const port = 3000;

app.get('/', (req, res) => {
    res.send('We have our backend express running.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});