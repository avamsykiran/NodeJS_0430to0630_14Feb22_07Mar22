import bp from 'body-parser';
import express from 'express';

import contactsController from './contactsController.js';

const PORT = 9999;

let app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

app.get('/contacts',contactsController.getAllAction);
app.get('/contacts/:id',contactsController.getByIdAction);
app.post('/contacts',contactsController.add);
app.put('/contacts',contactsController.modify);
app.delete('/contacts/:id',contactsController.deleteById);

app.listen(PORT,() => {
    console.log("Server started at http://localhost:9999");
});
