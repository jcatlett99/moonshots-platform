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
            "discipline-images/compsci.webp",
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
    }
}

export default DisciplineSeeder;