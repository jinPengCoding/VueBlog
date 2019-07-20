<template>
  <div class="home">
    <div class="showblog">
    <div v-show="!loading" class="showblog">
      <!-- <ul>
        <li :key="index" v-for="(item,index) in data">
          {{ item.id }}
        </li>
      </ul> -->
      <Blogslist></Blogslist>
      <Side></Side>
    </div>
    <div v-show='loading' class="loading">
      <h2>正在加载请稍等···</h2>
    </div>
  </div>
  </div>
</template>

<script>
import Side from '../components/sild'
import Blogslist from '../components/Blogslist'
import '../assets/iconfont/iconfont.css'
export default {
  data(){
    return {
      loading:false,
    }
  },
  components:{
    Blogslist,
    Side
  },
  // created(){
  //   this.$http.get('/api/detaillist.json')
  //   .then((res)=>{
  //     console.log(res)
  //     if(res.data.success === true){
  //       this.loading = true
  //       this.$store.commit('getlist',res.data.data)
  //       console.log(res.data.data)
  //     }
  //     // 再对数据进行操作,找到对应的id作为标识
  //   })
  // }
}
</script>

<style scoped>
.showblog{
  width: 920px;
  margin: 5px auto;
  overflow: hidden;
}
.home{
  width: 100%;
  background: #f1f2f6;
  padding-top: 20px;
}
</style>
