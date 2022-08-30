export class EdinetClient {
  /**
   * 
   * @param date 出力対象とする提出書類一覧のファイル日付
   * @param type 取得情報<br />1: メタデータのみを取得します<br /> 2: 提出書類一覧及びメタデータを取得します。
   */
  findDocuments(date: Date, type: number): Promise<Object>
}
