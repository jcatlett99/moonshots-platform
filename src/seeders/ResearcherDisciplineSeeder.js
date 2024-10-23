import Researcher from "../models/Researcher";
import Discipline from "@/models/Discipline";

class ResearcherDisciplineSeeder {

    static seed() {
        let res = Researcher.dict;
        let dis = Discipline.dict;
        // console.log(res);
        // console.log(dis);
        

        this.giveResearcherDisciplines(
            res.PJAIN, [
                dis.ASTRONOMY,
                dis.ARTISTICRESEARCH,
                dis.PHYSICS,
                dis.PRODUCTDESIGN,
                dis.COMPUTERSCIENCE
        ])

        this.giveResearcherDisciplines(
            res.JCATLETT, [
                dis.COMPUTERSCIENCE,
                dis.ARTISTICRESEARCH,
                dis.USEREXPERIENCEDESIGN
        ])

        this.giveResearcherDisciplines(
            res.KVANDENBOOGAARD, [
                dis.ARTISTICRESEARCH,
                dis.AEROSPACEENGINEERING,
        ])

        this.giveResearcherDisciplines(
            res.RDHEEMSKERK, [
                dis.COMPUTERSCIENCE,
                dis.USEREXPERIENCEDESIGN,
                dis.ARTIFICIALINTELLIGENCE,
                dis.ARTISTICRESEARCH,
        ])

        this.giveResearcherDisciplines(
            res.AKNOUF, [
                dis.XENOLOGY,
                dis.ASTRONOMY,
                dis.ARTISTICRESEARCH,
            ]
        )

        this.giveResearcherDisciplines(
            res["KO'FLAHERTY"], [
                dis.ARTISTICRESEARCH,
                dis.ASTRONOMY
            ]
        )
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