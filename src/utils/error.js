class DatabaseError extends Error {
  constructor(additionalMessage) {
    super();

    this.statusCode = 500;
    this.message = `Internal Server Error with : ${additionalMessage}`;
  }
}

class ValidationError extends Error {
  constructor(arrayMessages) {
    super();

    this.statusCode = 400;
    this.message = arrayMessages;
  }
}

class AuthError extends Error {
  constructor() {
    super();

    this.statusCode = 401;
    this.message = "Authorization Failed";
  }
}

class ForbiddenError extends Error {
  constructor() {
    super();

    this.statusCode = 403;
    this.message = "Sorry, wrong address guys : Forbidden Request";
  }
}

export { DatabaseError, ValidationError, AuthError, ForbiddenError };
