<template>
  <div>
    <div :class="{main:index%2}" v-for="(item,index) in arr" :key="index">
      {{ item.name }}
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgk:false,
      arr:[
        {id:0,name:'jinpeng',title:'jinpeng'},
        {id:1,name:'jinpeng',title:'jinpeng'},
        {id:2,name:'jinpeng',title:'jinpeng'},
        {id:3,name:'jinpeng',title:'jinpeng'}
      ]
    }
  },
  mounted () {

  }
}
</script>

<style>
.main{
  background: #999
}
</style>
