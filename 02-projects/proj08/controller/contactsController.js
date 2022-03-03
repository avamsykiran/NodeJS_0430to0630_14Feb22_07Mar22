import contactService from '../services/contactService.js';

const generateContactsPage = (req,resp) => {
    contactService.readContacts(
        contacts => {
            resp.write("<html><body>");
            resp.write("<table style='width:70%;margin:auto;border:1px solid black'>");
            resp.write(`
             <thead>
                <tr>
                    <th>Contact#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                </tr>
             </thead><tbody>`);
            contacts.forEach( c => {
                resp.write(`
                <tr>
                <td>${c.id}</td>
                <td>${c.firstName}</td>
                <td>${c.lastName}</td>
                <td>${c.mobile}</td>
                <td>${c.mailId}</td>
                </tr>`);
            });
            resp.write("</tbody></table>");
            resp.write("</body><html>");
            resp.end();
        },
        err => {
            resp.write(`<h3>Error:${err.message}</h3>`);
            resp.end();
        })
};

export default {generateContactsPage};