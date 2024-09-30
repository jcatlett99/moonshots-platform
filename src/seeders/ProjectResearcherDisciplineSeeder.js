import Project from '../models/Project';
import Researcher from '../models/Researcher';
import Discipline from '../models/Discipline';

class ProjectResearcherDisciplineSeeder{
    static seed(){
        // console.log(Researcher.dict);
        
        this.giveProjectDisciplineAndResearchers(
            Project.dict.COSMICINTEGRATIONALISM,
            [
                Discipline.dict.ASTRONOMY,
                Discipline.dict.ARTISTICRESEARCH,
                Discipline.dict.COMPUTERSCIENCE,
            ],[
                Researcher.dict.PJAIN,
                Researcher.dict.JCATLETT,
                Researcher.dict.KVANDENBOOGAARD,
                Researcher.dict.RDHEEMSKERK
            ]
        );

        this.giveProjectDisciplineAndResearchers(
            Project.dict["TX-1"],
            [
                Discipline.dict.XENOLOGY,
                Discipline.dict.ASTRONOMY,
                Discipline.dict.ARTISTICRESEARCH,
                Discipline.dict.BIOLOGY
            ],[
                Researcher.dict.AKNOUF,
                Researcher.dict.FREBOLLEDO,
                Researcher.dict.CPEDERSON,
                Researcher.dict["ŠPETRIČ"],
                Researcher.dict["MTURŠIČ"]
            ]
        );

        this.giveProjectDisciplineAndResearchers(
            Project.dict.SENSORI,
            [
                Discipline.dict.ASTRONOMY,
                Discipline.dict.ARTISTICRESEARCH,
                Discipline.dict.COMPUTERSCIENCE,
                Discipline.dict.USEREXPERIENCEDESIGN,
            ],[
                Researcher.dict.PJAIN,
                Researcher.dict.RDHEEMSKERK,
                Researcher.dict["KO'FLAHERTY"]
            ]
        );

        this.giveProjectDisciplineAndResearchers(
            Project.dict.GENERATIVESPACESHIPS,
            [
                Discipline.dict.ARTIFICIALINTELLIGENCE,
                Discipline.dict.COMPUTERSCIENCE,
                Discipline.dict.ARTISTICRESEARCH,
                Discipline.dict.ASTRONOMY,
            ],[
                Researcher.dict.RDHEEMSKERK,
                Researcher.dict.PJAIN,
            ]
        );

        this.giveProjectDisciplineAndResearchers(
            Project.dict.ANOTHERMOON,
            [
                Discipline.dict.ARTISTICRESEARCH,
                Discipline.dict.ASTRONOMY
            ],
            [
                new Researcher("Kimchi and Chips", "Kimchi and Chips")
            ]
        );
    }

    static giveProjectDisciplineAndResearchers(project, disciplines = [], researchers = []) {
        this.giveProjectDisciplines(project, disciplines);
        this.giveProjectResearchers(project, researchers);
    }

    static giveProjectDisciplines(project, disciplines = []) {

        for (let discipline of disciplines) {
            if(discipline == null | project == null) continue
            project.addDiscipline(discipline);
            discipline.addProject(project);
        }
    }

    static giveProjectResearchers(project, researchers = []) {

        for (let researcher of researchers) {
            // console.log(researcher);
            
            if(researcher == null | project == null) continue
            project.addResearcher(researcher);
            researcher.addProject(project);
        }
    }

}

export default ProjectResearcherDisciplineSeeder;