<template>
  <div class="vue-fortuneWheel">
    <div
      ref="fortuneWheelBox"
      :style="fortuneWheelStyle"
      @transitionend="onRotateEnd"
      @webkitTransitionend="onRotateEnd"
      class="fortuneWheel-box"
    >
      <canvas
        ref="fortuneWheelCanvas"
        v-if="type === 'canvas'"
        :width="radius * 2"
        :height="radius * 2"
      />
      <slot v-else name="wheel" />
    </div>
    <div class="fortuneWheel-wrapper">
      <div class="btn-container">
        <div v-if="type === 'canvas'" :style="{ width: btnWidth, height: btnWidth}" class="fortuneWheel-btn">
          {{ btnText }}
        </div>
        <slot v-else name="button" />
      </div>
    </div>
  </div>
</template>

<script>
import { randomNum, sumBy } from '~/utils/number'
export default {
  name: 'FortuneWheel',
  props: {
    type: {
      type: String,
      default: 'canvas' // canvas || image
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 250
    },
    textRadius: {
      type: Number,
      default: 190
    },
    textLength: {
      type: Number,
      default: 6
    },
    lineHeight: {
      type: Number,
      default: 20
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    borderColor: {
      type: String,
      default: 'transparent'
    },
    btnText: {
      type: String,
      default: 'SpinMill'
    },
    btnWidth: {
      type: String,
      default: '170px'
    },
    fontSize: {
      type: Number,
      default: 34 // 奖品字号
    },
    duration: {
      type: Number,
      default: 6000
    },
    timingFun: {
      type: String,
      default: 'cubic-bezier(0.36, 0.95, 0.64, 1)'
    },
    angleBase: {
      type: Number,
      default: 10
    },
    prizeId: {
      type: Number,
      default: 0
    },
    usersAndPrizes: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isRotating: false,
      rotateEndDeg: 0,
      prizeRes: {},
      prizes: []
    }
  },
  computed: {
    // return timer from store
    timer () {
      // console.log(this.$store.state.timer.timeIsDone, 'nigga')
      return this.$store.state.timer.timeIsDone
    },
    // Probability of all prizes and
    probabilityTotal () {
      return sumBy(this.prizes, row => row.probability)
    },
    // Array of prize ids generated for probability
    prizesIdArr () {
      const idArr = []
      this.prizes.forEach((row) => {
        const count = Math.round(row.probability * this.decimalSpaces)
        const arr = (new Array(count)).fill(row.id)
        idArr.push(...arr)
      })
      return idArr
    },
    // Number of decimal places for prizes, up to 4 digits => ( 0: 1, 1: 10, 2: 100, 3: 1000, 4: 10000 )
    decimalSpaces () {
      const sortArr = [...this.prizes].sort((a, b) => {
        const aRes = String(a.probability).split('.')[1]
        const bRes = String(b.probability).split('.')[1]
        const aLen = aRes ? aRes.length : 0
        const bLen = bRes ? bRes.length : 0
        return bLen - aLen
      })
      const maxRes = String(sortArr[0].probability).split('.')[1]
      const idx = maxRes ? maxRes.length : 0
      return [1, 10, 100, 1000][idx > 4 ? 4 : idx]
    },
    // Duration of one rotation
    rotateDuration () {
      return this.isRotating ? this.duration / 1000 : 0
    },
    fortuneWheelStyle () {
      return {
        '-webkit-transform': `rotateZ(${this.rotateEndDeg}deg)`,
        'transform': `rotateZ(${this.rotateEndDeg}deg)`,
        '-webkit-transition-duration': `${this.rotateDuration}s`,
        'transition-duration': `${this.rotateDuration}s`,
        '-webkit-transition-timing-function:': this.timingFun,
        'transition-timing-function': this.timingFun
      }
    },
    rotateBase () {
      let angle = this.angleBase * 360
      if (this.angleBase < 0) { angle -= 360 }
      return angle
    },
    canRotate () {
      return !this.disabled && !this.isRotating && this.probabilityTotal === 100
    }
  },
  watch: {
    prizeId (newVal) {
      if (!this.isRotating) { return }
      let newAngle = this.getTargetDeg(newVal)
      if (this.angleBase < 0) { newAngle -= 360 }

      const prevEndDeg = this.rotateEndDeg
      let nowEndDeg = this.angleBase * 360 + newAngle
      const angle = 360 * (Math.floor((nowEndDeg - prevEndDeg) / 360))
      if (this.angleBase >= 0) {
        nowEndDeg += Math.abs(angle)
      } else {
        nowEndDeg += -360 - angle
      }
      this.rotateEndDeg = nowEndDeg
    },
    usersAndPrizes: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.prizes = newVal
        }
      },
      immediate: true,
      deep: true
    },
    timer: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.onRotateStart()
        }
      },
      immediate: true,
      deep: true
    }
  },
  created () {
    this.checkProbability()
  },
  mounted () {
    if (this.type === 'canvas') { this.drawCanvas() }
  },
  methods: {
    // Detect if the total probability 100
    checkProbability () {
      if (this.probabilityTotal !== 100) {
        console.error('Prizes Is Error: Sum of probabilities is not 100!')
        return false
      }
      return true
    },
    getRandomColor () {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    // draw canvas
    drawCanvas () {
      if (this.prizes.length > 0) {
        const canvas = this.$refs.fortuneWheelCanvas
        if (canvas.getContext) {
        // Calculate the circle angle based on the number of prizes
          const arc = Math.PI / (this.prizes.length / 2)
          const ctx = canvas.getContext('2d')
          // 在给定矩形内清空一个矩形
          ctx.clearRect(0, 0, this.radius * 2, this.radius * 2)
          // strokeStyle Sets or returns the color, gradient, or pattern used for the stroke
          ctx.strokeStyle = this.borderColor
          ctx.lineWidth = this.borderWidth * 2
          // font Property Sets or returns the current font properties of the text content on the canvas
          ctx.font = `${this.fontSize}px 'Baloo Chettan 2', cursive`
          if (this.prizes.length > 5) {
            this.prizes.forEach((row, i) => {
              const angle = i * arc - Math.PI / 2
              // ctx.strokeStyle = this.getRandomColor()
              ctx.strokeStyle = row.user === 'user' ? '#FFD700' : 'transparent'
              ctx.fillStyle = row.user === 'user' ? '#0d0024' : this.getRandomColor()
              ctx.beginPath()
              // arc(x, y, r, Start angle, end angle, drawing direction) method to create arc / curve (for creating circles or partial circles)
              ctx.arc(this.radius, this.radius, this.radius - this.borderWidth, angle, angle + arc, false)
              ctx.stroke()
              ctx.arc(this.radius, this.radius, 0, angle + arc, angle, true)
              ctx.fill()
              // Lock the canvas (to save the previous canvas state)
              ctx.save()
              // ---- Drawing the prizes ----
              ctx.fillStyle = row.color
              // translate Method remaps the (0, 0) position on the canvas
              ctx.translate(this.radius + Math.cos(angle + arc / 2) * this.textRadius, this.radius + Math.sin(angle + arc / 2) * this.textRadius)
              // rotate Method to rotate the current drawing
              ctx.rotate(angle + arc / 2 + Math.PI / 2)

              // getting initials here
              const initials = row.name.match(/\b\w/g) || []
              row.initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
              // if (row.initials) {
              ctx.fillText(row.initials, -ctx.measureText(row.initials).width / 2, this.lineHeight)
              // } else {
              //   ctx.fillText(row.initials, -ctx.measureText(row.initials).width / 2, this.lineHeight)
              // }
              ctx.restore()
            })
          } else {
            this.prizes.forEach((row, i) => {
              const angle = i * arc - Math.PI / 2
              ctx.fillStyle = row.bgColor
              ctx.beginPath()
              // arc(x, y, r, Start angle, end angle, drawing direction) method to create arc / curve (for creating circles or partial circles)
              ctx.arc(this.radius, this.radius, this.radius - this.borderWidth, angle, angle + arc, false)
              ctx.stroke()
              ctx.arc(this.radius, this.radius, 0, angle + arc, angle, true)
              ctx.fill()
              // Lock the canvas (to save the previous canvas state)
              ctx.save()
              // ---- Drawing the prizes ----
              ctx.fillStyle = row.color
              // translate Method remaps the (0, 0) position on the canvas
              ctx.translate(this.radius + Math.cos(angle + arc / 2) * this.textRadius, this.radius + Math.sin(angle + arc / 2) * this.textRadius)
              // rotate Method to rotate the current drawing
              ctx.rotate(angle + arc / 2 + Math.PI / 2)
              // The following code renders different effects based on the type of prize and the length of the prize name, such as font, color, and picture effects. (Specifically changed according to the actual situation)
              if (row.name.length > this.textLength) { // Prize name length exceeds a certain range
                const content = [row.name.substring(0, this.textLength), row.name.substring(this.textLength)]
                for (let j = 0; j < content.length; j++) {
                  ctx.fillText(content[j], -ctx.measureText(content[j]).width / 2, (j + 1) * this.lineHeight)
                }
              } else {
                // Draw filled text on the canvas. The default color of the text is black
                // The measureText () method returns an object containing the specified font width in pixels
                ctx.fillText(row.name, -ctx.measureText(row.name).width / 2, this.lineHeight)
              }
              // Returns (adjusts) the current canvas to the previous save () state
              ctx.restore()
              // ---- End of drawing prizes ----
            })
          }
        }
      }
    },
    // Start spinning
    onRotateStart () {
      if (!this.canRotate) { return }
      this.isRotating = true
      const prizeId = this.prizeId || this.getRandomPrize()
      this.rotateEndDeg = this.rotateBase + this.getTargetDeg(prizeId)
      this.$emit('onRotateStart')
    },
    // End spin
    onRotateEnd () {
      this.isRotating = false
      this.rotateEndDeg %= 360
      this.$emit('onRotateEnd', this.prizeRes)
    },
    // Get random prize id
    getRandomPrize () {
      const prizeId = this.prizesIdArr[randomNum(0, 100 * this.decimalSpaces - 1)]
      return prizeId
    },
    // The angle at which the prize was won
    getTargetDeg (prizeId) {
      const angle = 360 / this.prizes.length
      const num = this.prizes.findIndex(row => row.id === prizeId)
      this.prizeRes = this.prizes.filter(row => row.id === prizeId)[0] || []
      return 360 - (angle * num + angle / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-fortuneWheel {
  display: inline-block;
  position: relative;
  font-size: 0;
  overflow: hidden;
  user-select: none;
  max-width: 100%;
  &, * {
    box-sizing: border-box;
  }
}

.fortuneWheel-box {
  transition-property: transform;
  canvas, img {
    display: block;
    width: 100%;
  }
}
#id{
  opacity: 0px;
}
.fortuneWheel-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-container {
  position: absolute;
  // cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fortuneWheel-btn{
  position: relative;
  width: 100%;
  height: 100%;
  // background: rgb(241, 239, 239);
  border: 6px solid #000000;
  border-radius: 50%;
  background: #000000;
  color: #FFD009;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: Freestyle Script Regular;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after{
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 22px #000000 solid;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  &:before{
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 18px #000000 solid;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%) translateY(6px);
    z-index: 10;
  }
}
</style>
