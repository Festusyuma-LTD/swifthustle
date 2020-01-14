<template>
  <div class="wrapper">
    <AppLoginComponent class="" />
  </div>
</template>

<script>
import AppLoginComponent from '@/components/login/AppLoginComponent.vue'
export default {
  components: {
    AppLoginComponent
  }
}
</script>

<style lang="scss" scoped>
html {
  height: 100% !important;
}
.wrapper{
  height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
