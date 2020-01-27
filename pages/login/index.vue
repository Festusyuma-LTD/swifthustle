<template>
  <div class="wrapper">
    <img id="shape1" src="@/assets/images/subtraction5.svg" alt="">
    <AppLoginComponent class="" />
    <img id="shape2" src="@/assets/images/subtraction6.svg" alt="">
  </div>
</template>

<script>
import AppLoginComponent from '@/components/login/AppLoginComponent.vue'
export default {
  layout: 'register',
  components: {
    AppLoginComponent
  }
}
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
  height: 100% !important;
}
.wrapper{
  height: 100vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2E0E54;
  overflow: hidden;
}
#shape1{
    position: absolute;
    bottom: -3px;
    left: -2px;
  }
  #shape2{
    position: absolute;
    bottom: -10px;
    right: -3px;
  }
</style>
