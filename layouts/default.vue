<template>
  <div>
    <div v-bind:class="{ toggled: isToggled }" class="page-wrapper">
      <div id="show-sidebar" class="btn btn-sm btn-dark">
        <i @click="toggleClassActive" class="fas fa-bars" />
      </div>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <div class="sidebar-header">
            <div id="close-sidebar">
              <i @click="toggleClassActive" class="fas fa-times" />
            </div>
            <h3 class="logo">
              Spin Mill
            </h3>
          </div>
          <div class="">
            <ul class="list-unstyled sideNav-content-wrapper">
              <li class="sidebar-contents">
                <a href=""><img src="@/assets/images/Dashboard.svg" alt=""> <span>Home</span></a>
              </li>
              <li class="sidebar-contents">
                <a v-b-toggle.accordion-1 block href="#" variant="info"><img src="@/assets/images/wheel-icon.svg" alt=""> <span>Games</span> <i class="fas fa-chevron-down" /></a>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel" class="collapse-sidebar-links">
                  <b-card-body>
                    <b-card-text class="card-links">
                      <a href=""> Won</a>
                    </b-card-text>
                    <b-card-text class="card-links">
                      <a href="">Previous</a>
                    </b-card-text>
                    <b-card-text class="card-links">
                      <a href="">Available</a>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </li>
              <li class="sidebar-contents d-block d-md-none">
                <a href=""><img src="@/assets/images/Dashboard.svg" alt=""> <span class="text-nowrap">Load Wallet</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- sidebar-wrapper  -->
      <main class="page-content">
        <div class="container-fluid">
          <b-navbar class="navbar">
            <!-- <button id="sidebarCollapse" v-bind:class="{ active: isActive }" @click="toggleClassActive" type="button" class="navbar-btn">
              <span />
              <span />
              <span />
            </button> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" class="my-auto">
                <div class="wallet-wrapper">
                  <i class="fa fa-wallet" />
                  <div class="wallet-details">
                    <div id="wallet">
                      <b>Wallet</b> <p>&#8358;10,000,000</p>
                    </div>
                    <div><b>Bonus</b> <p>&#8358;20,000</p> </div>
                  </div>
                </div>
              </b-nav-item>
              <b-nav-item href="#" class="my-auto">
                <a href="" class="btn load-wallet-btn">Load Wallet</a>
              </b-nav-item>
              <b-nav-item-dropdown class="my-auto" right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <img
                    src="@/assets/images/dafom.jpg"
                    class="user-img"
                    height="50"
                    width="50"
                    style="border-radius: 50%"
                    alt="profile-image"
                  >
                </template>
                <b-dropdown-item href="#">
                  Profile
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  Sign Out
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
          <div class="body">
            <nuxt />
          </div>
        </div>
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isToggled: false,
      windowWidth: 0,
      windowHeight: 0
    }
  },
  watch: {
    windowWidth: {
      handler (newData, oldata) {
        if (newData >= 1024) {
          this.isToggled = true
        } else if (newData < 1024) {
          this.isToggled = false
        }
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    },
    toggleClassActive () {
      this.isToggled = !this.isToggled
    }
  }
}
</script>

<style lang="scss">
.page-wrapper .sidebar-wrapper,
.sidebar-wrapper .sidebar-brand > a,
.sidebar-wrapper .sidebar-dropdown > a:after,
.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,
.sidebar-wrapper ul li a i,
.page-wrapper .page-content,
.sidebar-wrapper .sidebar-search input.search-menu,
.sidebar-wrapper .sidebar-search .input-group-text,
.sidebar-wrapper .sidebar-menu ul li a,
#show-sidebar,
#close-sidebar {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.page-content{
  background: #0D0024;
  .navbar{
    background :transparent ;
    color: #ddd;
    .wallet-wrapper{
      display: flex;
      width: 300px;
      i {
        font-size: 55px;
        margin-right: 10px;
        width: 55px;
        color: #FFD009;
      }
      .wallet-details{
        width: 190px;
        div{
          margin: 0px;
          padding: 0px;
          font-size: 14px;
          width: 100%;
          display: flex;
          color: #f8f8f8;
          b{
            width: 40%;
          }
          p{
            width: 70%;
            margin: 0%;
            color: #f8f8f8;
          }
        }
        #wallet{
          color: #FFD009;
          font-size: 18px;
          p{
            color: #FFD009;
          }
        }
      }
    }
    .load-wallet-btn{
      border: 1px solid #FFD009;
      border-radius: 25px;
      padding: 8px 20px;
      background: transparent;
      color: #f8f8f8;
    }
  }
}
/*----------------page-wrapper----------------*/

.page-wrapper {
  height: 100vh;
  background: #0D0024;
}

.page-wrapper.toggled .sidebar-wrapper {
  left: 0px;
}

@media screen and (min-width: 1024px) {
  .page-wrapper.toggled .page-content {
    padding-left: 300px;
  }
}
#show-sidebar {
  position: fixed;
  left: 0;
  top: 10px;
  border-radius: 0 4px 4px 0px;
  width: 35px;
  transition-delay: 0.3s;
  z-index: 1;
}
.page-wrapper.toggled #show-sidebar {
  left: -40px;
}

.sidebar-wrapper {
  width: 260px;
  height: 100%;
  max-height: 100%;
  position: fixed;
  top: 0;
  left: -300px;
  z-index: 999;
  background: #331F4A;
  .sidebar-header {
    padding: 20px;
    overflow: hidden;
    #close-sidebar {
      cursor: pointer;
      font-size: 20px;
      color: #FFD00A;
      text-align: right;
    }
    .logo{
      text-align: center !important;
      font-family: Freestyle Script Regular;
      font-size: 60px;
      font-weight:600;
      letter-spacing: 0;
      color: #FFD00A;
      opacity: 1;
      margin: 10px 0px !important;
    }
  }
  .sideNav-content-wrapper{
      padding: 0% 15%;
      .sidebar-contents{
        color: #847795;
        // padding: 15%;
        margin: 15px 0px;
        span{
          font-size: 20px;
          padding: 0% 10% 0%;
          // margin-top: 10px;
        }
        i{
          font-size: 20px;
        }
        a{
          color: #f8f8f8;
          text-decoration: none;
        }
        a:hover{
          color: #FFD00A;
          text-decoration: none;
        }
      }
      .card-links{
        padding: 0% 0% 0% 30%;
        a{
          color: #f8f8f8;
          text-decoration: none;
        }
        a:hover{
          color: #FFD00A;
          text-decoration: none;
        }
      }
    }
}
.sidebar-content {
  max-height: calc(100% - 30px);
  height: calc(100% - 30px);
  overflow-y: auto;
  position: relative;
}

.sidebar-content.desktop {
  overflow-y: hidden;
}

::-webkit-scrollbar {
  width: 5px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #331F4A;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #0D0024;
}
::-webkit-scrollbar-thumb:active {
  background: #0D0024;
}
::-webkit-scrollbar-track {
  background: transparent;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: transparent;
}
::-webkit-scrollbar-track:active {
  background: transparent;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
@media (max-width: 768px) {
    .page-content .navbar{
      .wallet-wrapper{
      display: flex;
      width: 200px;
      i {
        font-size: 35px;
        margin-right: 10px;
        width: 35px;
        color: #FFD009;
      }
      .wallet-details{
        width: 155px;
        div{
          margin: 0px;
          padding: 0px;
          font-size: 10px;
          width: 100%;
          display: flex;
          color: #f8f8f8;
          b{
            width: 40%;
          }
          p{
            width: 70%;
            margin: 0%;
            color: #f8f8f8;
          }
        }
        #wallet{
          color: #FFD009;
          font-size: 14px;
          p{
            color: #FFD009;
          }
        }
      }
    }
    .load-wallet-btn{
      border: 1px solid #FFD009;
      border-radius: 25px;
      padding: 4px 10px;
      background: transparent;
      color: #f8f8f8;
      display: none;
    }
    }
}
</style>
