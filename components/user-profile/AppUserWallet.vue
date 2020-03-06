<template>
  <div class="row">
    <div class="columns-wrapper">
      <div class="userWalletDetails-wrapper">
        <h1 class="header">
          Balance
        </h1>
        <div class="userWalletDetails">
          <div class="main-balance details-wrapper">
            <h3>Main balance</h3>
            <b>&#8358; 20,000,000</b>
          </div>
          <div class="bonus details-wrapper">
            <h3>Main balance</h3>
            <b>&#8358; 20,000</b>
          </div>
        </div>
        <div class="btn-wrapper">
          <a href="" class="btn btn-credit-wallet"><i class="fa fa-plus-circle" /> Credit wallet</a>
        </div>
      </div>
      <div class="userBankDetails-wrapper">
        <h1 class="header">
          Make withdrawal
        </h1>
        <div class="userBankDetails">
          <div class="main-balance details-wrapper">
            <h3>FCMB Bank</h3>
            <b>6012397546</b>
            <p>Agboma Festus</p>
          </div>
          <div class="bonus details-wrapper">
            <h3>First Bank</h3>
            <b>30193274328</b>
            <p>Agboma Festus</p>
          </div>
        </div>
        <div class="btn-wrapper">
          <a href="" class="btn btn-credit-wallet"><i class="fa fa-plus" /> Add Account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.columns-wrapper{
  position:relative;
  min-height:1px;
  padding-right:15px;
  padding-left:15px;
  width:40% !important;
  transition: all .5s;
  .userWalletDetails-wrapper{
    .header{
      color: #f8f8f8;
      margin-top: 25px;
    }
    .btn-wrapper{
      text-align: right;
      .btn-credit-wallet{
        background: #FFD009;
        font-size: 20px;
      }
    }
    .userWalletDetails{
      margin: 30px 0px;
      display: flex;
      .details-wrapper{
        width: 48%;
        border-radius: 5px;
        padding: 35px 25px;
        h3{
          font-size: 15px;
          padding: 0px;
          margin: 0px;
        }
        b{
          font-size: 25px;
        }
      }
      .main-balance{
        margin-right: auto;
        background: white;
        background-image: url('~assets/images/walletImageBlue.png');
        background-repeat: no-repeat;
        background-position: bottom right;
      }
      .bonus{
        margin-left: auto;
        background: #E5DEED;
        background-image: url('~assets/images/walletImageGray.png');
        background-repeat: no-repeat;
        background-position: bottom right;
      }
    }
  }
  .userBankDetails-wrapper{
    .header{
      color: #f8f8f8;
      margin-top: 25px;
    }
    .btn-wrapper{
      text-align: left;
      .btn-credit-wallet{
        border: 1px solid #FFD009;
        color: #FFD009;
        font-size: 20px;
      }
      .btn-credit-wallet:hover{
        background: #FFD009;
        color: #f8f8f8;
      }
    }
    .userBankDetails{
      margin: 30px 0px;
      display: flex;
      .details-wrapper{
        width: 48%;
        padding: 35px 25px;
        background: #77B2F6;
        color: #f8f8f8;
        margin: 10px;
        border-radius: 5px;
        h3{
          font-size: 15px;
          padding: 0px;
          margin: 0px;
          font-weight: 100;
        }
        b{
          font-size: 25px;
        }
      }
    }
  }
}
@media only screen and (max-width: 368px) {
    .columns-wrapper{
        width:100% !important;
    }
    .userBankDetails{
      display: block !important;
      .details-wrapper{
        width: 100% !important;
        margin: 10px 0px;
        h3{
          font-size: 9px !important;
        }
        b{
          font-size: 10px !important;
        }
      }
    }
    .userWalletDetails{
      display: block !important;
      .details-wrapper{
        width: 100% !important;
        margin: 10px 0px;
        h3{
          font-size: 15px !important;
        }
        b{
          font-size: 20px !important;
        }
      }
    }
}
@media only screen and (max-width: 520px) {
    .columns-wrapper{
      width:100% !important;
    }
    .userBankDetails{
      .details-wrapper{
        h3{
          font-size: 13px !important;
        }
        b{
          font-size: 15px !important;
        }
      }
    }
    .details-wrapper{
      h3{
        font-size: 13px !important;
      }
      b{
        font-size: 15px !important;
      }
    }
}
@media only screen and (max-width: 768px) {
    .columns-wrapper{
        width:100% !important;
    }
}

@media (min-width: 768px) {
    .columns-wrapper{
        width:70% !important;
    }
}

@media (min-width: 1200px) {
    .columns-wrapper{
        width:40% !important;
    }
}
</style>
