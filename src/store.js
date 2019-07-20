import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    wanquan: 0,
    cnumber: 0,
    isLogin: true,
    hotblogslist: [],
    value: '',
    movielist: [],
    blogList: [],
    testone: 'hapi',
    username: '',
    testtwo: 'hahahpi',
    arr: [
      {
        id: 1,
        name: '金鹏',
        content: 'nnanannan'
      },
      {
        id: 2,
        name: '小艺',
        content: 'nnanannan'
      },
      {
        id: 1,
        name: '金鹏',
        content: 'nnanannan'
      }
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.arr.filter((item) => {
        return item.name === '金鹏'
      })
    }
  },
  mutations: {
    handlechangeit (state) {
      console.log('完全ok')
      state.wanquan++
    },
    changeit (state) {
      console.log('ojbk')
      state.ceshi++
    },
    handleclickityiquan (state) {
      console.log('yep')
      state.cnumber++
    },
    changeisLogin (state) {
      state.isLogin = false
    },
    changeloginstate (state) {
      state.isLogin = true
    },
    getlist (state, arr) {
      state.hotblogslist = arr
      console.log('yep')
      console.log(arr)
    },
    changeinput (state, value) {
      state.value = value
    },
    self (state) {
      state.hahaha++
    },
    dispatchmovie (state, data) {
      state.movielist = data
    },
    handleaction (state) {
      state.cnumber++
    },
    getusername (state, username) {
      state.username = username
    }
    // 那么现在的这个search就绑定了 搜索框的内容了
  },
  // 这个是进行异步操作的 直接在mutations是异步操作不会起作用
  actions: {
    handleaction (context) {
      setTimeout(() => {
        context.commit('handleaction')
      }, 3000)
    }
  }
})

export default store
