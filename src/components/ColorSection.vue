<template>
  <div class = "circle" :class="{ active: isActive, flashing: isFlashing }"></div>
</template>

<script>
export default {
  props: ['statePath', 'count'],
  computed: {
    isActive() {
      return this.$route.path === this.statePath;
    },
    isFlashing() {
      return this.count <= 3 && this.$route.path === this.statePath && this.$route.path !== "/yellow";
    }
  }
}
</script>

<style scoped>
  .circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    opacity: 0.3;
  }

  .active {
    opacity: 1;
    box-shadow: 0 0 30px;
  }

  .flashing {
      animation-name: blinker;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(1.0,0,0,1.0);
      animation-duration: 0.9s;
      -webkit-animation-name: blinker;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
      -webkit-animation-duration: 0.9s;
  }

  @keyframes blinker {
   from { opacity: 1.0; }
    to { opacity: 0.3; }
  }
 
  @-webkit-keyframes blinker {
    from { opacity: 1.0; }
    to { opacity: 0.5; }
  }
</style>