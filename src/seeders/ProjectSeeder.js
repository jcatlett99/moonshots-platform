import Project from '../models/Project';
import Researcher from '../models/Researcher';
import Discipline from '../models/Discipline';

class ProjectSeeder{

    static seed(){

        new Project(
            "Platform for Cosmic Integrationalism",
            "Transdisciplinary Research Platform",
            "Cosmic Integrationalism",
            "project-images/cosmicintegrationalism.png",
            `
                <p class="center">
                    ‘Transcosmogram’ is a materialised metaphor— a map obtained by highlighting tangents encompassing the multimodal stratum of knowledges—where we reimagine and reposition the human in the context of astronomy.
                </p>

                <p>
                    The notion of ‘transcosmogram’ emerged from the lack of depiction of dimensionalities in the human interpretation of space and the cosmos.
                    <br>
                    With the spirit of de-engtangling and composing all seemingly dividing boundaries, the intention of a ‘transcosmogram’ is to delineate a ‘’map’’ emerged from discovering and highlighting the tangents that connect these strata of our known space(s), i.e., consisting of the terrestrial and organic layers, e.g., sedimentary, atmospheric layers of the earth, and the technospheric layer, including space junk, and cosmological layers.
                    <br>
                    By tapping into the position and relationality between these layers/ elements and illustrating the relationships that exist within them, this approach emancipates us from our own prejudices regarding national, gender, economic, and other boundaries, fostering a sense of cosmic unity.
                </p>
            `
        )

        new Project(
            "TX-1",
            "The first-known time that elements of the transgender experience orbited the Earth",
            "TX-1",
            "https://archive.aec.at/media/assets/2f790dc9c8000a9d528092754cae5256.png",
            `
            <p>
                The enchanting Earth is too-often made inhospitable to those marked as transgender. To survive we xenomogrify ourselves through social and biological technologies, altering our surfaces, our viscera, our molecular balances. None of us have been to space even if we possess somatic knowledges of deep bodily transformations, experiences that are necessary for extraterrestrial environments.
            </p>
            <p>
                TX-1 launched bits of my hormone replacement medications to the International Space Station (ISS), marking the first-known time that elements of the transgender experience orbited the Earth. TX-1 includes a fragment of my spironolactone pill, a slice of my estradiol patch, and a miniature handmade paper sculpture, included to gesture towards the absent-yet-present xenoentities of the cosmos. A symbolic exodus to an orbit high above, the return of  TX-1 to Earth was also a sign of resilience, of not being disposed of, of coming back to thrive once again. 
            </p>
            <p>
                TX-1 flew to the ISS as part of the Sojourner 2020 project of the MIT Space Exploration Initiative, which provided the launch opportunity to nine artist-groups who were selected from an international open call. You truly never go to space alone.
            </p>
            <p>
                While space is, in many ways, one of the most inhospitable places for life, it simultaneously holds an aura—naïve, perhaps—as a place of transformation where the usual constraints of life on earth can be refashioned, where those who are tranxxeno can exist without earthly prejudices. Some early trans\* activism even expressed desires for connection with extraterrestrial beings, suggesting kinship predicated on being seen as alien. Such cosmological allies thus evince the yearning for acceptance of the Other. These stories that we tell about space are of course simultaneously stories that we tell about earth, and thus TX-1, in line with this earlier activism, manifests a dream of acceptance of the tranxxeno as we move through these transitioning times.
            </p>
            `
        )

        //console.log(Project.all);
        
            
    }
}

export default ProjectSeeder;