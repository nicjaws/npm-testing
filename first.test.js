let myValue = 1;
function add(x, y) {
  return x + y;
}
test("First", () => {
  let myValue2 = 3;
  expect(add(2,3)).toBe(5);
  expect(add(4,5)).toBe(9);
})
