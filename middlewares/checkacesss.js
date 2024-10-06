const checkAccess = (UserRole) => {
  return (res, req, next) => {
    
    if (req.user.role === UserRole) {
      next();
    }else{
        return res.send("You can not acess")
    }

  };
};

module.exports = checkAccess