<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 mx-auto text-center wallet-widget">
        <p>Wallet Balance</p>
        <b>&#8358; 20,000,000</b>
      </div>
    </div>
    <div class="withdraw-wrapper">
      <div class="row">
        <div class="col-md-5">
          <div>
            <h1 class="jumbo-header">
              Withdraw into your bank account
            </h1>
          </div>
        </div>
        <div class="withdrawalForm-wrapper">
          <AppWithdrawalForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppWithdrawalForm from '@/components/user-profile/AppWithdrawalForm.vue'
export default {
  components: {
    AppWithdrawalForm
  }
}
</script>

<style lang="scss" scoped>
.wallet-widget{
  border: 1px solid #ffd009;
  p{
    color: #f8f8f8;
    margin: 0px;
    font-weight: 100;
  }
  b{
    color: #ffd009;
    font-size: 30px;
  }
}
.withdraw-wrapper{
  padding: 20px;
  // .withdrawalForm-wrapper{
  //   padding: 0px 400px 0px 0px
  // }
}
.jumbo-header{
  font-size:80px;
  color: #f8f8f8;
}
.withdrawalForm-wrapper{
  position:relative;
  min-height:1px;
  padding-right:15px;
  padding-left:15px;
  width:40% !important;
  transition: all .5s;
}
@media only screen and (max-width: 768px) {
    .withdrawalForm-wrapper{
      width:100% !important;
    }
    .jumbo-header{
      font-size:30px;
      color: #f8f8f8;
    }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) {
    .withdrawalForm-wrapper{
      width:70% !important;
    }
    .jumbo-header{
      font-size:40px;
      color: #f8f8f8;
    }
}

// /* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .withdrawalForm-wrapper{
      width:100% !important;
    }
    .jumbo-header{
      font-size:30px;
      color: #f8f8f8;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
    .withdrawalForm-wrapper{
      width:40% !important;
    }
    .jumbo-header{
      font-size:60px;
      color: #f8f8f8;
    }
}
@media (min-width: 1360px) {
    .withdrawalForm-wrapper{
      width:40% !important;
    }
    .jumbo-header{
      font-size:80px;
      color: #f8f8f8;
    }
}
</style>
