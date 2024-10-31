<template>
    <div class="page">
        <div class="widthconstrainer">
            <h2>The Cosmic Intergrationalists Manifesto:
                Accelerating Harmony of Knowledge in Space</h2>
            <img src="researchdomains.jpg" alt="Research Paradigms">
            <p>
                For centuries, humankind has questioned, imagined, explored, and navigated the mysteries of the cosmos
                within and beyond the limitations of our technological abilities, lying in the dimensions of our
                designed disciplines. Emerging from the paradigm of ‘‘<i>space as the enabler</i>’’<sup>1</sup>,
                addressing, disseminating, as well as ‘‘<i>expanding the frontiers of knowledge</i>’’ necessitates
                celebration of the harmony of knowledges, which can be achieved by facilitating the questioning,
                exploration, and navigation of the mysteries of cosmos through the lens of transdisciplinarity.
                Nicolescu’s vision manifests an imagine of a ‘disciplinary big bang’’ in which transdisciplinarity
                exists between disciplines, across disciplines, and beyond disciplines’’<sup>2</sup>. Going beyond the
                human condition of conditioning, this manifesto proposes a paradigm/model of care that recognises the
                intentions/aims of the space sector integrating civil society and its contributions for societal
                development.
            </p>
            <p>
                <b>Harmony</b>: Space is the symbol for the intrinsic human nature of the exploration of the unknown and
                unity. In Asimov's words, ‘‘<i>There are no nations, there’s only humanity</i>’’, space infrastructures
                like the ISS are the space-based representations of this cultural unification and human creativity
                across specialities and professions. Incorporating artistic research into the continual advancement of
                space science can anchor multifaceted and diversified networks that promote a transdisciplinary space
                sector in which artistic researchers collaborate and operate parallel with the space scientists.
                Systematic integration of programmes such as artist residencies can play an integral component in
                developing methods for space missions from all frontiers of knowledge production.
            </p>
            <p>
                <b>Integration</b>: By embracing the intersection of art and space research, as well as integrating art
                as a fundamental part of space exploration, as a new research paradigm, we can enable the expansion of
                our abilities to perceive and explore the cosmos. By reimagining space research through the lens of
                transdisciplinarity, art can act as a portal for imagining exploration without colonisation, a new form
                of exploration that facilitates both local and global cultures to integrate and celebrate their existing
                interpretations of cosmology, thereby expanding how we define, perceive, and interpret astronomical
                phenomena.
            </p>
            <p>
                <b>Innovation</b>: Exploring beyond the current restrictive understanding of ‘innovation’, the
                integration of <i>artistic intelligence</i> can foster novel knowledge production methodologies for the
                acceleration of the space sector as well as its significant role in societal growth. The democratisation
                of space technologies/knowledge can facilitate the involvement of citizen-driven initiatives, empowering
                ‘‘<i>groups and organisations that represent citizens with different interests</i>”<sup>3</sup>. In
                which ‘‘<i>organisations representing employers, workers, consumers, families, young people, farmers,
                    and people with disabilities</i>”, as well as communities, small-scale organisations, students,
                creative institutions, NGOs, creative studios, artists, designers, coastal communities,
                environmentalists, forestry departments, doctors, creative technologists, writers, musicians,
                architects, '‘<i>small and medium-sized enterprises and crafts</i>’’, dancers, librarians,
                ‘‘<i>charities, cooperatives, foundations, mutual societies and social enterprises</i>’’, farmers, and
                more, and more, and more, and more... to contribute to the growing space sector and its vision of making
                humanity an interplanetary species.
            </p>
            <p>
                Europe forms a constellation of cultures, and begun both collective as well as collaborative exploration
                of space since 1962. ESA’s directorates have been and continue to comprise ‘‘Technology, Engineering and
                Quality; Human and Robotic Exploration; European Legal and International Matters; Space Transportation;
                Earth Observation; Navigation; Science; Connectivity and Secure Communications; Internal Services;
                Operations; and Commercialisation, Industry and Competitiveness as main domains for research and
                development. The acceleration of space exploration requires a revision of the directorate, including the
                paradigm of Space Humanities: Space Culture and Heritage, in which other-than STEM-related research
                paradigms have a platform for investigation and contribute to space science knowledge and technology
                infrastructures. The knowledge and accessibility to facilities are highly specialised and restricted for
                use by the civil society. By involving artistic practitioners, space science can gain from discovering
                and generating alternative approaches. Policies are required to address civil society and its
                incorporation in the currently established infrastructure of space exploration. Further honouring space
                as a culture in its own right, encompassing its historical origin and progress.
            </p>
            <p>
                In order to involve everyone in the space exploration,<br>
                everyone must feel involved in the space exploration.<br>
                As the visions of interplanetary humanity evolve,<br>
                the terrestrial systems must also transform in order to<br>
                <i>make space truly for all.</i>
            </p>

            <p class="people">
                Pragya Jain, Rick Heemskerk, Joseph Catlett<br>
                October 2024
            </p>

            <div class="line"></div>
            <div class="references">
                <p>
                    <sup>1</sup> EU Space Policy and the involvement of civil society, Final Study Report, Page 21.
                    EESC. 2023. Available at: <a
                        href="https://www.espi.or.at/reports/eu-space-policy-and-the-involvement-of-civil-society/"
                        target="_blank">https://www.espi.or.at/reports/eu-space-policy-and-the-involvement-of-civil-society/</a>
                    (Last Accessed: 27th October 2024).
                </p>
                <p>
                    <sup>2</sup> A New Vision of the World Transdisciplinarty, Nicolescu, B. CIRET. 1999. Available at:
                    <a href="https://ciret-transdisciplinarity.org/transdisciplinarity.php#en"
                        target="_blank">https://ciret-transdisciplinarity.org/transdisciplinarity.php#en</a> (Last
                    Accessed: 27th October 2024).
                </p>
                <p>
                    <sup>3</sup> "What is the European Economic and Social Committee?’’, European Economic and Social
                    Committee, 2016: <a
                        href="https://www.eesc.europa.eu/sites/default/files/resources/docs/qe-01-16-049-en-n.pdf"
                        target="_blank">https://www.eesc.europa.eu/sites/default/files/resources/docs/qe-01-16-049-en-n.pdf</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";

export default {
    name: "GenericView",
    components: {
        ContentSection,
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
.page {
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: black;
    flex-grow: 1;
}

.people{
    text-align: right;
}

img {
    width: 70%;
    margin: auto;
    display: block;
    padding-top: 1rem;
}

p {
    text-align: justify;
    padding-top: 1rem;
}

a {
    color: var(--accent-light);
}

.references p{
    text-align: left;
}
</style>