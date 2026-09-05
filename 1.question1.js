function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return `${type} | ${truthiness}`;
}console.log(describeValue(5));