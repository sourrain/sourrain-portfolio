<template>
  <div class="content">
    <h1>About {{ content }}</h1>

    <prismic-element
      v-for="(e, index) of contents"
      :key="index"
      v-bind:element="e"
    ></prismic-element>
  </div>
</template>

<script>
import Prismic from "@prismicio/client";
export default {
  data() {
    return {
      contents: [],
    };
  },
  mounted() {
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );

    client.query("").then((res) => {
      console.log(res);
      this.contents = res.results[5].data.about;
    });
  },
};
</script>
<style scoped>
</style>