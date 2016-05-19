/* global $,HTMLheaderName,HTMLheaderRole,HTMLmobile,HTMLemail,HTMLgithub,HTMLtwitter,HTMLbioPic,HTMLwelcomeMsg,HTMLskillsStart,line,HTMLskills,HTMLworkStart,
HTMLworkEmployer,HTMLworkTitle,HTMLworkDates,HTMLworkLocation,HTMLworkDescription,googleMap,HTMLprojectStart,HTMLprojectTitle,HTMLprojectDates,HTMLprojectDescription,
HTMLprojectImage,HTMLschoolStart,HTMLschoolName,HTMLschoolDegree,HTMLschoolDates ,HTMLschoolLocation,HTMLschoolMajor,HTMLonlineClasses,HTMLonlineTitle,HTMLonlineSchool,
HTMLonlineDates,HTMLonlineURL,internationalizeButton*/

/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ['programming', 'teaching', 'Python', 'Javascript', 'Japanese'];

var bio = {
	'name': 'Akiko Forbes',
	'role': 'Web Developper',
	'contacts': {
		'mobile': '04-2221-9045',
		'email': 'akiko.forbes@outlook.com',
		'github': 'https://github.com/AkikoForbes',
		'twitter': '@akiko_forbes',
		'location': 'Canberra, ACT, Australia'
	},
	'welcomeMessage' : 'Welcome to my resume & portfolio! I\'m currently learning programming and intending to become a web developper.' +
		' If you have any questions or comments, please feel free to contact me anytime!',
	'skills' : skills,
	'biopic' : 'images/akikoprofilepic.jpg'
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$(formattedMobile).prependTo('#topContacts, #footerContacts');
	$(formattedGithub).prependTo('#topContacts, #footerContacts');
	$(formattedTwitter).prependTo('#topContacts, #footerContacts');
	$(formattedEmail).prependTo('#topContacts, #footerContacts');

	var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$('#header:last').append(HTMLskillsStart);
		for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[indexCount]);
			$('#skills').append(formattedSkill);
		}
	}
}


var work = {
	'jobs': [
		{
			'employer': 'Self-employed',
			'title': 'Freelance Translator',
			'location': 'various locations',
			'dates': '2013 - current',
			'description': 'Translating product descriptions, brouchers and development related materials ' +
				'from English to Japanese and from Japanese to English.'
		},
		{
			'employer': 'LA SALLE ACADEMY - LITHGOW',
			'title': 'Casual Teacher Assistant',
			'location': 'Lithgow, NSW, Australia',
			'dates': 'November 2012',
			'description': 'Assisting students who have learning dificulties in class and for their homeworks.'
		},
		{
			'employer': 'Toyota Kita Senior High School',
			'title': 'English Teacher',
			'location': 'Toyota, Aichi, Japan',
			'dates': '2009 - 2011',
			'description': 'Teaching mid-intermediate level English to Japanese high school students ' +
				'and assisting homeroom students for their academic progress and carreer decisions.'
		},
		{
			'employer': 'Handa Commercial Senior High School',
			'title': 'English Teacher',
			'location': 'Handa, Aichi, Japan',
			'dates': '2001 - 2009',
			'description': 'Teaching low-intermediate level English to Japanese high school students ' +
				'and assisting homeroom students for their academic progress and carreer decisions.'
		}
	]
};

work.display = function() {
	for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
		var job = work.jobs[indexCount];
		$('#workExperience').append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedWorkTitile = HTMLworkTitle.replace('%data%', job.title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
		$('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitile +formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
	}
}


var projects = {
	'projects': [
		{
			'title': 'IPND Stage4 Lesson Summary Website',
			'dates': 'November, 2015 - March, 2016',
			'description': 'A website which summarizes what I learned in Stage4 in Intro to Programming Nanodegree, Udacity: ' +
				'creating a website in Python using Google App Engine and storing data in Google app store ' +
				'so that users can leave their comments and post them on the website.' ,
			'images': ['images/ipndstage4websiteproject.jpg', 'images/ipndstage4websitefeedback.jpg']
		},
		{
			'title': 'Kids Movie Collection',
			'dates': 'October, 2015 - November, 2015',
			'description': 'A Website of English and Japanese movie collections which shows trailers. ' +
				'This website html is automatically created in Python.',
			'images': ['images/kidsmoviecollectionswebsite.jpg']
		}
	]
};

projects.display = function() {
	for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
		var project = projects.projects[indexCount];

		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);

		for (var i= 0; i < project.images.length; i++) {
			var image = project.images[i];
			var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
}


var education = {
	'schools': [
		{
			'name': 'University of Technology, Sydney',
			'location': 'Ultimo, NSW, Australia',
			'degree': 'Master of Arts',
			'majors': ['Teaching English to Speakers of Other Languages (TESOL)'],
			'dates': '2006 - 2007',
			'url': 'http://www.uts.edu.au/'
		},
		{
			'name': 'Navitas City College',
			'location': 'Chippendale, NSW, Australia',
			'degree': 'Completed credits towards a Certificate III',
			'majors': ['Spoken and Written English'],
			'dates': '2011 - 2012',
			'url': 'http://www.navitas-english.com.au/amep/amep-courses/cswe-courses/'
		},
		{
			'name': 'Nagoya University',
			'location': 'Nagoya, Aichi, Japan',
			'degree': 'Bachelor of Arts',
			'majors': ['English Linguistics', 'Secondary Education'],
			'dates': '1997 - 2001',
			'url': 'http://en.nagoya-u.ac.jp/index.html'
		}
	],
	'onlineCourses': [
		{
			'title': 'Intro to Programming Nanodegree',
			'school': 'Udacity',
			'date': 'July, 2015 - current',
			'url': 'https://www.udacity.com/course/intro-to-programming-nanodegree--nd000'
		}
	]
};

education.display = function() {
	for (var indexCount=0; indexCount < education.schools.length; indexCount++) {
		var school = education.schools[indexCount];

		$('#education:last').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates);

		var major = '';
		var lastMajorIndex = school.majors.length -1;
		for (var i=0; i < lastMajorIndex; i++) {
			major = major + school.majors[i] + ' , ';
		}
		var majorStrings = major + school.majors[lastMajorIndex];
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', majorStrings);
		$('.education-entry:last').append(formattedSchoolMajor);
	}

	$('.education-entry:last').append(line);

	for (var x=0; x < education.onlineCourses.length; x++) {
		var onlineCourse = education.onlineCourses[x];

		$('.education-entry:last').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', onlineCourse.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', onlineCourse.school);
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', onlineCourse.date);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', onlineCourse.url);

		$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
	}
}


bio.display();
projects.display();
work.display();
education.display();

$('#mapDiv').append(googleMap);

$('#main').append(internationalizeButton);

function inName() {
	var nameArray = bio.name.trim().split(' ');

	var firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	var capitalizedLastName = nameArray[1].toUpperCase();

	return (firstName + ' ' + capitalizedLastName);
}