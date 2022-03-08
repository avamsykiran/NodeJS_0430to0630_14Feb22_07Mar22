import bp from 'body-parser';
import express from 'express';

import contactRouter from './contactsController.js';

const PORT = 9999;

let app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.use('/contacts',contactRouter);

app.listen(PORT,() => {
    console.log("Server started at http://localhost:9999");
});
