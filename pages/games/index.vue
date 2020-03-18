<template>
  <div>
    <b-button-group>
      <b-button @click="previousThree">
        left
      </b-button>
      <b-button @click="nextThree">
        right
      </b-button>
    </b-button-group><br>
    <b-card-group deck>
      <b-card
        v-for="card in firstThreeBlocks"
        :key="card.id"
        :title="card.title"
        img-alt="Image"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ card.body }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
const testblock = [{
  id: 1,
  title: 'title one',
  body: 'one Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 2,
  title: 'title two',
  body: 'two Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 3,
  title: 'title three',
  body: 'three Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 4,
  title: 'title four',
  body: 'four Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 5,
  title: 'title five',
  body: 'five Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 6,
  title: 'title six',
  body: 'six Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 7,
  title: 'title seven',
  body: 'seven Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 8,
  title: 'title eight',
  body: 'eight Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 9,
  title: 'title nine',
  body: 'nine Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: 10,
  title: 'title Ten',
  body: 'Ten Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}]
export default {
  data () {
    return {
      testblock,
      totalPages: 0,
      firstThreeBlocks: []
    }
  },
  mounted () {
    this.showThreeCards()
  },
  methods: {
    previousThree (e) {
      // FIRST CHECK IF CURRENT INDEX NOT ZERO
      // if()
      this.showThreeCards('left')
      console.log(e)
    },
    nextThree (e) {
      this.showThreeCards('right')
      console.log(e)
    },
    showThreeCards (position) {
      // D E F I N E   T O T A L   P A G E S
      this.totalPages = Math.ceil(this.testblock.length / 3)
      // while (this.totalPages) {
      //   const newBlocks = this.testblock.splice(0, 3)
      //   console.log(newBlocks)
      // }
      // console.log(this.totalPages, 'this.totalPages')
      // let startIndex = 0
      // let endIndex = 3
      // if (position === 'left') {
      //   if (startIndex === 0) {
      //     startIndex = 0
      //     endIndex = 3
      //   } else {
      //     startIndex -= 3
      //     endIndex -= 3
      //   }
      // } else if (position === 'right') {
      //   startIndex += 3
      //   endIndex += 3
      // } else {
      //   startIndex = 0
      //   endIndex = 3
      // }
      // this.firstThreeBlocks = this.testblock.slice(startIndex, endIndex)
    }
  } }
</script>
