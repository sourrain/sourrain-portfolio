<template>

<!-- page -->
<div class="page">
  <!-- pane -->
  <div>
    <!-- index-pane -->
  <div class=" bg-yellow pane">
    <div>
      <h1 class="text-9xl">Isabel Sun</h1>
      <p class="text-xs">
        Creative Developer who loves to direct multimedia performances
      </p>
    </div>
    </div>
    <!-- card-pane -->
    <div class="bg-blue">
      <card
        class="pane"
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
  var page;
var last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  
  // Looping Scroll.
  var diff = window.scrollY - dummy_x;
  if (diff > 0) {
    window.scrollTo(0, diff);
  }
  else if (window.scrollY == 0) {
    window.scrollTo(0, dummy_x);
  }
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  
  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}
  }
};
</script>
<style scoped>
.page{
overflow:hidden;
  white-space:nowrap;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  display:flex;
  flex-wrap:no-wrap;
}
.pane{
flex:0 0 100vw;
  height:100vh;
  display:flex;
  position:relative;
  align-items:center;
  justify-content:center;
}
</style>