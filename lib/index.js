const { request } = require("undici")

const API_VERSION = 'v1'

class EdinetClient {
  constructor() {}

  getDocuments(date, type) {
    return request(`https://disclosure.edinet-fsa.go.jp/api/${API_VERSION}/documents.json`, {
      query: {
        date,
        type
      }
    })
      .then(({ body }) => body.json())
  }
}

module.exports.EdinetClient = EdinetClient
