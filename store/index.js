export const state = () => ({
  timeIsDone: false
})

export const mutations = {
  changeTimeIsDone (state) {
    state.timeIsDone = true
    console.log('stawwwww', state.timeIsDone)
  }
}
