<template>
  <div id="app">
    <div class="box">
      <!-- <Timer></Timer> -->
      <ColorSection statePath = "/red" class = "red"></ColorSection>
      <ColorSection statePath = "/yellow" class = "yellow"></ColorSection>
      <ColorSection statePath = "/green" class = "green"></ColorSection>
    </div>
  </div>
</template>


<script>

import ColorSection from './components/ColorSection'
// import Timer from './components/Timer'

export default {
  name: 'app',
  data() {
    return {
      nextPath: "",
      delay: 0,
      forYellow: "/red",
      // count: 0
    }
  },
  methods: {
    initState(path) {
      if (path === "/red" || path === "/green") this.forYellow = path;
      
      switch (path) {
        case "/":
        case '/red':
          this.nextPath = '/yellow';
          this.delay = 10;
          break;
        case '/yellow':
          if (this.forYellow === "/red") this.nextPath = '/green';
          if (this.forYellow === "/green") this.nextPath = '/red';
          this.delay = 3;
          break;
        case '/green':
          this.nextPath = '/yellow';
          this.delay = 15;
          break;
      }
    },
    
    switchState(path, delay) {
      setTimeout( () => this.$router.push({ path: path })
        , delay * 1000);
    },
    // countDelay() {

    // }
  },
  created() {
    this.initState(this.$route.path);
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      this.initState(this.$route.path);
      this.switchState(this.nextPath, this.delay);
    });
    this.switchState(this.nextPath, this.delay);
  },
  components: {
    ColorSection
  }
}
</script>

<style scoped>
  .box {
    background-color: #5C5C5C;
    height: 200px;
    width: 75px;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    flex-direction: column;
  }

  .red {
    background: #DD120E;
    color: #DD120E;;
  }

  .yellow {
    background: #FADC00;
    color: #FADC00;
  }

  .green {
    background: #44D600;
    color: #44D600;
  }
</style>
