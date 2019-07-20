<template>
  <div class="block">
    <el-carousel trigger="click" class="elItem">
      <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
        <img :src="item.idView" alt="zoumaguanhua">
      </el-carousel-item>
    </el-carousel>
    <div 
    class="hotblog" 
    v-for="(item,index) in getBlogs"
    :key="index" 
    >
      <h3>
        {{ item.articletitle }}
      </h3>
     <router-link tag="div" :to="'/hotblogs/'+item.id">
        <div class="content">
        {{ item.articlecontent|contentFilter }}
      </div>
     </router-link>
      <div class="author">
        {{ item.author }}
        </div>  
    </div>
    <div class="footer">
      <router-link to="/hotblogs">加载更多的博客</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgSrc:[
       {id: 0, idView: require('../assets/111.png')},
       {id: 1, idView: require('../assets/blue.png')},
       {id: 2, idView: require('../assets/fff.png')},
       {id:3, idView: require('../assets/red.png')}
      ],
    }
  },
  computed: {
    getBlogs(){
      return this.$store.state.hotblogslist.slice(0,3)
    }
  },
  filters:{
    contentFilter(value){
      if(value.length>160){
        return value.slice(0,100)+'···'
      }else {
        return value
      }
    }
  }
}
</script>


<style scoped>  
  .elItem{
    width: 800px
  }
  .hotblog {
    width: 780px;
    background: #f1f2f6;
    border-radius: 5px; 
    padding-top: 5px;
    padding-left: 20px;
    margin-top: 20px;
    padding-bottom: 10px;
    height: 150px;
  }
  .author {
    display: block;
    font-size: 15px;
    margin-top: 5px;
  }
  .content{
    margin-bottom: 5px;
    cursor: pointer;
    height: 50px;;
  }
  .footer{
    width: 800px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #f1f2f6;
    margin-top: 10px;
    font-size: 16px;
    border-radius: 10px;
  }
  .footer a{
    color: #999;
    text-decoration: none
  }
  .block{
    margin: 20px auto;
    width: 800px;
  }
</style>