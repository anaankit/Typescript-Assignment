class Video{

    constructor(private title:string,private category:string,
        private licence:string,private runTime:number,public comment?:string,
        public like?:boolean,public share?:boolean,private description?:string,private tags?:string,
        ){

            this.title = title;
            this.description=description;
            this.category=category;
            this.licence=licence; 
            this.runTime=runTime; // number in seconds
            this.tags = tags;
            this.comment = comment;
            this.like = like; // like a boolean - yes/no
            this.share = share; //boolean yes/no
    }

//Title
    getTitle = ():string=>{
        return this.title;
    }

    setTitle = (titleName:string) => {

        this.title = titleName;

    }

//GETTERS AND SETTERS

    //Description
    getDescription = ():string=>{
        return this.description;
    }

    setDescription = (description:string)=>{
        this.description = description;
    }

    //category
    getCategory = ():string=>{
        return this.category;
    }

    setCategory = (category:string)=>{
        this.category=category
    }

    //licence
    getLicence = ():string =>{
        return this.licence;
    }

    setLicence = (licence:string)=>{
        this.licence = licence;
    }

    //Runtime
    getRunTime = ():number=>{
        return this.runTime;
    }

    setRunTime = (runTime:number)=>{
        this.runTime=runTime;
    }
    
    //tags
    getTags = ():string =>{
        return this.tags;
    }

    setTags = (tags:string)=>{
        this.tags =tags;
    }

    //comments
    getComments = ():string =>{
        return this.comment;
    }

    setComments = (comment:string)=>{
        this.comment = comment;
        
    }

    //likes
    getLike = ():string =>{
        if(this.like){
            return "number of  likes = 1"
        }else{
            return " no likes"
        }
    }


    setLike = (like:boolean)=>{
        this.like = like; 
    }

    //share

    getShare = ():string =>{
        if(this.share){
            return "number of shares = 1"
        }else{
            return "no shares"
        }

    }

    setShare = (share:boolean)=>{
        this.share= share;

    }

}



    //creating a function to create a new instance to keep  the code clean;
 let createObjectAnkit = () =>{

    //creating instance
 let ankit =  new Video("Road race","Entertainment","Standard youtube licence",3200);


    //calling setters for optional parameters

    ankit.setComments("Nice video");
    ankit.setLike(true);

    //calling getters for displaying information
    console.log(`Beggining of Youtube video`+"\n\n")
    console.log(`Title = `+ankit.getTitle());
    console.log(`Description = `+ankit.getDescription());
    console.log(`category = `+ankit.getCategory());
    console.log(`Licence = `+ankit.getLicence());
    console.log(`likes = `+ankit.getLike());
    console.log(`runtime in seconds = `+ankit.getRunTime());
    console.log(ankit.getShare());
    console.log(`tags= `+ankit.getTags());
    console.log(`comment = `+ankit.getComments());
 }

createObjectAnkit();
console.log(`******************************************************`);


//Social  media profile
console.log("\n"+`Beginning of About`+"\n \n");


class About{

    
   constructor(private workAndEducation? : object, private placesYouHaveLived?:any,
private contactAndBasicInfo?:object, private familyAndRelationships?:object, private detailsAboutYou?:
object, private lifeEvents?:object){

    this.workAndEducation = workAndEducation;
    this.placesYouHaveLived = placesYouHaveLived;
    this.contactAndBasicInfo = contactAndBasicInfo;
    this.familyAndRelationships = familyAndRelationships;
    this.detailsAboutYou = detailsAboutYou;
    this.lifeEvents = lifeEvents;

}
    //getters and setters

    //work
    
    getWorkAndEducation = ():any =>{
        // return this.workAndEducation;

        
            let result = "";
            for (let  p in this.workAndEducation) {
              if( this.workAndEducation.hasOwnProperty(p) ) {
                result += p + ` `+ ` : `+` ` + this.workAndEducation[p] + "\n";
              } 
            }              
            return result;
          
    }

    setWorkAndEducation = (workAndEducation:object)=>{
        this.workAndEducation = workAndEducation;
    }


    //palces you have lived

    getPlacesYouHaveLived = ():any =>{
        return this.placesYouHaveLived;
      
    }

    setPlacesYouHaveLived = (places:any)=>{
        this.placesYouHaveLived=places;
    }

    //contact and basic info
    getContactAndBasicInfo = ():any=>{
        // return this.contactAndBasicInfo
        let result = "";
        for (let  p in this.contactAndBasicInfo) {
          if( this.contactAndBasicInfo.hasOwnProperty(p) ) {
            result += p + ` `+ ` : `+` ` + this.contactAndBasicInfo[p] + "\n";
          } 
        }              
        return result;

    }

    setContactAndBasicInfo = (contactAndBasicInfo:object)=>{
        this.contactAndBasicInfo = contactAndBasicInfo;
    }


    // family and relations ships

    getFamilyAndRelationships = ():any =>{
        // return this.familyAndRelationships;

        let result = "";
        for (let  p in this.familyAndRelationships) {
          if( this.familyAndRelationships.hasOwnProperty(p) ) {
            result += p + ` `+ ` : `+` ` +this.familyAndRelationships[p] + "\n";
          } 
        }              
        return result;

        
    
    }



    setFamilyAndRelationships = (familyAndRelationships:object)=>{
        this.familyAndRelationships=familyAndRelationships;
    }


    //Details About You

    getDetailsAboutYou = ():any=>{
        // return this.detailsAboutYou;

        let result = "";
        for (let  p in this.detailsAboutYou) {
          if( this.detailsAboutYou.hasOwnProperty(p) ) {
            result +=p + ` `+ ` : `+` ` + this.detailsAboutYou[p] + "\n";
          } 
        }              
        return result;

        
    }

    setDetailsAboutYou = (detailsAboutYou:object)=>{
        this.detailsAboutYou = detailsAboutYou;
    }


        //life Events

        getLifeEvents  = ():any =>{
            // return this.lifeEvents;

            let result = "";
        for (let  p in this.lifeEvents) {
          if( this.lifeEvents.hasOwnProperty(p) ) {
            result += p + ` `+ ` : `+` ` +this.lifeEvents[p] + "\n";
          } 
        }              
        return result;
        }

        setLifeEvents = (lifeEvents:object) =>{
            this.lifeEvents=lifeEvents;
        }


}


let createObjectJack = ()=>{


    //creating new instace of the classs About.

    let jack = new About();

    //creating objects to be provided as arguments to setters.

    let workAndEducation:object = {
        "work":"Transaction risk  investigato in Amazon from sep 2017 to april 2018",
        "Professional skill" : "Full stack development",
        "Education" : "B.E computer Science"
    }


    let placesYouHaveLived = ["Bangalore - current city","kodagu","mangalore"];

    let contactAndBasicInfo = {
        "phno":8884383131,
        "Email":"anaankit992g@gmail.com",
        "Facebook":"http://facebook.com/Ankit.Anand50"
    }

    let familyAndRelationships = {
        "Sister" : "Harshita",
        "Cousin" : "roshan kumbar"
    }

    let detailsAboutYou = {
        "About you" : "http://facebook.com/Ankit.Anand50",
        "other names" : "veerbadra"
    }

    let lifeEvents = {
        2016:"Left GECK",
        2012 : "Started college at GECk",
        2011 : "Graguated from RJS polytechnic",
        2008 : "Graduated frm BHSS",
        1992 : "Born on september 19, 1992"
    }


    // calling settters

    jack.setWorkAndEducation(workAndEducation);
    jack.setPlacesYouHaveLived(placesYouHaveLived);
    jack.setContactAndBasicInfo(contactAndBasicInfo);
    jack.setFamilyAndRelationships(familyAndRelationships);
    jack.setDetailsAboutYou(detailsAboutYou);
    jack.setLifeEvents(lifeEvents);

    //calling getters


    console.log( `work and education  ` + "\n \n" + jack.getWorkAndEducation()+"\n");

    console.log(`_______________________________________`)

    console.log(`Places Lived `+ "\n \n" + jack.getPlacesYouHaveLived()+ "\n");

    console.log(`_______________________________________`)

    console.log(`Contact And basic infomation `+ "\n \n" +jack.getContactAndBasicInfo()+ "\n");

    console.log(`_______________________________________`)

    console.log(`Family and relationships`+ "\n \n" +jack.getFamilyAndRelationships()+ "\n");

    console.log(`_______________________________________`)

    console.log(`Details about you`+ "\n \n" +jack.getDetailsAboutYou()+ "\n");

    console.log(`_______________________________________`)

    console.log(`Life events `+ "\n \n" +jack.getLifeEvents());


}


createObjectJack();