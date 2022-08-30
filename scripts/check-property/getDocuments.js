const assert = require('assert')
const { EdinetClient } = require('../..')
const { sleep } = require('./utils')

const PROPERTIES = [
  'metadata',
  'results'
]

const METADATA_PROPERTIES = [
  'message',
  'parameter',
  'processDateTime',
  'resultset',
  'status',
  'title'
]

const RESULT_PROPERTIES = [
  'attachDocFlag',
  'currentReportReason',
  'disclosureStatus',
  'docDescription',
  'docID',
  'docInfoEditStatus',
  'docTypeCode',
  'edinetCode',
  'englishDocFlag',
  'filerName',
  'formCode',
  'fundCode',
  'issuerEdinetCode',
  'JCN',
  'opeDateTime',
  'ordinanceCode',
  'parentDocID',
  'pdfFlag',
  'periodEnd',
  'periodStart',
  'secCode',
  'seqNumber',
  'subjectEdinetCode',
  'submitDateTime',
  'subsidiaryEdinetCode',
  'withdrawalStatus',
  'xbrlFlag'
]

const client = new EdinetClient()

const START_DATE = new Date('2021-04-01')
const END_DATE = new Date('2021-04-10')

const main = async () => {
  // eslint-disable-next-line no-unmodified-loop-condition
  for (let targetDate = START_DATE; targetDate <= END_DATE; targetDate.setDate(targetDate.getDate() + 1)) {
    console.log(`[INFO] Request start. targetDate: ${targetDate.toISOString().split('T')[0]}`)
    const data = await client.getDocuments(targetDate.toISOString().split('T')[0], 2)
    console.log(`[INFO] Request end. targetDate: ${targetDate.toISOString().split('T')[0]}`)
    await sleep(1000)

    const diff = Object.keys(data).filter((k) => PROPERTIES.includes(k) === false)
    if (diff.length > 0) {
      console.log(data)
      console.log(diff)
    }
    assert.strictEqual(diff.length, 0)

    if (data.metadata != null) {
      const metadata = data.metadata

      const diff = Object.keys(metadata).filter((k) => METADATA_PROPERTIES.includes(k) === false)
      if (diff.length > 0) {
        console.log(metadata)
        console.log(diff)
      }
      assert.strictEqual(diff.length, 0)
    }

    if (data.results != null) {
      for (const result of data.results) {
        const diff = Object.keys(result).filter((k) => RESULT_PROPERTIES.includes(k) === false)
        if (diff.length > 0) {
          console.log(result)
          console.log(diff)
        }
        assert.strictEqual(diff.length, 0)
      }
    }
  }
}

main()
