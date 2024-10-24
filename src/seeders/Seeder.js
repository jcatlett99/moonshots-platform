import ResearcherSeeder from './ResearcherSeeder';
import DisciplineSeeder from './DisciplineSeeder';
import ResearcherDisciplineSeeder from './ResearcherDisciplineSeeder';
import ProjectSeeder from './ProjectSeeder';
import ProjectResearcherDisciplineSeeder from './ProjectResearcherDisciplineSeeder';
import EventSeeder from './EventSeeder';

class Seeder{
    
    static seed(){
        DisciplineSeeder.seed();
        ResearcherSeeder.seed();
        ResearcherDisciplineSeeder.seed();
        ProjectSeeder.seed();
        ProjectResearcherDisciplineSeeder.seed();
        EventSeeder.seed();
    }
}

export default Seeder;