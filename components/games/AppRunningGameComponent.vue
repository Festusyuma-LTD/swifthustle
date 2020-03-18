<template>
  <div>
    <no-ssr>
      <div class="stop_watch">
        <flip-countdown @timerEnded="startWheel" deadline="2020-03-18 18:03:00" />
      </div>
      <div class="wheel_class_wrapper animated bounce">
        <FortuneWheel
        :borderWidth="6"
        :usersAndPrizes="prizes"
        @onRotateStart="onRotateStart"
        @onRotateEnd="onRotateEnd"
        class="wheel_class"
        btn-width="100%"
        type="canvas"
      />
      </div>
    </no-ssr>
  </div>
</template>

<script>
import FlipCountdown from '@/components/games/FlipCountdown.vue'
import FortuneWheel from '@/components/games/AppGameWheel.vue'
export default {
  components: {
    FortuneWheel,
    FlipCountdown
  },
  data () {
    return {
      prizes: [
        {
          id: 1,
          name: 'dafom chollom',
          value: 'dafom',
          bgColor: '#692bdb',
          user: '',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 2,
          name: 'emaka ifunaya',
          value: 'emaka1',
          bgColor: '#2d0a70',
          user: '',
          color: '#ffffff',
          src: 'https://via.placeholder.com/200.png/09f/fff',
          probability: 100
        },
        {
          id: 3,
          name: 'emaka arinze',
          value: 'emaka2',
          user: '',
          bgColor: '#8903b2',
          color: '#ffffff',
          src: 'https://via.placeholder.com/50.png/09f/fff',
          probability: 0
        },
        {
          id: 4,
          name: 'emaka tope',
          value: 'emaka3',
          bgColor: '#081377',
          user: '',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 5,
          name: 'festus agboma',
          value: 'festus',
          user: 'user',
          bgColor: '#054789',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 6,
          name: 'festus1 chinedu',
          value: 'festus1',
          user: '',
          bgColor: '#fef151',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 7,
          name: 'festus2 peter',
          value: 'festus2',
          bgColor: '#f8e3f9',
          user: '',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 8,
          name: 'festus3 emmanuel',
          value: 'festus4',
          user: '',
          bgColor: '#fe3151',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 9,
          name: 'eestus4 esreal',
          value: 'festus4',
          user: '',
          bgColor: '#f8e3f9',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 10,
          name: 'kestus4 isreal',
          value: 'festus4',
          user: '',
          bgColor: '#f8e3f9',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 11,
          name: 'sestus4 isreal',
          value: 'ffestus4',
          user: '',
          bgColor: '#f8e3f9',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        },
        {
          id: 12,
          name: 'destus4 isreal',
          value: 'fdestus4',
          user: '',
          bgColor: '#f8e3f9',
          color: '#ffffff',
          src: 'https://via.placeholder.com/100.png/09f/fff',
          probability: 0
        }
      ]
    }
  },
  // computed: {
  //   timer () {
  //     console.log(this.$store.state.timer.timeIsDone, 'nigga')
  //     return this.$store.state.timer.timeIsDone
  //   }
  // },
  // watch: {
  //   timer: {
  //     handler (newVal, oldVal) {
  //       console.log(newVal, 'new')
  //       console.log(oldVal, 'old')
  //     },
  //     immediate: true,
  //     deep: true
  //   },

  // },
  mounted () {
    // this.getInitials()
  },
  methods: {
    onRotateStart () {
      console.log('onRotateStart')
    },
    onRotateEnd (prize) {
      alert(prize.value)
    },
    getRandomColor () {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    // start wheeel after timer ends
    startWheel () {

    }
  }

}
</script>

<style lang="scss" scoped>
.wheel_class_wrapper{
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  .wheel_class{
    width: 700px;
  }
}
.stop_watch{
  padding: 0px 0px 20px;
}
</style>
