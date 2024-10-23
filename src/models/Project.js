class Project{

    constructor(title, undertitle, shortname, imageurl, descriptionHTML){
        this.title = title;
        this.undertitle = undertitle;
        this.shortname = shortname.replaceAll(" ", "");
        this.imageurl = imageurl;
        this.descriptionHTML = descriptionHTML;

        this.researchers = [];
        this.disciplines = [];

        Project.all.push(this);
        Project.dict[this.shortname.toUpperCase()] = this;
        this.id = Project.all.indexOf(this);
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

    addResearcher(researcher){
        this.researchers.push(researcher);
    }

    addDiscipline(discipline){
        this.disciplines.push(discipline);
    }

}

export default Project;