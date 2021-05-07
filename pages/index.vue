<template>
  <div>
    <!-- index -->
    <div class="bg-yellow">
      <div>
        <h1 class="text-9xl">Isabel Sun</h1>
        <p class="text-xs">
          Creative Developer who loves to direct multimedia performances
        </p>
      </div>
    </div>
    <!-- projects -->
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
export default {
  data() {
    return {
      projects: this.$store.state.projects,//return the changed state array: projects
    }
  },
  mounted() {
    this.loadProjects(); //call the method: loadProjects
  },
  methods: {
    loadProjects() {
      this.$store.dispatch("getProjects"); //dispatch action: loadProjects to trigger the state change
    }
  }
}
</script>

<style scoped>
</style>
