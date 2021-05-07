<template>
  <div>
    <button @click="goBack">Go Back</button>
        <!-- current work -->
    <h1>{{ theProject }}</h1>
    <h2>{{ theProject }}</h2>
    <img :src="theProject" />
    <div v-if="theProject">video is here!</div>
    <div v-for="(item, index) of theProject" :key="index">
      <div v-if="item.type === 'paragraph'">
        <p>{{ item.text }}</p>
      </div>
      <div v-else-if="item.type === 'image'">
        <img v-bind:src="item.url" />
      </div>
    </div>
    <!-- related work -->
    <div class="bg-blue text-xs flex">
      <projects
        class=""
        v-for="(p, index) of projects"
        :key="index"
        v-bind:project="p"
      >
      </projects>
    </div>
  </div>
</template>
<script>
import goBack from '../../lib/goBack'

export default {
  data() {
    return {
      projects: this.$store.state.projects,//return the changed state array: projects
      theProject:this.$store.state.theProject
    };
  },
  mounted() {
    // this.$route.params.project is the current project
    this.loadProjects(); //call the method: loadProjects
  },
  methods: {
    loadProjects() {
      this.$store.dispatch("asyncData"); //dispatch action: loadProjects to trigger the state change
    },
    goBack() {
      goBack(this.$router, -1)
   
    }
  }
};
</script>

<style scoped>

</style>