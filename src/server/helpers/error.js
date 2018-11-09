export default class APIError {
  constructor(params) {
    this.message = params.message;
    this.status = params.status || 500;
    this.stack = params.stack;
    this.errors = params.errors;
  }
}