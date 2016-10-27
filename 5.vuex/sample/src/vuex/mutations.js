import {INCEREMENT, INCEREMENTX, DECEREMENT} from './mutation-types'

export default {
  [INCEREMENT] (state) {
    state.count++
  },

  [INCEREMENTX] (state, x) {
    state.count += x
  },

  [DECEREMENT] (state) {
    state.count--
  }
}
