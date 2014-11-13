$(function() {

	var students = getStudents();
	listStudents(students);

	function listStudents(students) {
		var	html = '';
		for(var i = 0; i < students.length; i++){
			var student = students[i];
			html += '<li class="student">';
			html += '<div class="first-name">' + student.fname + '</div>';
			html += '<div class="last-name">' + student.lname + '</div>';
			html += '</li>';
		}
		$('#students').append(html);
	};

	function getStudents() {
		var students = [
	    {
	      "fname": "Brianna",
	      "lname": "Casuccio",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Darien",
	      "lname": "Dodson",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    },
	    {
	      "fname": "Gibble",
	      "lname": "Gibble",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    },
	    {
	      "fname": "Julie",
	      "lname": "Johnson",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Tieara",
	      "lname": "Jones",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Dylan",
	      "lname": "McGowan",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    },
	    {
	      "fname": "Donte",
	      "lname": "Pollimeni",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    },
	    {
	      "fname": "Silvia",
	      "lname": "Pulido",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Sara",
	      "lname": "Sherwood",
	      "gender": "female",
	      "picture": "http://i.imgur.com/izFCkn1.png"
	    },
	    {
	      "fname": "Randal",
	      "lname": "Sonner",
	      "gender": "male",
	      "picture": "http://i.imgur.com/7KYjDNh.jpg"
	    }
	  ];

		return students
	};
});