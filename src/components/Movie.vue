<template>
    <div class="movielisthead">
        <div class="movielist">
            <h1>正在热映</h1>
            <ul>
                <li v-for="(item,index) in data" :key="index">
                <img :src="item.cover">
                 <div class="detail">
                     <span :title="item.title">{{ item.title | itemfilter}}</span>
                     <span>{{ item.rate }}</span>
                     <button>查看详情</button>
                 </div>
                </li>
        </ul>
        </div>
        <div class="recomovie">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loading: false 
        }
    },
    created(){
        this.$http.get('/api/movielist.json')
        .then((res) =>{
            const data = res.data.subjects
            this.$store.commit('dispatchmovie',data)
            // console.log(res.data.subjects)
        })
    },
    computed:{
        data(){
            return this.$store.state.movielist.splice(0,20)
        }
    },
   filters:{
       itemfilter:function(item){
           if(item.length > 4){
              const arr = item.split('')
              return arr.splice(0,5).join('') + '···'
           }else {
               return item
           }
       }
   }
}
</script>

<style scoped>
li{
    text-align: center;
    float: left;
    list-style: none;
    margin-right: 10px;
    margin-bottom: 15px
}
img{
    width: 115px;
    height: 169px;
}
.movielist{
    width: 600px;
    display: inline-block;
    float: left;
}
span{
    display: block
}
.recomovie{
    width: 200px;
    height: 500px;
    display: inline-block;
    background: #f1f1f1
}
button{
    font-size: 12px;
    border-radius: 2px;
}
.movielisthead{
    width: 800px;
    margin: 20px auto

}
</style>
