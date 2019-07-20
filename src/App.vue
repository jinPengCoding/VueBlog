<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
  </div>
</template>

<script>
import Header from '../src/components/Header'
export default {
  components:{
    Header
  }
}
</script>


<style>

</style>
