<template>
  <div>
    <NuxtLink :to="'/artworks/'+block.uid" class="" v-if="block.type === 'project'">
     <img v-if="block.data.main"
     class="w-screen h-screen"
      v-bind:src="f_url" />
      <h1 class="">
        {{ block.data.title[0].text }}
      </h1>
      <h2 v-if="block.data.subtitle">
        {{ f_subtitle }}
      </h2> 
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    block:Object
  },
  data(){
    return {
      subtitle: '',
      url:''
    }
  },
  computed: {
    f_subtitle() {
        return this.block.data.subtitle[0].text
    },
    f_url(){
      return this.block.data.main.url
    }
  }
};
</script>
<style scoped>
</style>