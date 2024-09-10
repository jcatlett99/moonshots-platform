class Discipline{
    constructor(name, imageurl, descriptionHTML){
        this.name = name;
        this.imageurl = imageurl;
        this.descriptionHTML = descriptionHTML;

        Discipline.all.push(this);
        this.id = Discipline.all.indexOf(this);
    }

    static all = [];

    static find(id){
        if(id < 0 || id >= this.all.length)
            return null;
        else
            return this.all[id];
    }
}

export default Discipline;