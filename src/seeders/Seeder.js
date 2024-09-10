import ResearcherSeeder from './ResearcherSeeder';
import DisciplineSeeder from './DisciplineSeeder';

class Seeder{
    
    static seed(){
        ResearcherSeeder.seed();
        DisciplineSeeder.seed();
    }
}

export default Seeder;