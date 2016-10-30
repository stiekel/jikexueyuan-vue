const INCEREMENT = 'INCEREMENT'
import { DECEREMENT } from './mutation-types'
import { getOnlineCount } from '../api/counter'

export const decerement = (store) => {
  store.dispatch(DECEREMENT)
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
