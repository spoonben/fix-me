$(function() {

	var students = getStudents();
	listStudents(students);
	$('#student').on('click', function() {
		// Insert your click event here!
	});

	function listStudents(students) {
		for(var i = 0; i < students.length; i++){
			var student = students[i];
			var	html = '';
			html += '<li class="student">';
			html += '<div class="first-name">' + student.fname + '</div>';
			html += '<div class="last-name">' + student.lname + '</div>';
			html += '</li>';
		}
		$('#students').html(html);
	};

	function getStudents() {
		var students = [
	    {
	      "fname": "Brianna",
	      "lname": "Casuccio",
	      "gender": "female",
	      "note": "Brianna likes to wear scarves!",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Darien",
	      "lname": "Dodson",
	      "gender": "male",
	      "note": "Darien once ate a bowl of popcorn chicken soup. Gross.",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    },
	    {
	      "fname": "Gibble",
	      "lname": "Gibble",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg",
	      "note": "Gibble's teachers often yell at him \"GOSH DARNIT GIBBLE\""
	    },
	    {
	      "fname": "Julie",
	      "lname": "Johnson",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png",
	      "note": "Julie won't ever stop knitting. It's seriously getting insane. She has a problem."
	    },
	    {
	      "fname": "Tieara",
	      "lname": "Jones",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png",
	      "note": "Tieara likes to write websites about beer. Neat."
	    },
	    {
	      "fname": "Dylan",
	      "lname": "McGowan",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg",
	      "note": "Dylan thinks he can play guitar real good like. Some beg to differ."
	    },
	    {
	      "fname": "Donte",
	      "lname": "Pollimeni",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	      "note": "Donte likes hats. Especially TF2 hats."
	    },
	    {
	      "fname": "Silvia",
	      "lname": "Pulido",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png",
	      "note": "Silvia really wants to be a chef. The only problem, she can't cook!"
	    },
	    {
	      "fname": "Sara",
	      "lname": "Sherwood",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png",
	      "note": "Sara works at a place, they probably sell things there."
	    },
	    {
	      "fname": "Randal",
	      "lname": "Sonner",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg",
	      "note": "Bikes, bikes, bikes, I like inferior hockey teams."
	    }
	  ];
	};
});