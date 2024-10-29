import Discipline from "@/models/Discipline";

class DisciplineSeeder{
    static seed(){

        new Discipline(
            "Astronomy",
            "discipline-images/astronomy.webp",
            `<p>Astronomy is the scientific study of celestial objects such as stars, planets, comets, and galaxies. It is concerned with the evolution, physics, chemistry, meteorology, and motion of celestial objects, as well as the formation and development of the universe.</p>`
        );

        new Discipline(
            "Artistic Research",
            "discipline-images/artisticresearch.webp",
            `<p>Artistic research is a practice-based form of research that is used in the arts and humanities. It involves the creation of new artistic works or performances as a way of generating new knowledge and understanding in a particular field.</p>`
        );

        new Discipline(
            "Computer Science",
            "discipline-images/compsci2.webp",
            `<p>Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.</p>`
        );

        new Discipline(
            "Physics",
            "discipline-images/physics.webp",
            `<p>Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, and its main goal is to understand how the universe behaves.</p>` 
        );

        new Discipline(
            "Biology",
            "discipline-images/biology.webp",
            `<p>Biology is the natural science that studies life and living organisms, including their physical structure, chemical processes, molecular interactions, physiological mechanisms, development, and evolution.</p>`
        );

        new Discipline(
            "Chemistry",
            "discipline-images/chemistry.webp",
            `<p>Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules, and ions: their composition, structure, properties, behavior, and the changes they undergo during a reaction with other substances.</p>`
        );

        new Discipline(
            "Mathematics",
            "discipline-images/mathematics.webp",
            `<p>Mathematics is the study of numbers, quantity, space, structure, and change. Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.</p>`
        );

        new Discipline(
            "Philosophy",
            "discipline-images/philosophy.webp",
            `<p>Philosophy is the study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language. Such questions are often posed as problems to be studied or resolved.</p>`
        );

        new Discipline(
            "Psychology",
            "discipline-images/psychology.webp",
            `<p>Psychology is the scientific study of the mind and behavior. Psychology is a multifaceted discipline and includes many sub-fields of study such areas as human development and cognition, social behavior, and mental health.</p>`
        );

        new Discipline(
            "Aerospace Engineering",
            "discipline-images/aerospace.webp",
            `<p>Aerospace engineering is the primary field of engineering concerned with the development of aircraft and spacecraft. It has two major and overlapping branches: aeronautical engineering and astronautical engineering.</p>`
        )

        new Discipline(
            "Product Design",
            "discipline-images/productdesign.webp",
            `<p>Product design is the process of creating a new product to be sold by a business to its customers. A very broad concept, it is essentially the efficient and effective generation and development of ideas through a process that leads to new products.</p>`
        )

        new Discipline(
            "User Experience Design",
            "discipline-images/uxdesign.webp",
            `<p>User experience design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.</p>`
        )

        new Discipline(
            "Xenology",
            "discipline-images/xenology.webp",
            `<p>Xenology is the scientific study of extraterrestrial life, intelligence, and civilization. It is a branch of exobiology, which is the study of the origin, evolution, and distribution of life in the universe.</p>`
        )

        new Discipline(
            "Artificial Intelligence",
            "discipline-images/ai.webp",
            `<p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, problem-solving, perception, and language-understanding.</p>`
        )

        new Discipline(
            "Spirituality",
            "discipline-images/spirit.webp",
            `<p>Spirituality involves the recognition of a feeling or sense or belief that there is something greater than myself, something more to being human than sensory experience, and that the greater whole of which we are part is cosmic or divine in nature.</p>`
        )


    }
}

export default DisciplineSeeder;