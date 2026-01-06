const filterFields = (data, allowedFields = []) => {
  var requestFields = Object.entries(data);
  var filteredFields = requestFields.filter(function ([key, value]) {
    return allowedFields.indexOf(key) > -1;
  });

  return Object.fromEntries(filteredFields);
};

export default filterFields;
