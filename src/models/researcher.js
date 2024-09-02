class Researcher{

    constructor(displayname, title, initials, sname, occupation, imageurl, email, associations = [], bioHTML = ""){
        this.displayname = displayname;

        this.title = title;
        this.initials = initials;
        this.sname = sname;
        this.occupation = occupation;
        this.imageurl = imageurl;
        this.email = email;
        this.associations = associations;
        this.bioHTML = bioHTML;

        Researcher.all.push(this);
        this.id = Researcher.all.indexOf(this);

        console.log(this);
        
    }

    static all = [];

    static find(id){
        if(id < 0 || id >= this.all.length)
            return null;
        else
            return this.all[id];
    }
}

export default Researcher;