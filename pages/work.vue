<template>
  <div class="content">
    <h1>Selected Project</h1>
    <!-- search -->
    <!-- tag -->
    <tag 
     class="tag" v-for="(t, index) of tags" :key="index" v-bind:tag="t">
    </tag>
    <!-- artwork block waterfall -->
    <artwork-block class="artworkblock" v-for="(b, index) of blocks" :key="index" v-bind:block="b">
    </artwork-block>
  </div>
</template>

<script>
import Prismic from "@prismicio/client";
export default {
  data() {
    return {
      blocks: [],
      tags: [],
    };
  },
  mounted() {
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );

    client.query("").then((res) => {
      console.log(res);//take a look at Prismic api structure
      this.blocks = res.results;
      const tagObject = res.results.reduce((a, c) => {
        a[c.tags] = c.tags;
        return a;
      }, {});//keep the tags object only
      const tagList = Object.values(tagObject).flat();//flatten array
      const tagCat = tagList.reduce((a, c) => {
        a[c] = c;
        return a;
      }, {});//overwrite the duplicates by turn array into a new object with the value
      this.tags = Object.values(tagCat);
      return this.tags;//return the tags
    });
  },
};
</script>
<style scoped>
.content {
  padding: 50px;
  margin: 0;
}
.artworkblock {
  display: flex;
}
</style>