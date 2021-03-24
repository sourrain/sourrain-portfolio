<template>
  <div>
  <button @click="sendDataToParent">{{ tag }}</button>
  </div>
</template>
<script>
export default {
  props: {
    tag: String,
  },
  methods:{
    sendDataToParent(){
      this.$emit('filterChange', this.tag)
    }
  }
};
</script>
<style scoped>
</style>