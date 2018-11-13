import {INTERNAL_SERVER_ERROR} from '../helpers/errorTypes'

export default class APIError {
  constructor(params) {
    this.status = params.status || 500;
    this.type = params.type || INTERNAL_SERVER_ERROR;
    this.message = params.message;
    this.stack = params.stack;
    this.errors = params.errors;
  }
}