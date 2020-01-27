<template class="home-wrapper">
  <div class="home-wrapper">
    <img src="@/assets/images/light.png" class="light" alt="">
    <img src="@/assets/images/coins1.png" class="coin1" alt="">
    <img src="@/assets/images/Spinner.svg" class="spinner" alt="">
    <div class="container-fluid contents-wrapper">
      <homeNavbar />
      <div class="row">
        <div class="col-md-5">
          <div class="content">
            <h1 id="intro-statement">
              Get <br><b>1000%</b><br>On registration
            </h1>
            <p class="intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <b-button id="join-btn" size="lg">
              Join us
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import homeNavbar from '@/components/navbars/AppHomeNavBar.vue'
export default {
  layout: 'landingPage',
  components: {
    // Logo
    homeNavbar
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper{
  background: linear-gradient( 90deg, rgb(30, 11, 61), rgba(30, 11, 61, 0.788)), url('~assets/images/curtainHome.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  overflow: hidden;
  .light{
    position: absolute;
    top: -100px;
    left:30%;
  }
  .coin1{
    position: absolute;
    top: 30%;
    z-index: 2;
    left: 50%;
    transform: scale(1.7);
  }
  .spinner{
    position: absolute;
    bottom: -30%;
    right: -20%;
  }
  .contents-wrapper{
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%;
    background: linear-gradient( rgba(30, 11, 61, 0.692), rgba(30, 11, 61, 0.644));
  }
}
// template{
//   background: linear-gradient( rgba(30, 11, 61, 0.692), rgba(30, 11, 61, 0.644)), url('~assets/images/curtainHome.png');
//   background-position: center;
//   background-repeat: no-repeat;
// }
.content{
  #intro-statement{
    color: #f8f8f8;
    font-size: 60px;
    b{
      color: #FFD009;
      font-size: 165px;
    }
  }
  .intro-text{
    color: white;
    font-size: 25px;
  }
  #join-btn{
    background: #FFD009;
    color: #282828;
    padding:8px 50px;
    font-size:35px;
    font-weight: 600;
    border-radius: 40px;
    border:2px solid #FFD009;
    box-shadow: 3px 4px 15px .5px #1d1d1d;
    margin: 0px 0px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition-timing-function: ease;
    -webkit-transition-timing-function: ease;
  }
  #join-btn:hover{
    // transition: all 0.5s;
    // -webkit-transition: all 0.5s;
    transform: scale(1.08);
  }
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
