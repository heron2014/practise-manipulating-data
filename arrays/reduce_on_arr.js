//create a new array with new object which has unique email for both arrays
// var newData = [{fistanme: 'anita', email: 'a@gm.com', img:'im1'}];
var owners = [{firstname: "anita", email: "a@gm.com"},{firstname: "tom", email: "tom@gm.com"},{firstname: "sara", email: "sara@gm.com"}];
var redis = [{fn: "mario",img: 'im1', emails: [{val: "m@gm.com"}]},{fn: "anita", img: 'im2',emails: [{val: "a@gm.com"}] },{fn: "luk",img: 'im3', emails: [{val: "luk@gm.com"}]}];

var newData = [];

owners.forEach(function (owner) {

	var matched = redis.reduce(function (newObj, r) {

	   if (owner.email === r.emails[0].val) {
		  newObj = {firstname: owner.firstname, email: owner.email, img: r.img };
		}

	   return newObj;
  },{});

	if (Object.keys(matched).length > 0) { //Object.keys(obj) == ['firstname',email, img] - 3 check for empty object

		newData.push(matched);
	}

});

console.log(newData);
