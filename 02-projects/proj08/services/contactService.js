import fs from 'fs';

const DATA_FILE="./data/contacts.json";

const readContacts = (okCallBack,errCallBack) => {
    fs.readFile(DATA_FILE,(err,data)=>{
        if(err){
            console.log(err.message);
            errCallBack(new Error("data can not be feteched"));
        }else{
            okCallBack(JSON.parse(data).contacts);
        }
    })
};

export default {readContacts};