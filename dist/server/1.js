exports.ids = [1];
exports.modules = {

/***/ "./server/database.js":
/*!****************************!*\
  !*** ./server/database.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

function connectToDb() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    /** Early return - already connected */
    return Promise.resolve(mongoose);
  }

  return mongoose.connect(process.env.DB_CONNECT, {
    poolSize: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
}
/** Extract the first human-readable error message from a Mongoose ValidationError */


function extractDbErrorMessage(err) {
  if (err.errors) {
    const keys = Object.keys(err.errors);
    const firstKeyWithErrorMessage = keys.find(key => err.errors[key].message);

    if (firstKeyWithErrorMessage) {
      return err.errors[firstKeyWithErrorMessage].message;
    }
  }

  return err._message || 'Oops, something went wrong...';
}

module.exports = {
  connectToDb,
  extractDbErrorMessage
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZGF0YWJhc2UuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdFRvRGIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQl9DT05ORUNUIiwicG9vbFNpemUiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJleHRyYWN0RGJFcnJvck1lc3NhZ2UiLCJlcnIiLCJlcnJvcnMiLCJrZXlzIiwiT2JqZWN0IiwiZmlyc3RLZXlXaXRoRXJyb3JNZXNzYWdlIiwiZmluZCIsImtleSIsIm1lc3NhZ2UiLCJfbWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBeEI7O0FBRUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixNQUFJRixRQUFRLENBQUNHLFVBQVQsSUFBdUJILFFBQVEsQ0FBQ0csVUFBVCxDQUFvQkMsVUFBcEIsS0FBbUMsQ0FBOUQsRUFBaUU7QUFDL0Q7QUFDQSxXQUFPQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JOLFFBQWhCLENBQVA7QUFDRDs7QUFFRCxTQUFPQSxRQUFRLENBQUNPLE9BQVQsQ0FBaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE3QixFQUF5QztBQUM5Q0MsWUFBUSxFQUFFLENBRG9DO0FBRTlDQyxtQkFBZSxFQUFFLElBRjZCO0FBRzlDQyxzQkFBa0IsRUFBRSxJQUgwQjtBQUk5Q0Msb0JBQWdCLEVBQUUsS0FKNEI7QUFLOUNDLGtCQUFjLEVBQUU7QUFMOEIsR0FBekMsQ0FBUDtBQU9EO0FBRUQ7OztBQUNBLFNBQVNDLHFCQUFULENBQStCQyxHQUEvQixFQUFvQztBQUNsQyxNQUFJQSxHQUFHLENBQUNDLE1BQVIsRUFBZ0I7QUFDZCxVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRixHQUFHLENBQUNDLE1BQWhCLENBQWI7QUFDQSxVQUFNRyx3QkFBd0IsR0FBR0YsSUFBSSxDQUFDRyxJQUFMLENBQVdDLEdBQUQsSUFBU04sR0FBRyxDQUFDQyxNQUFKLENBQVdLLEdBQVgsRUFBZ0JDLE9BQW5DLENBQWpDOztBQUVBLFFBQUlILHdCQUFKLEVBQThCO0FBQzVCLGFBQU9KLEdBQUcsQ0FBQ0MsTUFBSixDQUFXRyx3QkFBWCxFQUFxQ0csT0FBNUM7QUFDRDtBQUNGOztBQUVELFNBQU9QLEdBQUcsQ0FBQ1EsUUFBSixJQUFnQiwrQkFBdkI7QUFDRDs7QUFFREMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2Z6QixhQURlO0FBRWZjO0FBRmUsQ0FBakIsQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5mdW5jdGlvbiBjb25uZWN0VG9EYigpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbiAmJiBtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgIC8qKiBFYXJseSByZXR1cm4gLSBhbHJlYWR5IGNvbm5lY3RlZCAqL1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtb25nb29zZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQl9DT05ORUNULCB7XHJcbiAgICBwb29sU2l6ZTogMSxcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKiBFeHRyYWN0IHRoZSBmaXJzdCBodW1hbi1yZWFkYWJsZSBlcnJvciBtZXNzYWdlIGZyb20gYSBNb25nb29zZSBWYWxpZGF0aW9uRXJyb3IgKi9cclxuZnVuY3Rpb24gZXh0cmFjdERiRXJyb3JNZXNzYWdlKGVycikge1xyXG4gIGlmIChlcnIuZXJyb3JzKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXJyLmVycm9ycyk7XHJcbiAgICBjb25zdCBmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UgPSBrZXlzLmZpbmQoKGtleSkgPT4gZXJyLmVycm9yc1trZXldLm1lc3NhZ2UpO1xyXG5cclxuICAgIGlmIChmaXJzdEtleVdpdGhFcnJvck1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIGVyci5lcnJvcnNbZmlyc3RLZXlXaXRoRXJyb3JNZXNzYWdlXS5tZXNzYWdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVyci5fbWVzc2FnZSB8fCAnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjb25uZWN0VG9EYixcclxuICBleHRyYWN0RGJFcnJvck1lc3NhZ2UsXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9