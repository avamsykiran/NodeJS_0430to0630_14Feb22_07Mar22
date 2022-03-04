import contactsService from './contactsService.js';

const getAllAction = (req,resp) => {
    resp.writeHead(200);
    resp.write(JSON.stringify(contactsService.getAll()));
    resp.end();
};

export default {getAllAction};