var bio = {
    "name" : "Kenny Rouse",
    "role" : "I.T. Specialist",
    "contact" : {
    "mobile" : "561-402-0802",
    "email": "krouse@outlook.com",
    "github": "https://github.com/greatscott22",
    "location": "West Palm Beach"
  },
    "welcomeMessage": "Hello!  Thanks for taking the time to look at my resume.",
    "skills": ["HTML 5", "CSS 3", "Javascript"],
    "bioPic": "images/fry.jpg"
  };



 var education = {
  "schools": [
  {
    "name": "Palm Beach State College",
    "location": "Lake Worth",
    "major": "Network Administration",
    "year": "2016",
    "url": "www.palmbeachstate.edu"
  },
  {
    "school": "Udacity",
    "location": "Online",
    "major": "Front-End Developer Course",
    "year": "2016",
    "url": "www.udacity.com",
  }
  ]
};

var skills = ["HTML 5", "CSS 3", "Javascript"];

var work = {
  "jobs":  [
  {
    "employer": "Groelle & Salmon PA",
    "title": "IT Specialist",
    "dates": "Current Position",
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
  "projects": [
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
}



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
  $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer));
  $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[0].title));
  $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[0].dates));
  $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[0].description));
}, {
  $("workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[1].employer));
};


bio.display();
work.display();
projects.display();
education.display();