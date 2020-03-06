<template>
  <div>
    <div class="tabs">
      <b-nav tabs>
        <b-nav-item :active="$route.hash === '#personal' || $route.hash === ''" to="#personal">
          Personal
        </b-nav-item>
        <b-nav-item :active="$route.hash === '#wallet'" to="#wallet">
          Wallet
        </b-nav-item>
        <b-nav-item :active="$route.hash === '#accountDetails'" to="#accountDetails">
          Security
        </b-nav-item>
      </b-nav>
      <div class="tab-content">
        <div :class="['tab-pane', { 'active': $route.hash === '#personal' || $route.hash === '' }]" class="p-2">
          <AppUserDetails />
        </div>
        <div :class="['tab-pane', { 'active': $route.hash === '#wallet' }]" class="p-2">
          <AppUserWallet />
        </div>
        <div :class="['tab-pane', { 'active': $route.hash === '#accountDetails' }]" class="p-2">
          <AppUserSecurity />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserDetails from '@/components/user-profile/AppUserDetails.vue'
import AppUserWallet from '@/components/user-profile/AppUserWallet.vue'
import AppUserSecurity from '@/components/user-profile/AppUserSecurity.vue'
export default {
  components: {
    AppUserDetails,
    AppUserWallet,
    AppUserSecurity
  }

}
</script>

<style lang="scss" scoped>
.tabs .nav-tabs .mytab .nav-link:not(.active) {
    background-color: red !important;
  }

  .tabs .nav-tabs .nav-link {
    background-color: transparent !important;
  }
  .tabs .nav-tabs{
    background-color: transparent !important;
    border: 0px;
    border-bottom: 2px solid #fdfdfd34;
  }
  .tabs .nav-tabs .nav-link {
    background-color: transparent !important;
    color: #fdfdfda6;
  }
  .tabs .nav-tabs .nav-link.active {
    background-color: transparent !important;
    border: 0px;
    color: #FFD009;
    border-bottom: 3px solid #FFD009;
  }

  // .tab-content > .tab-pane {
  //   border: 1px solid;
  //   border-left: 0px none;
  // }
</style>
