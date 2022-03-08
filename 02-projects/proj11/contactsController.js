import contactsService from './contactsService.js';
import express from 'express';

const handleErr = (err, resp) => {
    console.log(err);
    resp.status(500);
    resp.send("Regret Inconvinience, Soemthign wnet wrong on the server. Please try later");
};

const getAllAction = (req, resp) => {
    contactsService.getAll()
        .then(data => {
            resp.status(200);
            resp.send(data);
        })
        .catch(err => handleErr(err, resp));
};

const getByIdAction = (req, resp) => {
    let id = req.params.id;
    contactsService.getById(id)
        .then(c => {
            if (c) {
                resp.status(200);
                resp.send(c);
            } else {
                resp.status(404);
                resp.send(`Contact#${id} is not found!`);
            }
        })
        .catch(err => handleErr(err, resp));
};

const add = (req, resp) => {
    let c = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        mailId: req.body.mailId
    };

    contactsService.add(c)
        .then(() => {
            resp.status(201);
            resp.send(c);
        })
        .catch(err => handleErr(err, resp));

};

const modify = (req, resp) => {
    let c = {
        _id: req.body._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        mailId: req.body.mailId
    };

    contactsService.modify(c)
        .then(() => {
            resp.status(202);
            resp.send(c);
        })
        .catch(err => handleErr(err, resp));
};

const deleteById = (req, resp) => {
    let id = req.params.id;

    contactsService.deleteById(id)
        .then(() => {
            resp.status(204);
            resp.send();
        })
        .catch(err => handleErr(err, resp));
};


let contactRouter = express.Router();

contactRouter.get("/",getAllAction);
contactRouter.get("/:id",getByIdAction);
contactRouter.post("/",add);
contactRouter.put("/",modify);
contactRouter.delete("/:id",deleteById);

export default contactRouter;