<template>
  <div>
    <FortuneWheel
      :borderWidth="6"
      :prizes="prizes"
      @onRotateStart="onRotateStart"
      @onRotateEnd="onRotateEnd"
      style="width: 500px"
      btn-width="100%"
      type="canvas"
    />
  </div>
</template>

<script>
import FortuneWheel from '@/components/games/AppGameWheel.vue'
export default {
  components: {
    FortuneWheel
  },
  data () {
    return {
      prizes: [
        {
          id: 1,
          name: 'dafom',
          value: 'dafom',
          bgColor: '#45ace9',
          color: '#ffffff',
          probability: 0
        },
        {
          id: 2,
          name: 'emaka',
          value: 'emaka',
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 100
        },
        {
          id: 2,
          name: 'emaka',
          value: 'emaka',
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 0
        },
        {
          id: 2,
          name: 'emaka',
          value: 'emaka',
          bgColor: '#dd3832',
          color: '#ffffff',
          probability: 0
        },
        {
          id: 3,
          name: 'festus',
          value: 'festus',
          bgColor: '#fef151',
          color: '#ffffff',
          probability: 0
        }
      ]
    }
  },
  methods: {
    onRotateStart () {
      console.log('onRotateStart')
    },
    onRotateEnd (prize) {
      alert(prize.value)
    }
  }

}
</script>

<style>

</style>
