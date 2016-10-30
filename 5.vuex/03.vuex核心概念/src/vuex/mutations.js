import {INCEREMENT, INCEREMENTX, DECEREMENT, SEND_REQUEST, GOT_REQUEST} from './mutation-types'

export default {
  [INCEREMENT] (state) {
    state.count++
  },

  [SEND_REQUEST] (state) {
    state.isRequesting = true
  },

  [GOT_REQUEST] (state) {
    state.isRequesting = false
  },

  [INCEREMENTX] (state, x) {
    state.count += x
  },

  [DECEREMENT] (state) {
    state.count--
  }
}
