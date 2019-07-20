<template>
   <div id="blogdetail">
       <div class="blogdetailcen">
           <div class="blogdetaillef">
              <div v-show="!loading">
                   <img class="portrait" src="https://dummyimage.com/60x60/000/fff" alt="imglose">
               <div class="detailtitle">
                   <div class="detailauthor">
                   <b>
                       {{ real.author }}
                    </b>
               </div>
               <div class="detailtime">
                  {{ real.time }}
               </div>
               </div>
               <div>
                   <h1>
                   {{ real.articletitle }}
                  </h1>
               </div>
               <div class="article">
                  <p v-for="(item,index) in  filterCom(real.articlecontent)" :key="index">
                      {{ item }}
                  </p>
               </div>
              </div>
           </div>
           <div class="blogdetailrig">
               <div>
                   关于作者
               </div>
           </div>
       </div>
       <div class="iconcycle" v-show="loading">
           <i class="iconfont nloading">&#xe61d;</i>
       </div>
   </div>
</template>

<script>
import '../assets/iconfont/iconfont.css'

export default {
    data() {
        return {
            real:{},
            loading:true
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://vuetest-da8e6.firebaseio.com/blog/'+this.$route.params.id+'.json')
        .then((res) =>{
            console.log(res.data.author)
            if(res.data){
                this.loading = false
                this.real = res.data
            }
        }).catch((error)=>{
            console.log(error)
        })
    },
    computed:{
         filterCom:function(){
            return function(value){
                if(value||''){
                    return value.split('\n')
                }
            }
        }
    }
}
</script>

<style scoped>
#blogdetail{
    background: #f1f2f6;
    padding-top: 20px
}
.blogdetailcen{
    width: 950px;
    margin:0 auto;
    overflow: hidden;
}
.blogdetaillef{
    width: 700px;
    background: #fff;
    float: left;
    margin-right: 20px;
    padding-top:10px;
    padding-left: 10px; 
}
.nloading{
  font-size: 60px;
  position: absolute;
  left: 520px;
  top: 260px;
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
.portrait{
    border-radius: 50%
}
.blogdetailrig{
    background: #fff;
    width: 200px;
    height: 200px;
    float: left;
}
.detailtitle{
    display: inline-block;
    margin-left: 20px;
}
.detailtime{
    margin-top: 10px;
    font-size: 15px;
    color: #909090;
}
</style>
