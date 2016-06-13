var bio = {
    "name": "Kenny Rouse",
    "role": "I.T. Specialist",
    "contact": {
    "mobile": "561-402-0802",
    "email": "krouse@outlook.com",
    "github": "https://github.com/greatscott22",
    "location": "West Palm Beach"
  },
    "welcomeMessage": "Hello!  Thanks for taking the time to look at my resume.",
    "skills": ["HTML 5", "CSS 3", "Javascript", "WordPress"],
    "bioPic": "images/fry.jpg"
  };

var work = {
  "jobs":  [
  {
    "employer": "Groelle & Salmon PA",
    "title": "IT Specialist",
    "dates": "2010 - Present",
    "description": "Built website from ground up and then maintained.  Also performed day-to-day systems administration functions."
  },
  {
    "employer": "Borglund Tyson, LLC.",
    "title": "IT Manager",
    "dates": "2005 - 2010",
    "description": "Built website.  Made all I.T. related decisions and then implemented them."
  }
]
};

var projects = {
  "project": [
  {
    "title": "Portfolio Site",
    "dates": "June 2016",
    "description": "Site that holds all my projects"
    //"images": "array with string urls"
  },
  {
    "title": "Maps Site",
    "dates": "June 2016",
    "description": "Site that works with Google Maps API"
    //"images": "array with string urls"
  }
  ]
};

var education = {
    "name": "Palm Beach State College",
    "location": "Lake Worth",
    "degree": "Network Administration",
    "dates": "2016",
    "url": "www.palmbeachstate.edu"
};

var online = {
    "school": "Udacity",
    "title": "Front-End Developer Course",
    "dates": "2016",
    "url": "www.udacity.com"
};


bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
}

work.display = function() {
  $("#workExperience").append(HTMLworkStart);
  $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer));
  $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[0].title));
  $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[0].dates));
  $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[0].description));

  $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[1].employer));
  $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[1].title));
  $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[1].dates));
  $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[1].description));
  $(".work-entry:last").append(HTMLworkStart);
}

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  $("#projects").append(HTMLprojectTitle.replace("%data%", projects.project[0].title));
  $("#projects").append(HTMLprojectDates.replace("%data%", projects.project[0].dates));
  $("#projects").append(HTMLprojectDescription.replace("%data%", projects.project[0].description));

  $("#projects").append(HTMLprojectTitle.replace("%data%", projects.project[1].title));
  $("#projects").append(HTMLprojectDates.replace("%data%", projects.project[1].dates));
  $("#projects").append(HTMLprojectDescription.replace("%data%", projects.project[1].description));
  $(".project-entry:last").append(HTMLprojectStart);
}

education.display = function() {
  $("#education").append(HTMLschoolStart);
  $("#education").append(HTMLschoolName.replace("%data%", education.name));
  $("#education").append(HTMLschoolDegree.replace("%data%", education.degree));
  $("#education").append(HTMLschoolDates.replace("%data%", education.dates));
  $(".education-entry:last").append(HTMLschoolStart);
}

online.display = function() {
  $("#education").append(HTMLonlineClasses)
  $("#education").append(HTMLonlineTitle.replace("%data%", online.title));
  $("#education").append(HTMLonlineSchool.replace("%data%", online.school));
  $("#education").append(HTMLonlineDates.replace("%data%", online.dates));
  $("#education").append(HTMLonlineURL.replace("%data%", online.url));
}

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

bio.display();
work.display();
projects.display();
education.display();
online.display();
