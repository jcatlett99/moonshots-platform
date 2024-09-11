import Researcher from "../models/Researcher";
import Discipline from "@/models/Discipline";

class ResearcherDisciplineSeeder {

    static seed() {
        let res = Researcher.dict;
        let dis = Discipline.dict;
        // console.log(res);
        // console.log(dis);
        

        this.giveResearcherDisciplines(res.PRAGYAJAIN, [
            dis.ASTRONOMY,
            dis.ARTISTICRESEARCH,
            dis.PHYSICS,
            dis.PRODUCTDESIGN,
            dis.COMPUTERSCIENCE
        ])

        this.giveResearcherDisciplines(res.JOSEPHCATLETT, [
            dis.COMPUTERSCIENCE,
            dis.ARTISTICRESEARCH,
            dis.USEREXPERIENCEDESIGN
        ])

        this.giveResearcherDisciplines(res.KIMBERLYVANDENBOOGAARD, [
            dis.ARTISTICRESEARCH,
            dis.AEROSPACEENGINEERING,
        ])

        this.giveResearcherDisciplines(res.RICKHEEMSKERK, [
            dis.COMPUTERSCIENCE,
            dis.USEREXPERIENCEDESIGN,
            dis.ARTISTICRESEARCH,
        ])
    }

    static giveResearcherDisciplines(researcher, disciplines = []) {
        // console.log(researcher);

        for (let discipline of disciplines) {
            researcher.addDiscipline(discipline);
            discipline.addResearcher(researcher);
        }
    }
}

export default ResearcherDisciplineSeeder;