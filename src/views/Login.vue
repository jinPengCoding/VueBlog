<template>
    <div class="body">
      <div class="form">
        <div class="return"><span @click="back">返回</span>|<span><router-link to="/">回到主页</router-link></span></div>
        <form>
            <div>
                <label for="username">
                    用户名
                </label>
                <input class="user" type="text" id="username" v-model="users">
            </div>
            <div>
                <label for="pwd">
                    密码
                </label>
                <input class="pass" type="password" id="pwd" v-model="pass">
            </div>
            <input type="submit" @click.prevent="handleclick" value="登录"/>
            </form>
            <div class="guide"><router-link to='/register'>没有账号注册?</router-link></div>
            <span class="show" v-show="isshow">用户名或者登录名不能为空</span>
        <div>
        </div>
    </div>

    </div>
</template>

<script>

export default {
  data () {
    return {
      users: '',
      pass: '',
      confirmpwd: '',
      isshow: false
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    handleclick () {
      // this.$http.post('https://vuetest-da8e6.firebaseio.com/')
      if(this.users === '' || this.pass === ''){
          this.isshow = true
      }else{
        this.isshow = false
        this.$http.get('https://vuetest-da8e6.firebaseio.com/login.json')
        .then((res) => {
          var loginarr = []
          for (let key in res.data) {
            loginarr.push(res.data[key])
          }
          for (let i = 0; i < loginarr.length; i++) {
            if (loginarr[i].users === this.users) {
              if (loginarr[i].pass === this.pass) {
                this.$store.commit('changeisLogin')
                this.$router.push('/')
                this.$store.commit('getusername',this.users)
              }
            }
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.body{
  background:url('../assets/loginb.jpg') no-repeat;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.return{
  color: #fff
}
.return a{
  color: #fff
}
.guide a{
    text-decoration: none;
}
.show{
    color: red;
    font-size: 15px
}
    .return{
    position: absolute;
    top: 10px;
    left: 10px;        
    }
    .return span{
        display: inline-block;
        padding: 10px
    }
    .return span a{
        text-decoration: none
    }
    label{
        display: block;
        color: #fff;
    }
    .form{
        text-align: center;
        width: 500px;
        height: 500px ;
        background: #eee;
        margin: 100px auto;
        border-radius:4px;
        border: 1px solid #fff
    }
    .user{
        width: 200px;
        height: 20px;
        padding: 5px;
        border-radius:8px;
        border: 0px 
    }
    .pass{
        width: 200px;
        height: 20px;
        padding: 5px;
        border-radius:8px;
        border: 0px
    }
    form div{
        margin:40px;
    }
    span{
        display: block;
    }
    input[type='submit']{
        width:150px;
        height: 40px;
        background: #3498db;
        border: 0px;
        border-radius: 4px;
    }
    input{
        margin-top: 15px
    }
</style>
