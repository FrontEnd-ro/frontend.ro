/**
 * timestamp,
 * id,
 * position,
 * type,
 * body,
 * file_key
 */
class Feedbacks {
  private feedbacksArr: any[];

  private MonacoEditor: any;

  private timeoutId: any;

  constructor(MonacoEditor, feedbacksArr = []) {
    this.feedbacksArr = [];
    this.MonacoEditor = MonacoEditor;
    this.timeoutId = null;

    this.add(...feedbacksArr);
  }

  getAll() {
    return [...this.feedbacksArr];
  }

  getTypesByFileKey() {
    let result = {};

    // eslint-disable-next-line camelcase
    this.feedbacksArr.forEach(({ file_key, type }) => {
      result[file_key] = result[file_key] || [];
      if (!result[file_key].includes(type)) {
        result[file_key].push(type);
      }
    });

    return result;
  }

  get(idOrTimestamp) {
    return {

      ...this.feedbacksArr.find(
        (f) => f._id === idOrTimestamp || f.timestamp === idOrTimestamp,
      ),
    };
  }

  add(...feedbacks) {
    // eslint-disable-next-line no-param-reassign
    feedbacks = feedbacks.map((f) => ({
      timestamp: Date.now(),
      ...f,
      getDecorationData() {
        let data = { ...this };
        delete data.body;

        return data;
      },
    }));

    this.feedbacksArr.push(...feedbacks);

    return feedbacks;
  }

  delete(timestampOrId) {
    let indexToDelete = this.feedbacksArr.findIndex(
      (f) => f.timestamp === timestampOrId || f._id === timestampOrId,
    );
    if (indexToDelete >= 0) {
      this.MonacoEditor.unDecorate(this.feedbacksArr[indexToDelete].id);
      this.feedbacksArr.splice(indexToDelete, 1);
    }
  }

  changeType(timestamp, newType) {
    let f = this.feedbacksArr.find((f) => f.timestamp === timestamp);
    f.type = newType;

    this.MonacoEditor.unDecorate(timestamp);
    this.MonacoEditor.decorate(f.getDecorationData());
  }

  changeBody(timestamp, newBody) {
    let f = this.feedbacksArr.find((f) => f.timestamp === timestamp);
    f.body = newBody;
  }

  undecorateAll() {
    this.feedbacksArr.forEach((f) => this.MonacoEditor.unDecorate(f.timestamp));
  }
}

export default Feedbacks;
