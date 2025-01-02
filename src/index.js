import express from 'express'
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import {sendEmail} from "./public/script/Email.js";

var emailName;
function validation(res,req,next) {
    emailName = res.body['input'];
    next();
}

const dirName = dirname(fileURLToPath(import.meta.url));
const routes = express();
const port = 3000;

routes.use(express.static('src/public'));
routes.use(bodyParser.urlencoded({extended : true}));
routes.use(validation);

routes.listen(port,(res,req)=> {
    console.log(`Porta de numero ${port}`);
});

routes.get("/",(res,req)=> {
    req.render(dirName+'/views/index.ejs');
});

routes.post("/sucess", (res,req)=> {
    req.render(dirName+'/views/sucess.ejs',
        {email: emailName});
    
    sendEmail(emailName);
});