class Researcher{
    constructor(name, occupation, email, associations){
        this.name = name;
        this.occupation = occupation;
        this.email = email;
        this.associations = associations;

        Researcher.all.push(this);
        this.id = Researcher.all.indexOf(this);
    }

    static all = [];

    static find(id){
        return this.all[id];
    }
}