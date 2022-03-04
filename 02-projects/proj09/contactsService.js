import fs from 'fs';

const DATA_FILE = "./contacts.json";

let contacts = JSON.parse(fs.readFileSync(DATA_FILE));

const getAll = () => [...contacts];

const getById = id => contacts.find(c => c.id==id);

const add = contact => {
    contacts.push(contact);
    fs.writeFileSync(DATA_FILE,JSON.stringify(contacts));
};

const modify = contact => {
    let index = contacts.findIndex(c => c.id==contact.id);
    if(index==-1)
        throw new Error("No such contact found to update");

    contacts[index]=contact;
    fs.writeFileSync(DATA_FILE,JSON.stringify(contacts));
};

const deleteById = id => {
    let index = contacts.findIndex(c => c.id==id);
    if(index==-1)
        throw new Error("No such contact found to update");

    contacts.splice(index,1);
    fs.writeFileSync(DATA_FILE,JSON.stringify(contacts));
}

export default { getAll,getById,add,modify,deleteById};