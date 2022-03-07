import contactsService from './contactsService.js';

const getAllAction = (req,resp) => {
    resp.status(200);
    resp.send(contactsService.getAll());
};

const getByIdAction = (req,resp) => {
    let id = req.params.id;
    let c = contactsService.getById(id);

    if(c) {
        resp.status(200);
        resp.send(c);
    }else{
        resp.status(404);
        resp.send(`Contact#${id} is not found!`);
    }
};

const add = (req,resp) => {
    let c = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        mobile:req.body.mobile,
        mailId:req.body.mailId
    };

    c.id = contactsService.getAll().map(c => c.id).reduce( (id1,id2) => Math.max(id1,id2) ) + 1;

    contactsService.add(c);
    resp.status(201);
    resp.send(c);
};

const modify = (req,resp) => {
    let c = {
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        mobile:req.body.mobile,
        mailId:req.body.mailId
    };

    try{
        contactsService.modify(c);
        resp.status(202);
        resp.send(c);
    }catch(err) {
        resp.status(400);
        resp.send(err.message);
    }
    
};

const deleteById = (req,resp) => {
    let id = req.params.id;

    try{
        contactsService.deleteById(id);
        resp.status(204);
        resp.send();
    }catch(err) {
        console.log(err);
        resp.status(400);
        resp.send(err.message);
    }
};

export default {getAllAction, getByIdAction,add,modify,deleteById};