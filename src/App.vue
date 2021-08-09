<template>
  <div id="app">
    <div class = "container">
      <div class="box">
        <ColorSection statePath = "/red" class = "red" :count = count></ColorSection>
        <ColorSection statePath = "/yellow" class = "yellow" :count = count></ColorSection>
        <ColorSection statePath = "/green" class = "green" :count = count></ColorSection>
      </div>
    </div>
    <Timer :count = count></Timer>    
  </div>
</template>


<script>

import ColorSection from './components/ColorSection'
import Timer from './components/Timer'

export default {
  name: 'app',
  data() {
    return {
      nextPath: "",
      count: 0,
      forYellow: "/red"
    }
  },
  methods: {
    initState(path) {
      
      if (path === "/red" || path === "/green") this.forYellow = path;

      switch (path) {
        case "/":
        case '/red':
          this.nextPath = '/yellow';
          this.count = 10;
          break;
        case '/yellow':
          if (this.forYellow === "/red") this.nextPath = '/green';
          if (this.forYellow === "/green") this.nextPath = '/red';
          this.count = 3;
          break;
        case '/green':
          this.nextPath = '/yellow';
          this.count = 15;
          break;
      }
    },
    saveCountOrChangeURL() {
      if (this.count) {
        sessionStorage.count = this.count;
        
        setTimeout (()=> {
          --this.count;
          return this.saveCountOrChangeURL();
        }, 1000);
      } else {
        this.$router.push({ path: this.nextPath });
      }
      
    }
  },
  
  created() {
    this.initState(this.$route.path);
    
    if( sessionStorage.path === this.$route.path ) this.count = sessionStorage.count;
  },
  
  mounted() {
    
    this.$router.afterEach((to, from) => {
      this.initState(this.$route.path);
      
      sessionStorage.path = this.$route.path;
      
      this.saveCountOrChangeURL();
    });
    sessionStorage.path = this.$route.path;
    
    this.saveCountOrChangeURL();
  },

  components: {
    ColorSection,
    Timer
  }
}
</script>

<style scoped>

  .container {
    display: flex;
    justify-content: center;
  }
  .box {
    background-color: #5C5C5C;
    height: 200px;
    width: 75px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
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