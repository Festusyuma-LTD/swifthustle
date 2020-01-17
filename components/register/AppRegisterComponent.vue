<template>
  <div class="container-fluid" style="height:100vh">
    <div class="row register-container" align-h="between">
      <div class="col-md-6 mx-auto mr-0">
        <div class="image-container">
          <h1 class="logo">
            SpinMill
          </h1>
          <p class="text">
            Join the Winners
          </p>
        </div>
        <!-- <b-img src="@/assets/images/register.png" class="" alt="" /> -->
      </div>
      <div class="col-md-5 mx-auto">
        <div class="login-btn-wrapper">
          <a href="/login" class="btn btn-lg mt-4">Log in</a>
        </div>
        <div class="register-forms mx-auto">
          <b-form @reset="onReset" style="width:100%">
            <div id="form-header">
              <h1 id="header">
                Sign Up
              </h1>
              <hr id="hr-1">
            </div>
            <p id="form-text">
              Kindly fill our your details in the appropriate fields below
            </p>
            <b-form-group style="border:0px">
              <span class="custom-label">First Name</span>
              <b-form-input
                v-model="registerPayload.firstName"
                class="input"
                type="password"
                required
                placeholder="Password"
              />
            </b-form-group>
            <b-form-group style="border:0px">
              <span class="custom-label">Last Name</span>
              <b-form-input
                v-model="registerPayload.lastName"
                class="input"
                type="password"
                required
                placeholder="Password"
              />
            </b-form-group>
            <b-form-group style="border:0px">
              <span class="custom-label">E-mail</span>
              <b-form-input
                v-model="registerPayload.lastName"
                class="input"
                type="password"
                required
                placeholder="Password"
              />
            </b-form-group>
            <b-form-group style="border:0px">
              <span class="custom-label">Phone Number</span>
              <b-form-input
                v-model="registerPayload.lastName"
                class="input"
                type="password"
                required
                placeholder="Password"
              />
            </b-form-group>
            <b-button id="submit-btn" type="submit">
              Sign up
            </b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      registerPayload: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');
.register-container{
  margin: 0px 40px;
  .col-md-6{
    height: 100vh;
    .image-container{
      width: 90%;
      padding: 70px 100px;
      height: 100vh;
      background-image: url('~assets/images/register.png');
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
      .text{
        text-align: right;
        font-family: Freestyle Script Regular;
        font-size: 110px;
        font-weight:400;
        letter-spacing: 0;
        color: #FFD00A;
        opacity: 1;
        // padding-right: 10px;
      }
    }
  }
  .login-btn-wrapper{
    // width: 100%;
    .btn{
      float: right;
      border: 2px solid #1D0B3D;
      color: #000;
    }
  }
  .register-forms{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    #form-header{
      font-size:40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-items: left;
      width: 100%;
      #header{
        width:100%;
        font-family: 'Nunito Sans', sans-serif;
      }
      #hr-1{
        width: 170px;
        padding: 4px;
        margin: 0px;
        background-color: #FFD009;
        border-radius: 50px;
      }
    }
    #form-text{
      font-family: 'Nunito Sans', sans-serif;
      font-size: 25px;
    }
    .custom-label{
      background: #fff;
      position: relative;
      top: 14px;
      left: 15px;
      padding: 10px 15px;
      font-weight: 500;
      font-size: 20px;
    }
    .input{
      padding:50px 30px;
      border: 2px solid #ced4da;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
      transition-timing-function: ease;
      -webkit-transition-timing-function: ease;
    }
    .input:focus{
      color: #495057;
      background-color: #fff;
      border-color: #FFD009;
      outline: 0;
      box-shadow: none;
    }
  }
  #submit-btn{
    width: 100%;
    font-size:35px;
    background: #FFD009;
    border-color: #FFD009;
    color: #000;
    font-weight: 400;
    padding: 7px;
    margin-top: 5px;
  }
}
</style>
