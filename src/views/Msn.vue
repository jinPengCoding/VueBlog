<template>
    <div>
        {{ gerArr }}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
   computed: {
      gerArr() {
          return this.$store.state.hotblogslist 
      }
  }
}
</script>

<style>

</style>
