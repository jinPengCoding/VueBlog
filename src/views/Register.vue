<template>
    <div class="body">
        <div class="form">
        <form>
            <div>
                <label for="username">
                    用户名
                </label>
                <input class="user" type="text" id="username" v-model="personal.users">
            </div>
            <div>
                <label for="pwd">
                    密码
                </label>
                <input class="pass" type="password" id="pwd" v-model="personal.pass">
            </div>
            <div>
                <label for="confirmpwd">
                    确认密码
                </label>
                <input class="confirmpass" type="password" id="confirmpwd" v-model="confirmpwd"> <span v-show="isshow">确认密码与密码不一致</span>
            </div>
            <input type="submit" @click.prevent="handleclick" value="提交"/>
            <span><router-link to="/login">已有账号登录</router-link></span>
        </form>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      personal: {
        users: '',
        pass: ''
      },
      confirmpwd: '',
      isshow: false
    }
  },
  methods: {
    handleclick () {
    // this.$http.post('https://vuetest-da8e6.firebaseio.com/')
      if (this.personal.pass === this.confirmpwd) {
        this.$http.post('https://vuetest-da8e6.firebaseio.com/login.json', this.personal)
          .then((res) => {
              console.log(res)
            if(res.status === 200){
             this.$router.push('/login')
            }
          })
      } else {
        this.isshow = true
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
    label{
        display: block;
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
    .form div{
        margin:10px;
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
    .confirmpass{
        width: 200px;
        height: 20px;
        padding: 5px;
        border-radius:8px;
        border: 0px
    }
    .form div{
        margin:40px;
    }
    label{
        display: block;
        color: #fff;
    }
    input{
        margin-top: 15px;
        text-align: center
    }
</style>
