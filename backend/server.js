const e = require('express');
const app = e();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('We have our backend express running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});