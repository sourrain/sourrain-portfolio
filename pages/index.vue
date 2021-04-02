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