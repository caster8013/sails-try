module.exports = (req, res, next) => {
    let userMatches = req.session.User.id === req.param('id');
    let isAdmin = req.session.User.admin;

    if (!(userMatches || isAdmin )) {
        let noRightsError = [{name: 'noRights', message: 'You must be admin.'}];
        req.session.flash = {
            err: noRightsError
        }
        res.redirect('/session/new');
        return ;
    }

    next();
};