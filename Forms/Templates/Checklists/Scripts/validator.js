function validate(data) {
  const missing = [];
  for (const field in data) {
    if (data[field] === "" || data[field] === null) {
      missing.push(field);
    }
  }
  return missing;
}

module.exports = validate;
