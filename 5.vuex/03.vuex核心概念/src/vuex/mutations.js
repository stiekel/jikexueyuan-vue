import {INCEREMENT, INCEREMENTX, DECEREMENT, SEND_REQUEST, GOT_REQUEST, UPDATE_USER_NAME} from './mutation-types'

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
  },

  [UPDATE_USER_NAME] (state, name) {
    state.user.name = name
  }
}
