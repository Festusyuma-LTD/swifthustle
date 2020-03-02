<template>
  <div class="container-fluid">
    <h2 id="games-list-header">
      10,000 for 50,000
    </h2>
    <div class="row">
      <div class="columns my-2">
        <div class="games">
          <b-img src="@/assets/images/wheel.svg" class="game-img" fluid alt="Responsive image" />
          <div class="game-details">
            <h3 class="game-tile">
              10 for 50,000
            </h3>
            <p class="game-description">
              Play with 10 people and stand to win the chance to win 50,000
            </p>
          </div>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="columns my-2">
        <div class="games">
          <b-img src="@/assets/images/wheel.svg" class="game-img" fluid alt="Responsive image" />
          <div class="game-details">
            <h3 class="game-tile">
              10 for 50,000
            </h3>
            <p class="game-description">
              Play with 10 people and stand to win the chance to win 50,000
            </p>
          </div>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="columns my-2">
        <div class="games">
          <b-img src="@/assets/images/wheel.svg" class="game-img" fluid alt="Responsive image" />
          <div class="game-details">
            <h3 class="game-tile">
              10 for 50,000
            </h3>
            <p class="game-description">
              Play with 10 people and stand to win the chance to win 50,000
            </p>
          </div>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="columns my-2">
        <div class="games">
          <b-img src="@/assets/images/wheel.svg" class="game-img" fluid alt="Responsive image" />
          <div class="game-details">
            <h3 class="game-tile">
              10 for 50,000
            </h3>
            <p class="game-description">
              Play with 10 people and stand to win the chance to win 50,000
            </p>
          </div>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="columns my-2">
        <div class="games">
          <b-img src="@/assets/images/wheel.svg" class="game-img" fluid alt="Responsive image" />
          <div class="game-details">
            <h3 class="game-tile">
              10 for 50,0000
            </h3>
            <p class="game-description">
              Play with 10 people and stand to win the chance to win 50,000
            </p>
          </div>
          <a href="" class="btn">Play</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#games-list-header{
  color: #f8f8f8;
  margin-bottom: 30px;
}
.games {
  padding: 30px;
  border-radius: 15px;
  background: #77b3f7;
  overflow: hidden;
  position: relative;
  color: #f8f8f8;
  .game-img{
      position: absolute;
      right: -20%;
      top: 0;
      z-index: 0 !important;
      height: 50%;
      width: 50%;
  }
//   .game-details{
//       z-index: 0 !important;
//   }
  .btn{
    background: #FFFFFF;
    padding: 5px 40px;
    border-radius: 30px;
  }
}
.columns{
    position:relative;
    min-height:1px;
    padding-right:15px;
    padding-left:15px;
    width:20% !important;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 768px) {
    .columns{
        width:100% !important;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media (min-width: 768px) {
    .columns{
        width:50% !important;
    }
}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media (min-width: 1200px) {
    .columns{
        width:25% !important;
    }
}
</style>
