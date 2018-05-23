var Video = /** @class */ (function () {
    function Video(title, category, licence, runTime, comment, like, share, description, tags) {
        var _this = this;
        this.title = title;
        this.category = category;
        this.licence = licence;
        this.runTime = runTime;
        this.comment = comment;
        this.like = like;
        this.share = share;
        this.description = description;
        this.tags = tags;
        //Title
        this.getTitle = function () {
            return _this.title;
        };
        this.setTitle = function (titleName) {
            _this.title = titleName;
        };
        //GETTERS AND SETTERS
        //Description
        this.getDescription = function () {
            return _this.description;
        };
        this.setDescription = function (description) {
            _this.description = description;
        };
        //category
        this.getCategory = function () {
            return _this.category;
        };
        this.setCategory = function (category) {
            _this.category = category;
        };
        //licence
        this.getLicence = function () {
            return _this.licence;
        };
        this.setLicence = function (licence) {
            _this.licence = licence;
        };
        //Runtime
        this.getRunTime = function () {
            return _this.runTime;
        };
        this.setRunTime = function (runTime) {
            _this.runTime = runTime;
        };
        //tags
        this.getTags = function () {
            return _this.tags;
        };
        this.setTags = function (tags) {
            _this.tags = tags;
        };
        //comments
        this.getComments = function () {
            return _this.comment;
        };
        this.setComments = function (comment) {
            _this.comment = comment;
        };
        //likes
        this.getLike = function () {
            if (_this.like) {
                return "number of  likes = 1";
            }
            else {
                return " no likes";
            }
        };
        this.setLike = function (like) {
            _this.like = like;
        };
        //share
        this.getShare = function () {
            if (_this.share) {
                return "number of shares = 1";
            }
            else {
                return "no shares";
            }
        };
        this.setShare = function (share) {
            _this.share = share;
        };
        this.title = title;
        this.description = description;
        this.category = category;
        this.licence = licence;
        this.runTime = runTime; // number in seconds
        this.tags = tags;
        this.comment = comment;
        this.like = like; // like a boolean - yes/no
        this.share = share; //boolean yes/no
    }
    return Video;
}());
//creating a function to create a new instance to keep  the code clean;
var createObjectAnkit = function () {
    //creating instance
    var ankit = new Video("Road race", "Entertainment", "Standard youtube licence", 3200);
    //calling setters for optional parameters
    ankit.setComments("Nice video");
    ankit.setLike(true);
    //calling getters for displaying information
    console.log("Beggining of Youtube video" + "\n\n");
    console.log("Title = " + ankit.getTitle());
    console.log("Description = " + ankit.getDescription());
    console.log("category = " + ankit.getCategory());
    console.log("Licence = " + ankit.getLicence());
    console.log("likes = " + ankit.getLike());
    console.log("runtime in seconds = " + ankit.getRunTime());
    console.log(ankit.getShare());
    console.log("tags= " + ankit.getTags());
    console.log("comment = " + ankit.getComments());
};
createObjectAnkit();
console.log("******************************************************");
//Social  media profile
console.log("\n" + "Beginning of About" + "\n \n");
var About = /** @class */ (function () {
    function About(workAndEducation, placesYouHaveLived, contactAndBasicInfo, familyAndRelationships, detailsAboutYou, lifeEvents) {
        var _this = this;
        this.workAndEducation = workAndEducation;
        this.placesYouHaveLived = placesYouHaveLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyAndRelationships = familyAndRelationships;
        this.detailsAboutYou = detailsAboutYou;
        this.lifeEvents = lifeEvents;
        //getters and setters
        //work
        this.getWorkAndEducation = function () {
            // return this.workAndEducation;
            var result = "";
            for (var p in _this.workAndEducation) {
                if (_this.workAndEducation.hasOwnProperty(p)) {
                    result += p + " " + " : " + " " + _this.workAndEducation[p] + "\n";
                }
            }
            return result;
        };
        this.setWorkAndEducation = function (workAndEducation) {
            _this.workAndEducation = workAndEducation;
        };
        //palces you have lived
        this.getPlacesYouHaveLived = function () {
            return _this.placesYouHaveLived;
        };
        this.setPlacesYouHaveLived = function (places) {
            _this.placesYouHaveLived = places;
        };
        //contact and basic info
        this.getContactAndBasicInfo = function () {
            // return this.contactAndBasicInfo
            var result = "";
            for (var p in _this.contactAndBasicInfo) {
                if (_this.contactAndBasicInfo.hasOwnProperty(p)) {
                    result += p + " " + " : " + " " + _this.contactAndBasicInfo[p] + "\n";
                }
            }
            return result;
        };
        this.setContactAndBasicInfo = function (contactAndBasicInfo) {
            _this.contactAndBasicInfo = contactAndBasicInfo;
        };
        // family and relations ships
        this.getFamilyAndRelationships = function () {
            // return this.familyAndRelationships;
            var result = "";
            for (var p in _this.familyAndRelationships) {
                if (_this.familyAndRelationships.hasOwnProperty(p)) {
                    result += p + " " + " : " + " " + _this.familyAndRelationships[p] + "\n";
                }
            }
            return result;
        };
        this.setFamilyAndRelationships = function (familyAndRelationships) {
            _this.familyAndRelationships = familyAndRelationships;
        };
        //Details About You
        this.getDetailsAboutYou = function () {
            // return this.detailsAboutYou;
            var result = "";
            for (var p in _this.detailsAboutYou) {
                if (_this.detailsAboutYou.hasOwnProperty(p)) {
                    result += p + " " + " : " + " " + _this.detailsAboutYou[p] + "\n";
                }
            }
            return result;
        };
        this.setDetailsAboutYou = function (detailsAboutYou) {
            _this.detailsAboutYou = detailsAboutYou;
        };
        //life Events
        this.getLifeEvents = function () {
            // return this.lifeEvents;
            var result = "";
            for (var p in _this.lifeEvents) {
                if (_this.lifeEvents.hasOwnProperty(p)) {
                    result += p + " " + " : " + " " + _this.lifeEvents[p] + "\n";
                }
            }
            return result;
        };
        this.setLifeEvents = function (lifeEvents) {
            _this.lifeEvents = lifeEvents;
        };
        this.workAndEducation = workAndEducation;
        this.placesYouHaveLived = placesYouHaveLived;
        this.contactAndBasicInfo = contactAndBasicInfo;
        this.familyAndRelationships = familyAndRelationships;
        this.detailsAboutYou = detailsAboutYou;
        this.lifeEvents = lifeEvents;
    }
    return About;
}());
var createObjectJack = function () {
    //creating new instace of the classs About.
    var jack = new About();
    //creating objects to be provided as arguments to setters.
    var workAndEducation = {
        "work": "Transaction risk  investigato in Amazon from sep 2017 to april 2018",
        "Professional skill": "Full stack development",
        "Education": "B.E computer Science"
    };
    var placesYouHaveLived = ["Bangalore - current city", "kodagu", "mangalore"];
    var contactAndBasicInfo = {
        "phno": 8884383131,
        "Email": "anaankit992g@gmail.com",
        "Facebook": "http://facebook.com/Ankit.Anand50"
    };
    var familyAndRelationships = {
        "Sister": "Harshita",
        "Cousin": "roshan kumbar"
    };
    var detailsAboutYou = {
        "About you": "http://facebook.com/Ankit.Anand50",
        "other names": "veerbadra"
    };
    var lifeEvents = {
        2016: "Left GECK",
        2012: "Started college at GECk",
        2011: "Graguated from RJS polytechnic",
        2008: "Graduated frm BHSS",
        1992: "Born on september 19, 1992"
    };
    // calling settters
    jack.setWorkAndEducation(workAndEducation);
    jack.setPlacesYouHaveLived(placesYouHaveLived);
    jack.setContactAndBasicInfo(contactAndBasicInfo);
    jack.setFamilyAndRelationships(familyAndRelationships);
    jack.setDetailsAboutYou(detailsAboutYou);
    jack.setLifeEvents(lifeEvents);
    //calling getters
    console.log("work and education  " + "\n \n" + jack.getWorkAndEducation() + "\n");
    console.log("_______________________________________");
    console.log("Places Lived " + "\n \n" + jack.getPlacesYouHaveLived() + "\n");
    console.log("_______________________________________");
    console.log("Contact And basic infomation " + "\n \n" + jack.getContactAndBasicInfo() + "\n");
    console.log("_______________________________________");
    console.log("Family and relationships" + "\n \n" + jack.getFamilyAndRelationships() + "\n");
    console.log("_______________________________________");
    console.log("Details about you" + "\n \n" + jack.getDetailsAboutYou() + "\n");
    console.log("_______________________________________");
    console.log("Life events " + "\n \n" + jack.getLifeEvents());
};
createObjectJack();
