class DatabaseError extends Error {
  constructor(additionalMessage) {
    super();

    this.statusCode = 500;
    this.message = `Internal Server Error with : ${additionalMessage}`;
  }
}

class ValidationError extends Error {
  constructor(additionalMessage) {
    super();

    this.statusCode = 400;
    this.message = `Validation Fail in your body request with : ${additionalMessage}`;
  }
}

class AuthError extends Error {
  constructor() {
    super();

    this.statusCode = 401;
    this.message = `Authorization Failed`;
  }
}

class ForbiddenError extends Error {
  constructor() {
    super();

    this.statusCode = 403;
    this.message = "Sorry, wrong address guys : Forbidden Request";
  }
}

module.exports = { DatabaseError, ValidationError, AuthError, ForbiddenError };
