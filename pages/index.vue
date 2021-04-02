<template>
  <div class="flex bg-yellow ">
    <div>
    <h1 class="text-xl">Isabel Sun
    </h1>
    <p class="text-xs">
      Creative Developer who loves to direct multimedia performances
    </p>
</div>
    <!-- card -->
    <div class="bg-blue text-xs flex">
      <card
        class="w-80 p-5"
        v-for="(b, index) of blocks"
        :key="index"
          v-bind:block="b"
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
      blocks:[],
    }
  },
  mounted() {
    const client = Prismic.client( "https://sourrain-site.cdn.prismic.io/api/v2" );
    client.query("").then((res)=>{
      console.log(res.results)
   this.blocks = res.results
        console.log(this.blocks)
     });
      
      }
  }
</script>
<style scoped>
</style>