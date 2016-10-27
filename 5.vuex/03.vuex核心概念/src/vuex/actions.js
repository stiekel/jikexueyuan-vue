const INCEREMENT = 'INCEREMENT'
import { DECEREMENT } from './mutation-types'

export const decerement = (store) => {
  store.dispatch(DECEREMENT)
}

export const incerement = ({dispatch}) => {
  setTimeout(() => dispatch(INCEREMENT), 1000)
}

export const incerementx = ({dispatch}, x) => {
  if (isNaN(x)) {
    x = Math.floor(Math.random() * 100)
  }
  dispatch('INCEREMENTX', x)
}
