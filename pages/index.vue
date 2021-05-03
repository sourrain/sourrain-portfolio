<template>
  <div>
    <h1>{{ this.$store.state.projects }}
    </h1>
  </div>
</template>

<script>
export default {
  mounted(){
    this.changestate()
    return this.$store.state.projects
  },
computed:{
  change(){
    this.$store.commit('changeProject')
}
},
  methods:{
    changestate(){
this.$store.commit('changeProject')
    }
  }
};
</script>

<style scoped>
</style>
