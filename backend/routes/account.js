const router = require('express').Router(); // use express router for this one
let UserAccount = require('../models/user_account.model'); // assign temporary variables

// login na tarong endpoint
router.route("/login").get((req, res) => {
	console.log(req);
	UserAccount.findOne({email: `${req.body.email}`})
	.then(users => res.status(200).json(users))
	.catch(error => res.status(400).json('User not found! ' + error));
});

// signup enpoints
//Added another end point for sign up, full update

router.route('/sign_up').post((req, res) => {
	console.log(req.body);
	
	// igka send ug post request makuha ni	 sila dapat
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const jobDescription = req.body.jobDescription;
	const address = req.body.address;
    const aboutUser = req.body.aboutUser;
	const profilePicture = req.body.profilePicture;

	const newUserAccount = new UserAccount({name, email, password, jobDescription, address, aboutUser, profilePicture});

	// register user
	newUserAccount.save()
		.then(() => {
            res.status(200).json('Successfully registered')
            return res.end();
        })
		.catch((err) => res.status(400).json('Error in registration.' + err));
});
// end of sign-up endpoints

module.exports = router;
// employer news feed	