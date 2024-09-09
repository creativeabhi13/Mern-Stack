const User = require("../models/user");

const isLoggedin = (req, res, next) => {

  const tokens = req.headers.authorization;
  if(!tokens== null){
      return res.status(400).json({message: "No token provided"});
  }
  
 User.findOne({tokens: tokens[1]})
  .then(user => {
       if(!user){
            return res.status(400).json({message: "User not found"});
       }
       res.json({message: "You are authenticated 2", user:user}).
          catch(err => {
              console.log(err);
              res.json("Error authenticating user");
          });
  }
  );





}