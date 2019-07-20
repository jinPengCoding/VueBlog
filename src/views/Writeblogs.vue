<template>
    <div>
        <div class="form">
            <form>
                <div class="kong"></div>
                <div class="checktype">
                <h3>请选择你的文章的类型</h3>
                <label for="web">前端</label>
                 <input type="checkbox" value="前端" id="web" v-model="detailtitle.chosetype">
                 <label for="python">python</label>
                 <input type="checkbox" value="python" id="python" v-model="detailtitle.chosetype">
                <label for="intelligence">人工智能</label>
                <input type="checkbox" value="人工智能" id="intelligence" v-model="detailtitle.chosetype">
                <label for="data">大数据</label>
                <input type="checkbox" value="大数据" id="data" v-model="detailtitle.chosetype">
                <label for="Internet">物联网</label>
                <input type="checkbox" value="物联网" id="Internet" v-model="detailtitle.chosetype">
                <label for="Operationandmaintenance">运维</label>
                <input type="checkbox" value="运维" id="Operationandmaintenance" v-model="detailtitle.chosetype">
                <label for="backend">后端</label>
                <input type="checkbox" id="backend" value="后端" v-model="detailtitle.chosetype">
                <label for="games">游戏开发</label>
                <input type="checkbox" value="游戏开发" id="games" v-model="detailtitle.chosetype">
                <label for="internetcon">互联网</label>
                <input type="checkbox" value="互联网" id="internetcon" v-model="detailtitle.chosetype">
                </div>
                <div class="express">
                    <div>
                        <label for=""><h3>作者名</h3></label>
                            <input type="text" v-model="detailtitle.author">
                    </div>
                    <div>
                        <label for="articletitle"><h3>文章标题</h3></label>
                        <input id="articletitle" v-model="detailtitle.articletitle" type="text">
                    </div>
                    <div class="content">
                        <label for="articlecontent"><h3>文章内容</h3></label>
                        <textarea class="textarea" v-model="detailtitle.articlecontent"  id="articlecontent"/>
                    </div>
                    <button class="success" @click.prevent="dispatcharticle">发布文章</button>
                </div>
            </form>
            <div>
                {{ detailtitle.chosetype }}
                {{ detailtitle.articletitle }}
                {{ detailtitle.articlecontent }}
                {{ detailtitle.author }}
                {{ detailtitle.time }}
            </div>
        </div>
    </div>
</template>

<script>
var date=new Date();
var year=date.getFullYear(); //获取当前年份
var mon=date.getMonth()+1; //获取当前月份
var da=date.getDate(); //获取当前日
export default {
    data(){
     return {
         detailtitle:{
             chosetype:[],
             author:'',
             articletitle:'',
             articlecontent:'',
             time:year+'年'+mon+'月'+da+'日',
             comment:''
         }
     }
 },
 methods:{
     dispatcharticle(){
         this.$http.post('https://vuetest-da8e6.firebaseio.com/blog.json',this.detailtitle)
         .then((res) =>{
             if(res){
                 this.$router.push('/hotblogs')
             }
             console.log(res)
            //  将你写的博客内容提交
         }).catch((error)=>{
             console.log(error)
         })
     }
 }
}
</script>

<style>
.kong{
    height: 20px;
}
label{
    margin: 5px
}
input{
    margin-right:5px 
}
.express label{
    display: block
}
.form{
    text-align: center;
    max-width: 950px;
    margin: 40px auto;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
}
.content{
    margin-top: 10px
}
.express{
    margin-top: 50px
}
.success{
    width: 200px;
    height: 50px;
    color:#fff;
    background: #EA2027;
    border: 0px;
    border-radius:8px;
    font-size: 17px;
    display: block;
    margin: 25px auto;
}
input[type='text']{
    width: 300px;
    height: 25px;
    border-radius:5px;
    border: 0.5px solid #a4b0be;
    padding: 5px
}
.textarea{
    width: 300px;
    height: 100px;
    border-radius: 5px;
    padding: 5px
}
</style>
