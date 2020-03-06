<template>
  <div class="row">
    <div class="columns-wrapper">
      <div class="account-details-wrapper">
        <h1 class="header">
          Account Information
        </h1>
        <div class="details">
          <label for="">Email</label>
          <p>agbomafestus@gmail.com</p>
        </div>
        <div class="details">
          <label for="">Phone</label>
          <p>08033237547</p>
        </div>
        <div class="details">
          <label for="">Address</label>
          <p>12, Ademola Street, Ogba Ikeja, Lagos</p>
        </div>
        <h1 class="header">
          Password
        </h1>
        <button v-b-modal.modal-center class="change-password-btn">
          Change Password
        </button>
        <b-modal id="modal-center" centered>
          <div class="">
            <h3 class="text-center my-0">
              Change Password
            </h3>
            <div class="forms">
              <b-form>
                <b-form-input
                  id="input-1"
                  type="text"
                  required
                  placeholder="Old Password"
                />
                <hr class="hr-custom">
                <b-form-input
                  id="input-1"
                  type="text"
                  required
                  placeholder="New Password"
                />
                <b-form-input
                  id="input-1"
                  type="text"
                  required
                  placeholder="Retype New Password"
                />
              </b-form>
              <div class="btn-wrapper">
                <span @click="$bvModal.hide('modal-center')" href="">Cancel</span>
                <a href="" class="btn">Change</a>
              </div>
            </div>
          </div>
        </b-modal>
        <!-- <button type="button" aria-label="Close" class="close">×</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.forms{
  padding: 30px;
  .hr-custom{
    background: #C0C0C0;
    padding: 1px;
    border-radius: 5px;
    width: 20%;
  }
  .btn-wrapper{
    display: flex;
    align-items: center;
    span{
      width: 30%;
      cursor: pointer;
      margin-right: auto;
      font-weight: 500;
      font-size: 20px;
    }
    .btn{
      width: 30%;
      background: #ffd009;
      font-size: 20px !important;
      font-weight: 500;
      margin-left: auto;
    }
  }
}
.form-control{
  padding: 30px;
  margin: 20px 0px;
}
.form-control:focus{
  color: #495057;
  background-color: #fff;
  border-color: #FFD009;
  outline: 0;
  box-shadow: none;
}
.columns-wrapper{
  position:relative;
  min-height:1px;
  padding-right:15px;
  padding-left:15px;
  width:40% !important;
  transition: all .5s;
  .account-details-wrapper{
    .header{
      color: #A6A1AE;
      margin: 25px 0px;
    }
    .details{
      width: 100%;
      display: flex;
      color: #f8f8f8;
      label{
        width: 30%;
        font-size: 25px;
      }
      p{
        width: 65%;
        font-size: 25px;
        font-weight: 300;
      }
    }
    .change-password-btn{
      background: #FFD009;
      border: 0px;
      font-size: 25px;
      padding: 10px 18px;
      border-radius: 5px;
      font-weight: 500;
    }
  }
}
@media only screen and (max-width: 768px) {
    .columns-wrapper{
        width:100% !important;
    }
    .details{
      label{
        width: 30%;
        font-size: 15px !important;
      }
      p{
        width: 65%;
        font-size: 15px !important;
        font-weight: 300;
      }
    }
    .change-password-btn{
      background: #FFD009;
      border: 0px;
      font-size: 15px !important;
      padding: 10px 18px;
      border-radius: 5px;
      font-weight: 500;
    }
    .forms{
      padding: 20px 10px;
      .btn-wrapper{
        display: flex;
        align-items: center;
        span{
          width: 30%;
          cursor: pointer;
          margin-right: auto;
          font-weight: 500;
          font-size: 15px;
        }
        .btn{
          width: 30%;
          background: #ffd009;
          font-size: 15px !important;
          font-weight: 500;
          margin-left: auto;
        }
      }
    }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) {
    .columns-wrapper{
        width:70% !important;
    }
}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
    .columns-wrapper{
        width:40% !important;
    }
}
</style>
