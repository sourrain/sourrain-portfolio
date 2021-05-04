<template>
  <div>
    <NuxtLink :to="'/projects/'+project.uid" class="" v-if="project.type === 'project'">
     <img v-if="project.data.main"
     class="w-screen h-screen"
      v-bind:src="f_url" />
      <h1 class="">
        {{ project.data.title[0].text }}
      </h1>
      <h2 v-if="project.data.subtitle">
        {{ f_subtitle }}
      </h2> 
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    project:Object
  },
  data(){
    return {
      subtitle: '',
      url:''
    }
  },
  computed: {
    f_subtitle() {
        return this.project.data.subtitle[0].text
    },
    f_url(){
      return this.project.data.main.url
    }
  }
};
</script>
<style scoped>
</style>