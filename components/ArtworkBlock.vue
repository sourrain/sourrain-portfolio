<template>
  <div>
    <NuxtLink :to="'/artworks/'+ block.uid"  v-if ="block.type === 'project'" class="block">
      <h1>
        {{ block.data.title[0].text }}
      </h1>
      <h2>{{ block.data.subtitle[0].text }}</h2>
      <img v-bind:src="block.data.main.url" />
      <p>#{{ block.tags }}</p>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    block: Object,
  }
};
</script>
<style scoped>
img {
  width: 100%;
}
.block {
  display: flex;
  max-width: 600px;
  padding: 20px;
  margin: 20px;
  letter-spacing: 0.5px;
}
</style>