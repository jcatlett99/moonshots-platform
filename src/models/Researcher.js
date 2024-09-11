class Researcher{

    constructor(displayname, name, occupation, imageurl, email, associations = [], bioHTML = ""){
        this.displayname = displayname;
        this.name = name
        this.occupation = occupation;
        this.imageurl = imageurl;
        this.email = email;
        this.associations = associations;
        this.bioHTML = bioHTML;

        Researcher.all.push(this);
        let key = name.replaceAll(" ", "").toUpperCase();
        Researcher.dict[key] = this;
        this.id = Researcher.all.indexOf(this);

        // console.log(this);
    }

    static all = [];
    static dict = {};

    static find(id){
        
        if(id < 0 || id >= this.all.length)
            return null;
        else
            return this.all[id];
    }
}

export default Researcher;