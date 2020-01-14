<template>
  <div class="">
    <div class="home-navbar">
      <b-navbar class="navbar" toggleable="lg">
        <div class="container-fluid">
          <b-navbar-brand href="#">
            SpinMill
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />

          <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav>
              <b-nav-item href="#">
                Link
              </b-nav-item>
              <b-nav-item href="#" disabled>
                Disabled
              </b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form> -->
              <b-nav-item href="/register">
                <b-button id="btn-one">
                  Register
                </b-button>
              </b-nav-item>
              <b-nav-item href="/login">
                <b-button id="btn-two" size="sm">
                  Sign in
                </b-button>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavbar'
}
</script>

<style lang="scss" scoped>
.home-navbar{
  .navbar{
    background: transparent;
  }
  #btn-one{
    background: #FFD009;
    color: #282828;
    padding:10px 30px;
    font-size:20px;
    font-weight: 600;
    border-radius: 40px;
    border:2px solid #FFD009;
    box-shadow: 3px 4px 15px .5px #aca6a6;
    margin: 0px 0px;
  }
  #btn-two{
    background: transparent;
    color: #FFD009;
    border:2px solid #FFD009;
    padding:10px 30px;
    margin: 0px 0px 0px 20px;
    font-size:20px;
    font-weight: 600;
    border-radius: 40px;
    box-shadow: 3px 4px 15px .5px #aca6a6;
  }
}
</style>
