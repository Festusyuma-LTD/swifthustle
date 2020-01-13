<template>
  <div class="">
    <homeNavbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <div class="content">
            <h1 id="intro-statement">
              Get <br><b>1000%</b><br>On registration
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
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
  components: {
    // Logo
    homeNavbar
  }
}
</script>

<style lang="scss" scoped>
.content{
  #intro-statement{
    color: #f8f8f8;
    font-size: 60px;
    b{
      color: #FFD009;
      font-size: 165px;
    }
  }
  #join-btn{
    background: #FFD009;
    color: #282828;
    padding:8px 50px;
    font-size:35px;
    font-weight: 600;
    border-radius: 40px;
    border:2px solid #FFD009;
    box-shadow: 3px 4px 15px .5px #aca6a6;
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
