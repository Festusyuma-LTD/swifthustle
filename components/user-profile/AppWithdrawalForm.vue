<template>
  <div class="withdrawal-form-wrapper">
    <b-form @reset="onReset" style="width:100%">
      <b-form-group style="border:0px; margin: 25px 0px;">
        <span class="custom-label">Amount</span>
        <b-form-input
          class="input"
          type="text"
          required
          placeholder="Amount"
        />
      </b-form-group>
      <b-form-group style="border:0px; margin: 25px 0px;">
        <b-form-input
          v-model="form.account"
          class="input"
          type="number"
          required
          placeholder="Account Number"
        />
      </b-form-group>
      <b-form-group style="border:0px; margin: 25px 0px;">
        <b-form-select
          v-model="form.account"
          class="input"
          required
          placeholder="Bank"
        />
      </b-form-group>
      <b-button id="submit-btn" type="submit">
        Withdraw <i class="fas fa-chevron-right" />
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.withdrawal-form-wrapper{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    #form-text{
      font-family: 'Nunito Sans', sans-serif;
      font-size: 25px;
    }
    .custom-label{
      background: #282828;
      position: relative;
      top: 15px;
      left: 20px;
      padding: 5px 5px;
      font-weight: 500;
      font-size: 12px;
      color: #fff;
    }
    .input{
      padding:30px 30px;
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
</style>
