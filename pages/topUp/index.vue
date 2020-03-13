<template>
  <div class="container-fluid">
    <div class="row">
      <div class="mx-auto text-center wallet-widget">
        <p>Wallet Balance</p>
        <b>&#8358; 20,000,000</b>
      </div>
    </div>
    <div class="previous-wrapper">
      <a href="/user-profile"><i class="fa fa-arrow-left" /> Profile</a>
    </div>
    <div class="withdraw-wrapper">
      <div class="row">
        <div class="col-md-5">
          <div>
            <h1 class="jumbo-header">
              Top Up <br> Wallet From
            </h1>
          </div>
        </div>
        <div class="withdrawalForm-wrapper">
          <AppTopUp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTopUp from '@/components/user-profile/AppTopUp.vue'
export default {
  components: {
    AppTopUp
  }
}
</script>

<style lang="scss" scoped>
.wallet-widget {
  border: 1px solid #f8f8f893;
  border-radius: 5px;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 30% !important;
  transition: all 0.5s;
  p {
    color: #f8f8f8;
    margin: 0px;
    font-weight: 100;
  }
  b {
    color: #ffd009;
    font-size: 30px;
  }
}
.withdraw-wrapper {
  padding: 20px;
  // .withdrawalForm-wrapper{
  //   padding: 0px 400px 0px 0px
  // }
}
.previous-wrapper {
  margin: 10px 0px;
  a {
    text-decoration: none;
    color: #f8f8f8;
  }
}
.jumbo-header {
  font-size: 80px;
  color: #f8f8f8;
}
.withdrawalForm-wrapper {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  width: 40% !important;
  transition: all 0.5s;
}
@media only screen and (max-width: 768px) {
  .withdrawalForm-wrapper {
    width: 100% !important;
  }
  .jumbo-header {
    font-size: 30px;
    color: #f8f8f8;
  }
  .wallet-widget {
    width: 100% !important;
  }
  .withdrawalForm-wrapper {
    padding: 0px !important;
  }
  .withdraw-wrapper {
    padding: 0px !important;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) {
  .withdrawalForm-wrapper {
    width: 70% !important;
  }
  .jumbo-header {
    font-size: 40px;
    color: #f8f8f8;
  }
}

// /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .withdrawalForm-wrapper {
    width: 100% !important;
  }
  .jumbo-header {
    font-size: 30px;
    color: #f8f8f8;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
  .withdrawalForm-wrapper {
    width: 40% !important;
  }
  .jumbo-header {
    font-size: 60px;
    color: #f8f8f8;
  }
  .wallet-widget {
    width: 20% !important;
  }
}
@media (min-width: 1360px) {
  .withdrawalForm-wrapper {
    width: 40% !important;
  }
  .jumbo-header {
    font-size: 80px;
    color: #f8f8f8;
  }
}
</style>
