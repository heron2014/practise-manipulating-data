var owners = [{firstname: "anita", email: "a@gm.com"},{firstname: "tom", email: "tom@gm.com"},{firstname: "sara", email: "sara@gm.com"}];

var redis = [{fn: "mario",img: 'im1', emails: [{val: "m@gm.com"}]},{fn: "anita", img: 'im2',emails: [{val: "a@gm.com"}] },{fn: "luk",img: 'im3', emails: [{val: "luk@gm.com"}]}];

var users = [{firstname: "anita", email: "a@gm.com", id:'1'},{firstname: "tom", email: "tom@gm.com", id: '2'},{firstname: "sara", email: "sara@gm.com", id: '3'}]

var newData = [];

owners.forEach(function (owner) {
	var matched = redis.reduce(function (newObj, r) {

		if (owner.email === r.emails[0].val) {
		newObj = {firstname: owner.firstname, email: owner.email, img: r.img };
		}

	return newObj;

   },{});

	if (Object.keys(matched).length > 0) {

		users.forEach(function(user) {
			if (user.email === owner.email) {
				matched.id = user.id;
			}

		})

		newData.push(matched);
	}



});

console.log(newData);
