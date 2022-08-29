<template>
  <div class="result">
    <el-row>
        <el-button @click='goTo1()'>柱状图</el-button>
        <el-button @click='goTo2()'>雷达图</el-button>
        <el-button @click='goTo3()'>日历图</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    goTo1(){
        //直接跳转
        this.$router.push('/result1');
     },
    goTo2(){
        //直接跳转
        this.$router.push('/result2');
     },
    goTo3(){
        //直接跳转
        this.$router.push('/result3');
    }
    }
  }
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
#result {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>