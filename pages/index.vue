<template>
  <section v-on:click="addTitle">You are: {{ this.$store.getters }}</section>
</template>

<script>
export default {
  computed: {
    titles() {
      return this.$store.state.titles;
    },
  },
  mounted() {
    this.loadTitles();
    this.$store.dispatch("addTitle");
  },
  methods: {
    addTitle() {},
    loadTitles() {
      this.$store.dispatch("loadTitles");
    },
  },
};
</script>

<style scoped>
</style>
