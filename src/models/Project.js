class Project{

    constructor(title, undertitle, shortname, date, imageurl, descriptionHTML){
        this.title = title;
        this.undertitle = undertitle;
        this.shortname = shortname.replaceAll(" ", "");
        this.date = date;

        this.dateData = new Date(date);

        if(typeof date == "string" || date instanceof String){
            let correctDate = date;

            if(date.length == 10){
                correctDate = date[6] + date[7] + date[8] + date[9] + "-" + date[3] + date[4] + "-" + date[0] + date[1];
            }

            this.dateData = new Date(correctDate);

        }

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

    static byDate(){
        return [...Project.all].sort((a,b) => b.dateData - a.dateData);
    }

    addResearcher(researcher){
        this.researchers.push(researcher);
    }

    addDiscipline(discipline){
        this.disciplines.push(discipline);
    }

}

export default Project;