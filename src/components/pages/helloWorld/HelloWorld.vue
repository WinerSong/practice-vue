<template>
  <div>
    <el-button>{{name}}</el-button>
    <i class="fas fa-igloo"></i>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name: 'default'
    }
  },
  created(){
    this.getName()
  },
  methods: {
    getName(){
      const that = this;
      this.$http({
        url: '/helloWorld',
        method: 'get'
      }).then((res) => {
        console.log("hello===", res);
        if(res.data.success === true){
          that.name = res.data.data.name;
        }
      })
    }
  }
}
</script>

