<template>
  <div class="home">
    <div class="header">
      <div class="center">
      <ul class="mainLi">
        <li>
          <ul class="secondUl">
            <li class="rest"><router-link to='/'>首页</router-link></li>
            <li class="rest"><router-link to="/hotblogs">热门博客</router-link></li>
            <li class="rest"><router-link to="/codinglife">娱乐</router-link></li>
            <!-- <li class="rest"><router-link to="/msn">社交</router-link></li> -->
          </ul>
        </li>
        <li class="rest">
          
          <input 
          :class='{star:changeclass,bgk:isfocus}'
          name="search" 
          type="text" 
          placeholder="生活不只是代码"
          @focus="inputfocus"
          @blur="inputblus"
          v-model="search"
          >
          </li>
        <li v-show="isLogin" class="rest write">
           <span @click="handleclick">写博客</span>
        </li>
         <li v-show="!isLogin" class="rest write">
           <router-link to="/writeblogs">写博客</router-link>
        </li>
        <li class="rest" v-show="isLogin"><span><router-link to="/login">登录</router-link></span>|<span><router-link to='/register'>注册</router-link></span></li>
        <li class="rest" v-show="!isLogin"><span><router-link to="/personal">{{ users }}</router-link>|</span><span @click="handlechangeloginstate"><router-link to="/login">退出</router-link></span></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
  data(){
    return {
      isfocus:false,
      changeclass:true,
      search:'',
      auhtor:''
    }
  },
  computed:{
      isLogin(){
          return this.$store.state.isLogin
      },
      users() {
        return this.$store.state.username
      }
      // searchvalue() {
      //   return this.$store.getters.searchvalue(this.search)
      //   // console.log('管用')
      // }
      // changelist(){
      //   return  this.$store.getters.searchvalue(this.search)
      // }
  },
  watch:{
    search:function(){
      this.$store.commit('changeinput',this.search)
    }
   },
   created(){
    this.$http.get('https://vuetest-da8e6.firebaseio.com/blog.json')
    .then((res) =>{
      var data = res.data
      if(data) {
        this.loading = true
      }
      var arr = []
      for(var i in data){
        data[i].id=i
        arr.push(data[i])
      }
      this.$store.commit('getlist',arr)
    })
  },
  methods:{
      handleclick (){
        if(confirm('未登录不能进行写博客,是否先登录') === true){
              this.$router.push('/login')
          }
      },
      handlechangeloginstate (){
        this.$router.push('/login')
        this.$store.commit('changeloginstate')
      },
      change(){
        alert('还是这昂的')
      },
      inputfocus(){
        console.log('获取到焦点事件')
        this.isfocus = true,
        this.changeclass = false
      },
      inputblus(){
        this.isfocus = false,
        this.changeclass = true
      }
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dfe4ea;
  padding: 0px;
  margin: 0px
}
ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.bgk{
  margin-left: 40px;
  padding-left:5px;
  border-radius: 4px;
  width: 150px;
  height: 20px;
  background: #fff
}
.center{
  max-width: 950px;
  height: 50px;
  margin: 0 auto;
  font-size: 17px
}
.mainLi li{
  float: left;
}
.rest {
  padding: 10px 28px;
}
.restli {
  padding-top:10px 
}
.star{
  margin-left: 40px;
  padding-left:5px;
  border-radius: 4px;
  width: 150px;
  height: 20px;
  background: #f1f2f6
}
a{
  text-decoration: none;
  color:  #000000
}
span a{
  font-size: 15px
}
</style>