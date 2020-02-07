const isEmpty = (value) => (
  typeof value === "number"
    ? value.length
    : "size" in value
    ? value.size
    : Object.keys(value).length
) === 0;

const isNil = (value) => value == null;

const isVoid = (value) => isNil(value) || isEmpty(value);

export {
  isEmpty,
  isNil,
  isVoid,
};
