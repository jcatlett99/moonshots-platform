import Researcher from "../models/Researcher";

class ResearcherSeeder{
    static seed(){
        // new Researcher(
        //     "Beeapo Boopa Bepalis",
        //     "Prof. B.B. Bepalis",
        //     "Extreme Researcher of Odd Extremities",
        //     "https://thispersondoesnotexist.com/",
        //     "beeepis@oddityassociation.com",
        //     [
        //         "Society of Extreme Research",
        //         "The Oddity Association",
        //         "University of the Uncanny"
        //     ],
        //     `<p>Prof. Beeapo Boopa Bepalis is a leading figure in the field of unconventional science, known for his work as an Extreme Researcher of Odd Extremities. With a career spanning over two decades, Bepalis has dedicated himself to studying the world’s most unusual and bizarre phenomena, often focusing on the rare and overlooked.</p>
        //     <p>He earned his Ph.D. in Anomalous Sciences from the University of the Uncanny, an institution famous for its emphasis on rare and extraordinary phenomena. His education there laid a strong foundation for his career in extreme research.</p>
        //     <p>For the past 20 years, Bepalis has been an active member of the Society of Extreme Research, making significant contributions through his dangerous expeditions and studies of cryptic creatures and unexplained geological formations. His fearless approach has earned him a reputation as a pioneer in extreme science.</p>
        //     <p>Currently, Prof. Bepalis serves as the president of the Oddity Association, leading the organization in its mission to explore and appreciate the world’s most curious phenomena. Under his leadership, the association has thrived, drawing researchers and enthusiasts from around the globe.</p>`
        // );

        new Researcher(
            "Pragya Jain",
            "P. Jain",
            "Transdisciplinary Researcher",
            "researcher-images/pj.jpeg",
            "",
            [
                "Leiden University",
            ],
            "​​Pragya Jain is a transdisciplinary researcher; her work illustrates the quintessential interface between art, design, science, and technology. Simultaneously with her education in the MSc Media Technology programme at Leiden University, Jain’s research revolves around themes that are seemingly distant or opposed to one another. By employing and superimposing scientific insights, cultural knowledges, and artistic strategies, she seeks to highlight the potential points of intersection that are often invisible. These unique tangents of knowledges take the form of multimedia installations and hybrid publications, serving as the instrument(s) for creating tangible representations of knowledge(s). Which provides an experience, enhancing recognition of one's positionality in relation to others from diverse perspectives, inviting all to (re)imagine the world in the form of waves rather than particles, where the dispersion lies in thoughts, not in experiences, igniting eureka moments."
        );

        new Researcher(
            "Joseph Catlett",
            "BSc. J. Catlett",
            "Irish Creative Engineer",
            "researcher-images/jose.png",
            "",
            [
                "Leiden University",
                "TU Delft",
            ],
            "Hello! I’m Joseph Catlett, an Irish creative engineer based in Leiden. Currently I am completing my M.Sc. in Media Technology at Leiden University. My interest prior to university was in design and theatre. While I was always fascinated by the wonders of cellular biology, distant cosmology, quantum theory, and other intangible natural phenomena, I felt inspired by them creatively, so I always focused this curiosity through artistic means rather than strict ‘science’. However, when it came time to choose a Bachelor’s, I made a pivot from this creative positionality and enrolled in Computer Science and Engineering at Delft University. It wasn’t until my collaborations with the Rotterdam Art and Science Lab that I finally found the time and space to reintegrate my creative and scientific pursuits. Since then I have been operating at the [non-existent] boundary between scientific theory, engineering praxis, and visual/embodied arts [and all the permutations therein]."
        )

        new Researcher(
            "Kimberly van den Boogaard",
            "BSc. K. van den Boogaard",
            "Dutch Aerospace Engineer",
            "researcher-images/kimb.jpg",
            "",
            [
                "TU Delft",
                "Technical University of Denmark",
                "University of Amsterdam"
            ],
            "Hi there! I am Kimberly (26), a dutch aerospace engineer interested in anything and everything. During my aerospace engineering bachelor at the TU Delft I did my minor in Art History at the University of Amsterdam (UvA). I graduated with a space project where we designed an asteroid sensing network of PocketQube’s. Thereafter, I took a gap year in which I took on the full-time job of Chief Structures in the student team Eco-Runner Team Delft. There I got to help design, build and race the first Urban Concept Hydrogen powered city car created by this team: the Eco-Runner X. I discovered my passion for sustainability and decided to take my further education in this direction. I am currently finishing the European Wind Energy Master (EWEM) program with a specialisation in the structural design of wind turbine rotor blades. This amazing program allows me to study at both the TU Delft as well as the Technical University of Denmark (DTU) in Copenhagen, the latter being my current location. When I am not working on one of my projects I like to meet up with friends. To go to visit museums and make art. But also to bake delicious pastries to enjoy with a wonderful cup of tea and laughter. I also enjoy the artistic arena of music as I am a musician myself; I play the Oboe. On the more sporty side, I really enjoy hiking, and take pictures during my walks through nature. But I also enjoy swimming and horseback riding."
        )


        new Researcher(
            "Rick Heemskerk",
            "BSc. R.D. Heemskerk",
            "Creative Researcher, Computer Scientist & Artist",
            "researcher-images/rick.png",
            "r.d.heemskerk@vuw.leidenuniv.nl",
            [
                "Leiden University",
                "Leiden University of Applied Sciences",
            ],
            "Heya, I'm Rick. As computer scientist and artist, I find passion at the convergence of art and technology. Drawing from previous experience in crafting interactive installations and fueled by a love for stimulating experiences, my aim is to transport participants to a new realm. My fascination with data science further extends to crafting interactive installations, where intriguing datasets become the foundation for creating unique experiences that linger in the minds of participants."
        )
    }
}

export default ResearcherSeeder;