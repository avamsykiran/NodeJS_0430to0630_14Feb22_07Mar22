import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    mobile: String,
    mailId: String
});

const ContactModel = mongoose.model('Contact', ContactSchema);

const DB_URL = 'mongodb://localhost:27017/my_database';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to db successfully"))
    .catch(err => console.log(err));

const getAll = () => ContactModel.find();

const getById = id => ContactModel.findById(id);

const add = contact => new ContactModel(contact).save();

const modify = contact => ContactModel.findByIdAndUpdate(contact._id,contact,{new:true});

const deleteById = id => ContactModel.findByIdAndRemove(id);

export default { getAll, getById, add, modify, deleteById };