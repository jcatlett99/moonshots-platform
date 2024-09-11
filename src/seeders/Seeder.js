import ResearcherSeeder from './ResearcherSeeder';
import DisciplineSeeder from './DisciplineSeeder';
import ResearcherDisciplineSeeder from './ResearcherDisciplineSeeder';

class Seeder{
    
    static seed(){
        ResearcherSeeder.seed();
        DisciplineSeeder.seed();
        ResearcherDisciplineSeeder.seed();
    }
}

export default Seeder;