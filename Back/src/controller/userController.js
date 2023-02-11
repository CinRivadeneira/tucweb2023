
const {RegisterService, LoginService} = require("../service/userService")

const saveUserController = async (req, res) => {
    const {empresa, email, password} = req.body;
    const response = await RegisterService(email, empresa, password);
    res.status(201).json({reponse : response});
 }


const loginController= async(req, res) => {
    const{email, password} = req.body;
    const response = await LoginService(email, password);
    if(response !== ""){
        res.json({empresa: response});
    }else{
        res.status(404).json({error: "La empresa no está registrada"});
    }
}

 module.exports = {saveUserController, loginController};