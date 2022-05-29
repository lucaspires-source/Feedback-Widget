import express from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/users', (req, res) => {
res.send('Hello World');
})
app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`);
})