

<template>
    <div class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <h1>Bueonos dias</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt, exercitationem, autem at aliquid dicta fuga labore voluptas sed quos ex sit illo minima qui, numquam enim quaerat atque consequuntur!

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt, exercitationem, autem at aliquid dicta fuga labore voluptas sed quos ex sit illo minima qui, numquam enim quaerat atque consequuntur!
                        <br><br>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt, exercitationem, autem at aliquid dicta fuga labore voluptas sed quos ex sit illo minima qui, numquam enim quaerat atque consequuntur!

                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum sunt, exercitationem, autem at aliquid dicta fuga labore voluptas sed quos ex sit illo minima qui, numquam enim quaerat atque consequuntur!
                    </p>
                </ContentSection>
                <div class="flex flexsecondary">
                    <ContentSection header="Cooool shit">
                        <ul>
                            <li>Interesting fact</li>
                            <li>Interesting fact</li>
                            <li>Interesting fact</li>
                            <li>Interesting fact</li>
                            <li>Interesting fact</li>
                            <li>Interesting fact</li>
                        </ul>
                    </ContentSection>
                    <ContentSection header="Coooler shit">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </ContentSection>
                </div>
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

<style>
.flexmain {
    flex: 2;
    padding: 2rem;
    align-self: flex-start;
}

.flexsecondary {
    flex: 1;
    flex-direction: column;
    align-content: flex-start;
}

.flexsecondary ul{
    list-style: none;
}

@media screen and (max-width: 768px) {
    .flex{
        flex-direction: column;
    }
}
</style>