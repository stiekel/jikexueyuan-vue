const INCEREMENT = 'INCEREMENT'
import { DECEREMENT, SEND_REQUEST, GOT_REQUEST } from './mutation-types'
import { sendOnlineRequest, getOnlineCount } from '../api/counter'

export const decerement = (store) => {
  store.dispatch(DECEREMENT)
}

export const sendRequest = ({dispatch}) => {
  dispatch(SEND_REQUEST)
  sendOnlineRequest(rlt => {
    dispatch(GOT_REQUEST, rlt)
  })
}

export const incerement = ({dispatch}) => {
  getOnlineCount((err) => {
    if (err) return
    dispatch(INCEREMENT)
  })
}

export const incerementx = ({dispatch}, x) => {
  if (isNaN(x)) {
    x = Math.floor(Math.random() * 100)
  }
  dispatch('INCEREMENTX', x)
}
