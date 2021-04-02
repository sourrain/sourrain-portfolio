<template>
  <div class="flex flex-col items-center">
    <p class="text-xl w-screen h-40 flex items-center p-3">
      Creative Developer who loves to direct multimedia performances
    </p>
    <!-- bg -->
    
    <!-- card -->
    <div class="bg-blue text-xs flex">
      <card
        class="w-80 p-5"
        v-for="(block, index) of blocks"
        :key="index"
      >
      </card>
    </div>
  </div>
</template>

<script>
import Prismic from "@prismicio/client";
export default {
  data() {
    return {
      blocks: []
    }
  },
  mounted() {
    const client = Prismic.client( "https://sourrain-site.cdn.prismic.io/api/v2" );
    client.query("").then(function(res){
      console.log(res.results)
     return this.blocks = res.results});
      }
  }
</script>
<style scoped>
</style>