import userService from "../services/userService";

let handleLogin = async (req, res) =>{
    let email = req.body.email;
    let password = req.body.password;
    
    if(!email || !password ){
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter !'
        })
    }

    // check email exist
    // compare password
    // return userInfo
    // access_token : jwt web token
    let userData =  await userService.handleUserLogin(email, password);
    console.log(userData)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user :  userData.user ? userData.user : {}
      
    })
}

let  handleGetAllUser = async (req, res) =>{
    let userId = req.body.id; //All, id
    if(!userId){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter',
            users: []
        })
    }
    let users = await userService.getAllUsers(userId);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users
    });
}

module.exports ={
    handleLogin,
    handleGetAllUser,
}