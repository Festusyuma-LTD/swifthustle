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
          </ul>
        </div>
      </nav>
      <!-- Page Content Holder -->
      <div id="content">
        <b-navbar toggleable="lg" class="navbar">
          <button id="sidebarCollapse" v-bind:class="{ active: isActive }" @click="toggleClassActive" type="button" class="navbar-btn">
            <span />
            <span />
            <span />
          </button>

          <b-navbar-toggle target="nav-collapse" />

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#" disabled>
                Disabled
              </b-nav-item>
            </b-navbar-nav>
            <b-nav-item-dropdown right>
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
          </b-collapse>
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
    background: #fafafa;
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
/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
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
          font-size: 25px;
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
    // background: #6d7fcc;
}
// #sidebar ul.components {
//     padding: 20px 0;
//     border-bottom: 1px solid #47748b;
// }
// #sidebar ul p {
//     color: #f8f8f8;
//     padding: 10px;
// }
// #sidebar ul li a {
//     padding: 10px;
//     font-size: 1.1em;
//     display: block;
// }
// #sidebar ul li a:hover {
//     color: #7386D5;
//     background: #fff;
// }
// #sidebar ul li.active > a, a[aria-expanded="true"] {
//     color: #fff;
//     background: #6d7fcc;
// }
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
ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}
ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article, a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}

#content {
  width: 100%;
  padding: 0px;
  min-height: 100vh;
  transition: all 0.3s;
  background: #0D0024;
  .navbar{
    background :transparent ;
    color: #ddd;
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
@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
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
</style>
