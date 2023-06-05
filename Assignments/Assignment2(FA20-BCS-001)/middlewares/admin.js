// module.exports = function(req,res,next){
//     let role = req.session.user.role;
//     let admin = role.find((r) => r == "admin");
//     if (admin) {
//     res.locals.isAdmin = true;
//   } else {
//     res.locals.isAdmin = false;
//   }
//     next();
// }
// module.exports = function(req, res, next) {
//     if (req.session.user && req.session.user.role.includes('admin')) {
//       res.locals.isAdmin = true;
//     } else {
//       res.locals.isAdmin = false;
//     }
//     next();
//   };
  