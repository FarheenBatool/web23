// module.exports = function(req,res,next){
// if (req.session.user.role.length === 0) {
//     req.setFlash("danger","You need to be admin to access this")
//     res.redirect("back")
//   } else {
   
//   }
//     next();
// }
//|| req.session.user.role.length === 0
module.exports = function(req, res, next) {
  if (!req.session.user || !res.locals.isAdmin) {
    req.setFlash("danger", "You need to be an admin to access this from admin");
    return res.redirect("back");
  }
  
  next();
};


  