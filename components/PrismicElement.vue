<template>
    <div>
        <div v-if="element.type === 'paragraph'">
            <p>{{ element.text }}</p>
        </div>
        <div v-if="element.type === 'image'">
            <img v-bind:src="element.url" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        element: Object
    }
}
</script>
<style scoped>

</style>