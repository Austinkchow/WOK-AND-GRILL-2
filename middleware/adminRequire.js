module.exports = function (req, res, next) {
    if (!req.session.currentUser) {
        return res.redirect('/auth/login');
    }
    if (req.session.currentUser.id !== '5edbead7890ad1563d050fe0') {
        return res.redirect('/');
    }
    next();
};