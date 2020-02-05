const and = (left, right) => (value) => left(value) && right(value);
const or = (left, right) => (value) => left(value) || right(value);

const isEmpty = (value) => (
  typeof value === "number"
    ? value.length
    : "size" in value
    ? value.size
    : Object.keys(value).length
) === 0;

const isNil = (value) => value == null;

const isVoid = or(isNil, isEmpty);

export {
  isEmpty,
  isNil,
  isVoid,
};