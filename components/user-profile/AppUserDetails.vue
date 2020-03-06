<template>
  <div class="row">
    <div class="columns-wrapper">
      <div class="userProfile-wrapper">
        <div class="userProfile-header">
          <div class="img-wrapper">
            <b-img v-bind="mainProps" rounded="circle" alt="Circle image" />
          </div>
          <div class="userProfiler-header-details">
            <div>
              <h2 class="username">
                Agboma Festus
              </h2>
              <p class="user-id">
                3636489AFX
              </p>
              <span class="edit-btn">Edit</span>
            </div>
          </div>
        </div>
        <div class="userProfile-details">
          <b-form>
            <div class="form-wrapper">
              <div class="input-label">
                <label for="">Gender</label>
              </div>
              <div class="input-wrapper">
                <b-form-radio-group
                  v-model="selected"
                  :options="options"
                  name="radio-inline"
                />
              </div>
            </div>
            <div class="form-wrapper">
              <div class="input-label">
                <label for="">Date of birth</label>
              </div>
              <div class="input-wrapper">
                <b-form-datepicker id="example-datepicker" class="mb-2" />
              </div>
            </div>
            <div class="form-wrapper">
              <div class="input-label">
                <label for="">Address</label>
              </div>
              <div class="input-wrapper">
                <b-form-input
                  id="input-1"
                  type="text"
                  required
                  placeholder=""
                />
              </div>
            </div>
            <div class="submit-btn-wrapper">
              <button class="submit-btn">
                Save Changes
              </button>
            </div>
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
      mainProps: { blank: true, blankColor: '#777', class: 'm1' },
      selected: 'first',
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ]
    }
  }
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
}
@media only screen and (max-width: 768px) {
    .columns-wrapper{
        width:100% !important;
    }
}
@media (max-width: 528px) {
  .username{
      transition: all .5s;
      font-size: 20px;
    }
    .img-wrapper img{
      height: 100px !important;
      width: 100px !important;
    }
}
@media (max-width: 428px) {
  .username{
      transition: all .5s;
      font-size: 16px;
    }
    .img-wrapper img{
      height: 70px !important;
      width: 70px !important;
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
.userProfile-wrapper{
  transition: all .5s;
  .userProfile-header{
    display: flex;
    .img-wrapper{
      width: 30%;
      padding: 15px;
      img{
        transition: all .5s;
        width: 100%;
        height: 100%;
      }
    }
    .userProfiler-header-details{
      padding: 15px;
      width: 60%;
      color: #f8f8f8;
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      .edit-btn{
        color: #FFD009;
        cursor: pointer;
      }
    }
  }
  .userProfile-details{
    border-top: 1px solid #f8f8f856;
    margin-top: 10px;
    padding: 20px 0px;
    .form-wrapper{
      display: flex;
      color: #f8f8f8;
      margin: 15px 0px;
      .input-label{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 30%;
      }
      .input-wrapper{
        width: 70%;
      }
    }
    .submit-btn-wrapper{
      text-align: right;
      .submit-btn{
        width: 150px;
        padding: 10px;
        border-radius: 5px;
        background: #FFD009;
        border: 0px;
        font-weight: 700;
      }
    }
  }
}
</style>
