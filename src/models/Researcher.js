class Researcher{

    constructor(displayname, name, title = "", occupation = "", imageurl = "", email = "", associations = [], bioHTML = ""){
        this.displayname = displayname;
        this.title = title;
        this.name = name;
        this.shortname = name.replaceAll(" ", "").replaceAll(".", "");
        
        let i = 2
        while(Researcher.find(this.shortname) != null){
            this.shortname = name.replaceAll(" ", "").replaceAll(".", ""); + i;
            i++;
        }

        this.occupation = occupation;
        this.imageurl = imageurl;
        this.email = email;
        this.associations = associations;
        this.bioHTML = bioHTML;

        this.disciplines = [];
        this.projects = [];

        Researcher.all.push(this);

        let key = this.shortname.toUpperCase();

        Researcher.dict[key] = this;
        this.id = Researcher.all.indexOf(this);

        // console.log(this);
    }

    addDiscipline(discipline){
        this.disciplines.push(discipline);
    }

    addProject(project){
        this.projects.push(project);
    }

    static all = [];
    static dict = {};

    static find(id){

        if(isNaN(parseInt(id))){
            for(let i = 0; i < this.all.length; i++){
                if(this.all[i].shortname == id)
                    return this.all[i];
            }
            return null;            
        }

        
        if(id < 0 || id >= this.all.length)
            return null;
        else
            return this.all[id];
    }
}

export default Researcher;