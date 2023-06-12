// module.exports = function(req,res,next){
//     res.locals.user = req.session.user;
//     res.locals.flash = req.session.flash;
//     let role = req.session.user.role;
//     let admin = role.find((r) => r == "admin");
//     if (admin) {
//     res.locals.isAdmin = true;
//      } else {
//     res.locals.isAdmin = false;
//      }
//     req.session.flash = null;
//     req.setFlash =  function (type,message){
//         req.session.flash =  {type, message};
//     }
//     next();
// }
// module.exports = function(req, res, next) {
//     res.locals.user = req.session.user;
//     res.locals.flash = req.session.flash;
//     if(!req.session.user || !req.session.user.role){
//       res.locals.isAdmin= false;
//     }
//     if (req.session.user && req.session.user.role) { // Add a check for req.session.user.role
//       let role = req.session.user.role;
//       let admin = role.find((r) => r == "admin");
//       if (admin) {
//         res.locals.isAdmin = true;
//       } 
//     }
  
//     req.session.flash = null;
//     req.setFlash = function(type, message) {
//       req.session.flash = {
//         type,
//         message
//       };
//     };
//     next();
//   };
module.exports = function(req, res, next) {
  res.locals.user = req.session.user;
  res.locals.flash = req.session.flash;

  if (req.session.user && req.session.user.role) {
    let role = req.session.user.role;
    let admin = role.find((r) => r === "admin");
    res.locals.isAdmin = !!admin;
  } else {
    res.locals.isAdmin = false;
  }

  req.session.flash = null;

  req.setFlash = function(type, message) {
    req.session.flash = {
      type,
      message
    };
  };

  next();
};
