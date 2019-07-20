<template>
    <div>
         <ul>
            <li> <router-link to='/codinglife/movie'>电影</router-link></li>
            <li><router-link to='/codinglife/music'>音乐</router-link></li>
            <li><router-link to="/codinglife/read">阅读</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style: none;
    padding: 0px;
    margin: 0px
}
li{
    float: left;
    width: 100px;
    text-align: center;
    height: 30px;
    vertical-align: middle

}
ul{
    width: 300px;
    margin: 0 auto
}
div{
    width: 100%;
    background: #fff;
    height: 30px;
    text-align: center;
    margin: 0 auto;
    background: #dfe4ea
}
</style>
