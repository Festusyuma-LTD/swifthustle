<template>
  <div class="container-fluid">
    <h1 id="games-list-header">
      Live Games
    </h1>
    <div class="row">
      <div class="col-md-6 col-lg-4 my-2">
        <div class="games">
          <b-img src="@/assets/images/wheelcoins.png" fluid alt="Responsive image" />
          <h3 class="game-tile">
            10 for 50,000
          </h3>
          <p class="game-description">
            Play with 10 people and stand to win the chance to win 50,000
          </p>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 my-2">
        <div class="games">
          <b-img src="@/assets/images/wheelcoins.png" fluid alt="Responsive image" />
          <h3 class="game-tile">
            10 for 50,000
          </h3>
          <p class="game-description">
            Play with 10 people and stand to win the chance to win 50,000
          </p>
          <a href="" class="btn">Play</a>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 my-2">
        <div class="games">
          <b-img src="@/assets/images/wheelcoins.png" fluid alt="Responsive image" />
          <h3 class="game-tile">
            10 for 50,000
          </h3>
          <p class="game-description">
            Play with 10 people and stand to win the chance to win 50,000
          </p>
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
  .btn{
    background: #FFFFFF;
    padding: 5px 40px;
    border-radius: 30px;
  }
}
</style>
