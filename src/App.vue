<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/style/all.scss";
</style>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init({
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1200, // values from 0 to 3000, with step 50ms
      });
  }
}
</script>