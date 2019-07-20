<template>
    <div>
        <div class="musicTitle"><h2>音乐流行榜单</h2></div>
        <div id="songList">
            <div 
            v-for="(item,index) in arr" 
            :class="{main:true,bgk:index % 2}" 
            :key="index"
            @mouseenter="showsvg(index)"
            @mouseleave="hiddensvg"
            >
            <div class="songIndex" :key="0">{{ index+1 }}</div>
            <div class="songrank">{{ rangeNumber }}</div>
            <div class="songdetail">
                    <router-link :to="'/codinglife/music/'+item.id">
                    <img class="singerimg" :src="'https://y.gtimg.cn/music/photo_new/T002R90x90M000'+item.album.mid+'.jpg'"></router-link>
                    <a class="name" :title="item.name">{{ item.name | songnamefilter(index) }}</a>
            </div>
            <div class="svg" v-show="index === svgShow">
                <span>
                    <i class="iconfont music">&#xe643;</i>
                    <i class="iconfont music">&#xe601;</i>
                    <i class="iconfont music">&#xe60c;</i>
                    <i class="iconfont music">&#xe645;</i>
                </span>
            </div>
            <div class="songname"><a>{{ item.singer[0].name }}</a></div>
            <div class="songtime">02:54</div>
        </div>
        <div 
        class="loadMore"
        @click="loadMore"
        >
            加载更多
        </div>
        </div>
    </div>
</template>

<script>
import '../assets/iconfont/iconfont.css'
import { RouterLink } from 'vue-router'
let that 
export default {
    data() {
        return {
            loading:false,
            svgShow:null,
            arr:[ ],
        }
    },
    beforeCreate () {
        that = this
    },
    computed: {
        //生成一个随机的100以内的整数
        rangeNumber() {
            return Math.floor(Math.random() * (100 - 0)) + 0 +'%';
        }
    },
    methods:{
        showsvg(index) {
            this.svgShow = index
        },
        hiddensvg() {
            this.svgShow = null
        },
        loadMore() {
            alert('没有更多了想找更多自己去找吧')
            // 这时候就请求其他的json文件通过page
            // /api/detail.json?page++
        }
    },
    filters: {
        songnamefilter(value,index){
                if(value.length >5) {
                    if(index === that.svgShow) {
                        return value.slice(0,5)+'···'
                    }else {
                        return value
                    }
                }else {
                    return value
                }
        }            
    },
    created () {
        // 这时候data已经初始化有了,属性方法都初始化了
        this.$http.get('/api/songlist.json')
        .then((res) => {
            this.loading = true
            const data = res.data.detail.data.songInfoList
            this.arr = data
        })
    }

}
</script>

<style scoped>
.musicTitle {
    position: relative;
    left: 130px;
}
#songList{
    width: 840px;
    margin: 20px auto
}
.svg{
    position: absolute;
    left: 550px;
    margin-top: 5px;
}
.music{
    font-size: 30px;
    display: inline-block;
    width: 40px;
    cursor: pointer;
}
.main {
    width: 840px;
    height: 80px;
    background: #f1f2f6
}
.bgk {
    background: #fff
}
.main div{
    display: inline-block;
    line-height: 80px
}
.songIndex{
    width: 40px;
    text-align: right;
    color: #ff4222;
    font-size: 24px
}
.songrank{
    left: 60px;
    width: 72px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #999;
}
.name{
    padding: 10px
}
.songdetail a{
    font-size: 14px;
    margin-bottom: 10px;
}
.singerimg{
    vertical-align: middle;
    display: inline-block;
    width: 80px;
    height: 75px;
    margin-bottom: 8px;
}
.songdetail {
    width: 370px;
}
.songname {
    padding-left: 15px;
    width: 25.5%;
}
.songtime {
    color: #999
}
.loadMore {
    width: 840px;
    height: 40px;
    margin: 25px auto;
    background: #f1f2f6;
    text-align: center;
    line-height: 40px;
    color: #999;
    cursor: pointer;
}
</style>
