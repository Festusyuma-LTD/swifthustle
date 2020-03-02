<template>
  <div>
    <div class="wrapper">
      <!-- Sidebar Holder -->
      <nav id="sidebar" v-bind:class="{ active: isActive }">
        <div class="sidebar-header">
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
      </nav>

      <!-- Page Content Holder -->
      <div id="content">
        <b-navbar :sticky="true" class="navbar">
          <button id="sidebarCollapse" v-bind:class="{ active: isActive }" @click="toggleClassActive" type="button" class="navbar-btn">
            <span />
            <span />
            <span />
          </button>

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
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClassActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
body {
    font-family: 'Poppins', sans-serif;
    background: #0D0024;
    overflow: hidden;
}
p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}
a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}
.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}
.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}
#sidebar {
    min-width: 300px;
    max-width: 300px;
    background: #331F4A;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
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
      }
      .card-links{
        padding: 0% 0% 0% 30%
      }
    }
}
#sidebar.active {
    margin-left: -300px;
    transform: rotateY(100deg);
}
#sidebar .sidebar-header {
    padding: 40px 40px 60px;
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

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */
#content {
  width: 100%;
  padding: 30px;
  min-height: 100vh;
  transition: all 0.3s;
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
    #sidebarCollapse {
      width: 40px;
      height: 40px;
      background: transparent;
      cursor: pointer;
    }
    #sidebarCollapse span {
      width: 80%;
      height: 2px;
      margin: 0 auto;
      display: block;
      background: #FFD00A;
      transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
      transition-delay: 0.2s;
    }
    #sidebarCollapse span:first-of-type {
      transform: rotate(45deg) translate(2px, 2px);
    }
    #sidebarCollapse span:nth-of-type(2) {
      opacity: 0;
    }
    #sidebarCollapse span:last-of-type {
      transform: rotate(-45deg) translate(1px, -1px);
    }
    #sidebarCollapse.active span {
      transform: none;
      opacity: 1;
      margin: 5px auto;
    }
  }
}
@media (max-width: 1024px){
  #sidebar {
        margin-left: -300px;
        transform: rotateY(90deg);
    }
    #sidebar.active {
        margin-left: 0;
        transform: none;
    }
    #sidebarCollapse span:first-of-type,
    #sidebarCollapse span:nth-of-type(2),
    #sidebarCollapse span:last-of-type {
        transform: none;
        opacity: 1;
        margin: 5px auto;
    }
    #sidebarCollapse.active span {
        margin: 0 auto;
    }
    #sidebarCollapse.active span:first-of-type {
        transform: rotate(45deg) translate(2px, 2px);
    }
    #sidebarCollapse.active span:nth-of-type(2) {
        opacity: 0;
    }
    #sidebarCollapse.active span:last-of-type {
        transform: rotate(-45deg) translate(1px, -1px);
    }
}
@media (max-width: 768px) {
    #content .navbar{
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
