<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <p class="text-center">
          spin Mill
        </p>
        <b-form @reset="onReset">
          <b-form-group>
            <b-form-input
              v-model="loginData.email"
              class="input"
              type="email"
              required
              placeholder="E-mail or Phone number"
            />
          </b-form-group>

          <b-form-group>
            <b-form-input
              v-model="loginData.name"
              class="input"
              type="password"
              required
              placeholder="Password"
            />
          </b-form-group>
          <b-button id="submit-btn" type="submit">
            Log in
          </b-button>
        </b-form>
        <p class="text-center">
          New user? <a href="/register">Register here <i class="fas fa-arrow-right" /></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .input{
    padding: 26px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    // margin: 5px 0px;
  }
  .input:focus{
    color: #495057;
    background-color: #fff;
    border-color: #FFD009;
    outline: 0;
    box-shadow: none;
  }
  #submit-btn{
    width: 100%;
    padding: 10px;
    background: #FFD009;
    border :0px;
    color: #282828;
    font-weight: 700;
    font-size: 20px;
    margin: 10px 0px;
  }
  a{
    color: #FFD009;
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
</style>>

</style>
