import ResearcherSeeder from './ResearcherSeeder';
import DisciplineSeeder from './DisciplineSeeder';
import ResearcherDisciplineSeeder from './ResearcherDisciplineSeeder';
import ProjectSeeder from './ProjectSeeder';
import ProjectResearcherDisciplineSeeder from './ProjectResearcherDisciplineSeeder';

class Seeder{
    
    static seed(){
        DisciplineSeeder.seed();
        ResearcherSeeder.seed();
        ResearcherDisciplineSeeder.seed();
        ProjectSeeder.seed();
        ProjectResearcherDisciplineSeeder.seed();
    }
}

export default Seeder;