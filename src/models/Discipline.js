class Discipline{
    constructor(name, imageurl, descriptionHTML){
        this.name = name;
        this.shortname = name.toLowerCase().replaceAll(" ", "");
        this.imageurl = imageurl;
        this.descriptionHTML = descriptionHTML;

        this.researchers = new Set();

        Discipline.all.push(this);
        Discipline.dict[this.shortname.toUpperCase()] = this;
        this.id = Discipline.all.indexOf(this);
    }

    addResearcher(researcher){
        this.researchers.add(researcher);
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

export default Discipline;