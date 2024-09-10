import Researcher from "../models/Researcher";

class ResearcherSeeder{
    static seed(){
        new Researcher(
            "Beeapo Boopa Bepalis",
            "Prof.",
            "B.B.",
            "Bepalis",
            "Extreme Researcher of Odd Extremities",
            "https://thispersondoesnotexist.com/",
            "beeepis@oddityassociation.com",
            [
                "Society of Extreme Research",
                "The Oddity Association",
                "University of the Uncanny"
            ],
            `<p>Prof. Beeapo Boopa Bepalis is a leading figure in the field of unconventional science, known for his work as an Extreme Researcher of Odd Extremities. With a career spanning over two decades, Bepalis has dedicated himself to studying the world’s most unusual and bizarre phenomena, often focusing on the rare and overlooked.</p>
<p>He earned his Ph.D. in Anomalous Sciences from the University of the Uncanny, an institution famous for its emphasis on rare and extraordinary phenomena. His education there laid a strong foundation for his career in extreme research.</p>
<p>For the past 20 years, Bepalis has been an active member of the Society of Extreme Research, making significant contributions through his dangerous expeditions and studies of cryptic creatures and unexplained geological formations. His fearless approach has earned him a reputation as a pioneer in extreme science.</p>
<p>Currently, Prof. Bepalis serves as the president of the Oddity Association, leading the organization in its mission to explore and appreciate the world’s most curious phenomena. Under his leadership, the association has thrived, drawing researchers and enthusiasts from around the globe.</p>`
        );

        new Researcher(
            "Rick Heemskerk",
            "BSc.",
            "R.D.",
            "Heemskerk",
            "Creative Researcher, Computer Scientist & Artist",
            "@/assets/researchers/rick.png",
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