

var skill = ["Java","Js","Selenium Webdriver","TestNg"];
var imagePath = "images/fry.jpg";

var  bio = {
	name : "Abirajalakshmi V",
    role : "Senior Quality Engineer",
    contacts : {
          mobile: "+91 9176924343",
          email: "abi3202@gmail.com", 
          github: "https://github.com/Abirajalakshmi",
          linkedin: "https://in.linkedin.com/pub/abirajalakshmi-vinayagasundaram/25/852/199",
          location: "Chennai"
      },
    welcomeMessage: "Hi", 
    skills: skill,
    biopic: imagePath,
    display: function (){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
		$("#header").append(formattedName);
		$("#header").append(formattedRole);
    	$("#main").append(formattedBioPic);
    }
};
bio.display();

// $("#main").append(bio.Name);

// $("#main").append("  ");
// $("#main").append(bio.Role);
// $("#main").append("  ");
// $("#main").append(bio.ContactInfo.mobile);
// $("#main").append("  ");
// $("#main").append(bio.ContactInfo.Address);
// $("#main").append("  ");

// $("#main").append("  ");
// $("#main").append(bio.WelcomeMsg);
// $("#main").append("  ");
// $("#main").append(bio.Skills);

bio.work = {
	"CurrentPosition" : "SQA",
	"Employer" : "Altimetrik",
	"YrsWorked" : 3,
	"City" : "Chennai"
};

bio["education"] = {
	"SchoolName" : "MIT",
	"Yrs" : 4,
	"City" : "Chennai"
};

var education = {
	"Schools" : [
	{
		"City" : "Chennai",
		"Major" : "BE",
		"GradYr" : 2009
},
	{
		"City" : "Chennai",
		"Major" : "10",
		"GradYr" : 2003
	}
	]
};


if(bio.Skills.length > 0){

$("#header").append(HTMLSkillsStart);
var formattedSkills = HTMLSkills.replace("%data%",bio.Skills[0]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLSkills.replace("%data%",bio.Skills[1]);
$("#skills").append(formattedSkills);
var formattedSkills = HTMLSkills.replace("%data%",bio.Skills[2]);
$("#skills").append(formattedSkills);	
var formattedSkills = HTMLSkills.replace("%data%",bio.Skills[3]);
$("#skills").append(formattedSkills);	
}	