<template>
    <div >
        <div class="deetailHeader">
            <span class="detailimg">
                <img style="width:300px;height:300px" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000004TL0gm15U1ev.jpg" alt="">
            </span>   
            <div class="recommad">
                <div class="singerdetail">
                <h1>{{ singMsg.extras.name }}</h1>
            </div> 
            <div>
                <a href="" class="detailsingername">{{ singMsg.track_info.singer[0].name  }}</a>
            </div>
            <div>
                <ul>
                    <li>专辑:You Need To Calm Down</li>
                    <li>语种:英语</li>
                    <li>流派:PoP</li>
                    <li>唱片公司:环球唱片</li>
                    <li>发行时间:2019-6-14</li>
                </ul>
            </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            singMsg:{ }
        }
    },
    created() {
        const id = this.$route.params.id
        this.$http.get('/api/musicDetail.json/?id='+id)
        .then((res) => {
            this.singMsg = res.data.songinfo.data
            console.log(res.data.songinfo.data.track_info.singer[0].name)
        }).catch((error) =>{
            console.log(error)
        })
    }
}
</script>

<style scoped>
.deetailHeader{
    width: 100%;
    height: 500px;
    margin: 20px auto;
    padding-top:20px; 
    background: #f1f2f6;
}
.detailimg {
    margin-right: 20px;
    margin-left: 100px;
    float: left;
    overflow: hidden;
}
ul li {
    float: left;
    list-style: none;
    overflow: hidden;
    width: 250px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 15px;
}
.detailsingername{
    color: #999;
    font-size: 16px;
    text-decoration: none
}
</style>
