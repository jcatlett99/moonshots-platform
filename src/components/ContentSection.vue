<!-- This component is for creating certain component sections of a web page. Whatever is filled on this page is dynamically loaded -->

<template>
    <div class="section">
        <div v-if="header" class="content-header">
            {{ header }}
        </div>
        <div class="content-section">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentSection',
    props: {
        header: {
            type: String,
        },
    }
}
</script>

<style scoped>

.section{
    position: relative;
    z-index: 1;
    box-shadow: var(--shadow);
    background-color: var(--darkest-shade);
    border-radius: .5rem;
    border: 1px solid var(--mid-shade);

}

.content-section {
    padding: 0.5rem 1rem;
    color: var(--light-shade);
    font-family: var(--font-body);
}

.content-header {
    background-color: var(--light-shade);
    color: var(--darkest-shade);
    border-radius: .5rem .5rem 0 0;
    font-family: var(--font-header);
    padding: 0.5rem 1rem;	
    border-bottom: 1px solid var(--mid-shade);
}

</style>