FlowRouter.route('/', {
    name: "home",
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/new-video', {
    name: "new-video",
    action() {
        BlazeLayout.render('Videos', {main: "Videos"});
    }
});
FlowRouter.route('/tbd', {
    name: "tbd",
    action() {
        BlazeLayout.render('tbd', {main: "tbd"});
    }
});