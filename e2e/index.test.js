/* eslint-env jest */

const { EdinetClient } = require('..')

describe('findDocuments', () => {
  test('xxx', async () => {
    const client = new EdinetClient()
    const response = await client.findDocuments()
    console.log(response)
    expect(1).toEqual(1)
  })
})
