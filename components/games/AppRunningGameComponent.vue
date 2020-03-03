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
          id: 1, //* 每个奖品唯一的 id, 大于 0 的整数
          name: 'dafom', // 奖品名, type 为 canvas 时的显示值 (type 为 image 时无需此参数)
          value: 'dafom', //* 奖品值, 旋转结束后的返回值
          bgColor: '#45ace9', // 背景色 (type 为 image 时无需此参数)
          color: '#ffffff', // 字体色 (type 为 image 时无需此参数)
          probability: 0 //* 概率，最多保留 4 位小数 （所有奖品的概率和必须为 100）
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
