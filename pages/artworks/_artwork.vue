<template>
  <div class="content">
    <button @click="goBack">Go Back</button>
    <!-- current work -->
    <h1>{{ artworks.title[0].text }}</h1>
    <h2>{{ artworks.subtitle[0].text }}</h2>
    <img :src="artworks.main.url" />
    <div v-if="artworks.video">video is here!</div>
    <div v-for="(item, index) of artworks.content" :key="index">
      <div v-if="item.type === 'paragraph'">
        <p>{{ item.text }}</p>
      </div>
      <div v-else-if="item.type === 'image'">
        <img v-bind:src="item.url" />
      </div>
    </div>
    <!-- related work -->
  </div>
</template>
<script>
import Prismic from "@prismicio/client";

export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  async asyncData({ params }) {
    console.log(params);
    const api = await Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );
    const res = await api.getByUID("project", params.artwork);
    console.log(res);
    return { artworks: res.data };
  },
};
</script>

<style scoped>

</style>