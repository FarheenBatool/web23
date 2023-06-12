module.exports = function(req,res,next){
    if (!req.session.user) {
        req.setFlash("danger","Log in first kindly");
        return res.redirect("/login")
    }
    next();
}