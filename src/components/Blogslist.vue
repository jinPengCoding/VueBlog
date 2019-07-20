<template>
    <div class="listblog">
      <ul class="listmain" v-show="gerArr.length">
          <li class="firstli" :key="index" v-for="(item,index) in gerArr">
          <div class="title">
            <h3>{{ item.articletitle }}</h3>
          </div>
          <router-link :to="'/hotblogs/'+item.id" tag="div" style="cursor: pointer">
          <div class="content">
           {{ item.articlecontent }} 
         </div>
         </router-link>
          <div class="author"><span :style="{float:'left'}"><b>作者</b>&nbsp;&nbsp;&nbsp;{{ item.author }}</span>
          <span :style="{float:'right'}" v-for="(itema,index) in item.chosetype" :key="index">
            {{ itema }}
          </span>
          </div>
          <div class="recommand">
            <ul>
            <li @click="admire(index)"><i :class="{iconfont:true,self:true,thumbs:daindex === index}">&#xe61f;</i></li>
            <li><i @click="recommand(index)" class="iconfont self">&#xe664;</i></li>
            <li><i class="iconfont self">&#xe6e7;</i></li>
          </ul>
          </div>
          <div v-show="index === reindex" class="pinglun">
            <textarea  class="textarea"  v-model="recommandContent" />
            <button @click="submits(item)">提交评论</button>
          </div>
        </li>
      </ul>
      <div  v-show="!gerArr.length">
        <transition name="bounce">
          <i class="iconfont nloading">&#xe61d;</i>
        </transition>
    </div>
    </div>
</template>

<script>
import '../assets/iconfont/iconfont.css'
export default {
  data(){
    return {
        count:0 ,
        daindex:'',
        reindex:'',
        recommandContent:'',
        chijiuhua:false
    }
  },
  methods:{
    add(){
      this.count = this.count+1
    },
    submits(item){
      //如果有内容就法号你现在开始发送请求像数据库里面传递数
        this.reindex = null
        if(this.recommandContent) {
          this.$http.post('https://vuetest-da8e6.firebaseio.com/blog/'+item.id+'.json',{comment:this.recommandContent})
          .then((res) =>{
            console.log(res)
        })
        }
        this.recommandContent =''
    },
    admire(index){
      this.daindex = index
      this.chijiuhua =true
    },
    recommand(index){
      this.reindex = index
    }
  },
  // watch: {
  //   gerArr() {
  //     this.loading=true
  //   }
  // },
  // 你这里watch了在还未加载的时候这个computed就已经变化了你再进入就不会变化这个loading也就不会发生变化了
  computed:{
    gerArr() {
      return this.$store.state.hotblogslist
    }
  }
}
</script>

<style scoped>
button{
  background: #0984e3;
  border: 0px;
  border-radius: 4px
}
.recommand{
  height: 30px;
}
.recommand ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin-top:20px
}
.nloading{
  font-size: 60px;
  position: relative;
  left: 30%;
  top: 140px;
  animation: myfirst 500ms linear infinite;
  display: inline-block;
}
@keyframes myfirst
{
0%   {transform: rotate(0)}
25%  {transform: rotate(90deg)}
50%  {transform: rotate(180deg)}
75%  {transform: rotate(270deg)}
100% {transform: rotate(360deg)}
}
.thumbs{
  background: #d63031
}
.textarea{
  width: 100%;
  height: 45px;
  margin-top:20PX 
}
.recommand ul li{
  float: left;
  width: 33%;
  border:1px solid #dcdc;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  padding-top: 5px
}
.self{
  font-size: 20px
}
.firstli{
  list-style: none;
  /* border-bottom: 1px solid #dcdc; */
  padding: 10px;
  margin-bottom:10px; 
  background: #fff;
  border-radius:4px;
}
.listmain{
    margin: 0px;
    padding: 0px
}
.listblog{
    width: 700px;
    display: inline-block;
    float: left;
}
.content{
    margin-bottom: 10px;
    overflow: hidden;
    width: 640px;
    height: 45px;
}
span{
  margin-left: 5px
}
.author {
  overflow: hidden
}
</style>