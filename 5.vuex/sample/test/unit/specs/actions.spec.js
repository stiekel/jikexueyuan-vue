import { expect } from 'chai'
const actionInjector = require('inject!../../../src/vuex/actions')

// 使用 mocks 创建外部模块

const actions = actionInjector({
  '../api/counter': {
    sendOnlineRequest (cb) {
      setTimeout(() => {
        return cb({cnt: 1})
      }, 100)
    }
  }
})

const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0
  // 模拟 dispatch
  const dispatch = (name, ...payload) => {
    const mutation = expectedMutations[count]

    expect(mutation.name).to.equal(name)

    if (mutation.payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }

    count++
    if (count >= expectedMutations.length) {
      return done()
    }
  }
  action({dispatch, state}, ...args)

  // 检查是否没有 dispatch 和 mutation
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  it('sendRequest', done => {
    testAction(
      actions.sendRequest,
      [],
      {},
      [
        {name: 'SEND_REQUEST'},
        {name: 'GOT_REQUEST', payload: [{cnt: 1}]}
      ],
      done
    )
  })
})
