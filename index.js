import express from 'express';
import indexRouter from './routes/index.js';
const app = express();

app.use(express.json()); // Parse incoming requests with JSON payloads

// console.log(indexRouter)
app.use('/',indexRouter);

// Catch 404 errors
app.use((req, res, next) =>
{
    return res.status(404).send({message: 'Endpoint Not Found'});
});

// error handler
app.use((err, req, res) =>
{
    return res.status(err.status || 500).json({success: false, message: err.message});
});
app.listen(3000);