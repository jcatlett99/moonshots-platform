import Event from "@/models/Event";

class EventSeeder{
    static seed(){

        

        new Event(
            "Exhibition: Towards the Black Hole",
            "Rijksmuseum Boerhaven",
            "towards-the-black-hole",
            "/workshop-images/toward-the-black-hole.jpg",
            `On March 21, 2024, Rijksmuseum Boerhaave in Leiden will open a new exhibition: Towards the Black Hole. Mysterious places in the cosmos that engulf everything, and from which nothing, not even light, can escape. They may be the most thrilling phenomena in the universe, and even scientists have yet to fully comprehend them. Everyone has heard of black holes and has some idea about them. The exciting, extreme characteristics of these places have inspired numerous stories, films, and games. Research has been conducted for decades, and the first image of a black hole is still fresh in our memories. But what exactly are black holes? Are they truly dangerous? Should we fear black holes? Is a black hole really a hole? In this new exhibition at Rijksmuseum Boerhaave, you will be guided step by step through this fascinating subject, so that by the end of your visit, you will have come a little closer to the black hole.`,
            "https://rijksmuseumboerhaave.nl/english/whats-on/Temporary-exhibitions/#:~:text=On%20March%2021%2C%202024%2C%20Rijksmuseum,not%20even%20light%2C%20can%20escape.",
            "2024-03-21",
            "2025-01-05"
        )

        new Event(
            "BioHack en Fab: Academy Exhibition",
            "Waag FutureLab",
            "biohack-en-fab-academy-exhibit",
            "/workshop-images/biohacking.jpg",
            `After the BioHack and Fab Academy courses conclude, a selection of the participants' works will still be displayed at an exhibition at the Waag on Friday, 14 and Saturday, June 15, between 12:00 and 17:00. Drop by and get inspired! In the BioHack Academy, you will dive into shaping the future of biotechnology and learn how to build your own bio-lab, how to grow living 'factories', and how to code and document your experiments. Think about growing biomaterials like fuel, food, filaments, drugs, fragrances, fungi and more.`,
            "https://waag.org/en/event/biohack-en-fab-academy-exhibition/",
            "2024-06-14",
            "2024-06-15"
        )

        new Event(
            "Expert Talk: Frank Piller - AI and working in creative teams",
            "TU/e - JADS Den Bosch",
            "expert-talk-frank-piller",
            "/workshop-images/mechanical-turk.jpg",
            `In his talk, Frank Piller will delve into the fascinating intersection of AI and human creativity in the realm of innovationJoin us on February 6, 2024, for an Expert Talk by Prof. Frank Piller. In his 30-minute presentation, tailored for data scientists and practitioners, Frank Piller will delve into the fascinating intersection of artificial intelligence (AI) and human creativity in the realm of innovation. From automating ideation with OpenAI’s ChatGPT to leveraging generative adversarial networks (GANs) for rapid problem-solving and design, this talk will paint a picture of the hybrid teams emerging, where humans and machines collaborate in unprecedented ways.`,
            "https://www.tue.nl/en/our-university/calendar-and-events/06-02-2024-expert-talk-frank-piller-ai-and-working-in-creative-teams",
            "2024-02-06"
        )

        new Event(
            "Exhibition: Cosmism - Images from a Future Gathering",
            "Stedelijk Museum Amsterdam",
            "cosmism",
            "https://s3-eu-west-1.amazonaws.com/production-static-stedelijk/images/_whats%20on/tentoonstellingen/2024/Kosmisme/scaled/1440/006.SM-COSMISM%202024-PH.GJ.vanROOIJ%20kopie.jpg",
            `The exhibition delves into Cosmism, an early-twentieth-century philosophical movement that sought humanity's salvation through technology, conquering death, and exploring outer space. Within a single exhibition space, the show offers a condensed journey into the utopian and dystopian realms of Cosmism. Cosmism features works from the Khardzhiev collection and recent acquisitions by Ukrainian artist Fedir Tetianych from the 1970s and 80s.`,
            'https://www.stedelijk.nl/en/exhibitions/cosmism-images-from-a-future-gathering-en',
            "2024-01-13",
            "2024-03-03"
        )

        new Event(
            "ASE Planetary Congress 2024",
            "Amsterdam - Noordwijk",
            "ase-planetary-congress",
            "/workshop-images/ase.jpg",
            `This year, something unique is going to happen in our country, in the field of space travel. Nearly a hundred astronauts from all over the world are coming to the Netherlands. A historical event. The astronauts catch up with each other and various experts share their knowledge. And young people show how they view the use of space technology for a healthy future of our planet. Innovation, collaboration, science and technology are central during all parts of the conference.`,
            `https://ase2024.nl/en/`,
            "2024-09-29",
            "2024-10-06"
        )
        
    }
}

export default EventSeeder;