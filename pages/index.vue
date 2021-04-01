<template>
  <div class="flex flex-col items-center">
      <p class="text-xl w-screen h-40 flex items-center p-3">
        Creative Developer who loves to direct multimedia performances
      </p>
        
    <!-- card -->
  <div class="  bg-blue text-xs flex justify-around h-screen w-screen p-5">
    <card class="w-80 p-5"
      v-for="(b, index) of searchProjects"
      :key="index"
      v-bind:block="b"
      :reset="resetTheTag"
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
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    )

    client.query("").then((res) => {
      console.log(res); //take a look at Prismic api structure
      this.blocks = res.results;
  }
}
}
</script>
<style scoped>
</style>