const requiredValidator = (body) => {
  let isFail = false;
  const messages = [];
  if (Object.keys(body).length === 0) {
    isFail = true;
    messages.push({
      field: "unknown",
      messages: `payload is empty`,
    });
  }
  if (Object.keys(body).length > 0) {
    for (const property in body) {
      if (Object.hasOwnProperty.call(body, property)) {
        const value = body[property];
        if (value === "" || value === undefined || value === null) {
          isFail = true;
          messages.push({
            field: property,
            messages: `${property} is required`,
          });
        }
      }
    }    
  }


  return {
    isFail,
    messages,
  };
};

export default { requiredValidator };
