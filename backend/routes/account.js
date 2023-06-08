const router = require('express').Router(); // use express router for this one
let UserAccount = require('../models/user_account.model'); // assign temporary variables

// login endpoint
router.route("/login").get((req, res) => {
	// tweaked to fit
	UserAccount.findOne({ email: `${req.query.email}` })
	  .then((users) => {
		if (users.password === req.query.password) {
			res.status(200).json(users); // send right response	
		} else {
			res.status(300).json("Incorrect password");
		}
	  })
	  .catch((error) => res.status(400).json("Error! " + error));
});

// end of login endpoint

// login endpoint
router.route("/getprofiles").get((req, res) => {
	UserAccount.find()
	.then(users => res.status(200).json(users))
	.catch(error => res.status(400).json(error));
});
// end of login endpoint

// register enpoint
router.route('/register').post((req, res) => {
	// required fields
	console.log(req.body.params);

	const name = req.body.params.name;
	const email = req.body.params.email;
	const password = req.body.params.password;
	const jobDescription = req.body.params.jobDescription;
	const address = req.body.params.address;
    const aboutUser = req.body.params.aboutUser;
	const profilePicture = req.body.params.profilePicture;

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