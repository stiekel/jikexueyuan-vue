import { expect } from 'chai'
// import { describe, it } from 'mocha'

import mutations from '../../../src/vuex/mutations'

describe('mutations', () => {
  it('INCEREMENT', () => {
    const state = {count: 0}
    mutations.INCEREMENT(state)
    expect(state.count).to.equal(1)
  })
})
