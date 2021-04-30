<template>
  <section v-on:click="addUser">You are: {{ this.$store.state }}</section>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.loadUsers();
    this.$store.dispatch("addUsers");
  },
  methods: {
    addUser() {},
    loadUsers() {
      this.$store.dispatch("loadUsers");
    },
  },
};
</script>

<style scoped>
</style>
