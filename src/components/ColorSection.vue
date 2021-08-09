<template>
  <div class = "circle" :class="{ active: isActive }"></div>
</template>

<script>
export default {
  props: ['statePath', 'count'],
  computed: {
    isActive() {
      return this.$route.path === this.statePath;
    }
  }
}
</script>

<style scoped>
  .circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
    box-shadow: 0 0 30px;
  }

</style>