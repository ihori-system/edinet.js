const { EdinetClient } = require('..')

describe('xxx', () => {
  test('xxx', async () => {
    const client = new EdinetClient()
    const response = await client.getDocuments()
    console.log(response)
    expect(1).toEqual(1)
  })
})
