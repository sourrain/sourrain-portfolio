<template>
<!-- outer wrapper -->
<div class="outerwrapper">
  <!-- wrapper -->
  <div class="flex flex-row innerwrapper"
    v-bind:style="allProjectsWidth">
    <!-- index -->
  <div class=" bg-yellow w-screen h-screen">
    <div>
      <h1 class="text-9xl">Isabel Sun</h1>
      <p class="text-xs">
        Creative Developer who loves to direct multimedia performances
      </p>
    </div>
    </div>
    <!-- card -->
    <div class="bg-blue text-xs flex">
      <card
        class=""
        v-for="(b, index) of blocks"
        :key="index"
        v-bind:block="b"
      >
      </card>
    </div>
  </div>
</div>
</template>

<script>
import Prismic from "@prismicio/client";
export default {
  data() {
    return {
      blocks: [],
    };
  },
  mounted() {
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );
    client.query("").then((res) => {
      console.log(res.results);
      this.blocks = res.results;
      console.log(this.blocks.length*100);
    });
  },
  computed: {
    allProjectsWidth() {
      return "width: " + this.blocks.length * 100 + "vw"
    }
  }
};
</script>
<style scoped>
.innerwrapper{
  width:600vw;
  /* 100 viewport width * the number of my projects + 1 index page */
  /* this.blocks.length*100vw */
  transform: rotate(90deg) translateY(-100vh);
transform-origin: top left;
}
.outerwrapper{
width:100vh;
height:100vw;
transform: rotate(-90deg) translateX(-100vh);
transform-origin: top left;
overflow-y: scroll;
overflow-x: hidden;
position: absolute;
/* hide scrollbar in different browser */
scrollbar-width: none;
-ms-overflow-style: none;
}
::-webkit-scrollbar{
  display: none;
}
</style>