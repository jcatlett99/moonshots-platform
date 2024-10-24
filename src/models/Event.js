class Event{

    constructor(title, location, shortname, imageurl, descriptionHTML, link, startdate, enddate = null){
        this.title = title;
        this.location = location;
        this.shortname = shortname.replaceAll(" ", "");
        this.imageurl = imageurl;
        this.descriptionHTML = descriptionHTML;
        this.link = link;

        this.startdate = startdate;
        if(typeof startdate === 'string' || startdate instanceof String){
            this.startdate = new Date(startdate);
        }
        this.enddate = enddate;
        if(typeof enddate === 'string' || enddate instanceof String){
            this.enddate = new Date(enddate);
        }
        if(enddate == null){
            this.enddate = new Date(startdate);
        }

        Event.all.push(this);
        Event.dict[this.shortname.toUpperCase()] = this;
        this.id = Event.all.indexOf(this);
    }

    distanceFromNow(){
        // this function generates a number based on how far in the future the event is. If the event is past it's enddate, it will return a negative number. If the event is currently happening or today, it will return 0.
        let now = new Date();
        if(this.enddate < now){
            return this.enddate - now;
        }
        if(this.enddate > now && this.startdate < now){
            return 0;
        }
        return this.startdate - now
        
    }

    static all = [];
    static dict = {};
    static dateSorted = {};

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

    static byDate(amount = null){

        // like logically, it would make sense to sort them in three categories. Past, Present, Future. Showing the present ones first, then future ones, and then past ones. To sort them in order of relevancy for the user. However, time constraints! For the prototype, I'll just sort them by date.

        let sorted = [...this.all].sort((a, b) => b.enddate - a.enddate);
        return amount == null || amount > sorted.length -1 ? sorted : sorted.slice(0, amount);
    }

}

export default Event;