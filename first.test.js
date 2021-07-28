let myValue = 1;
let name = "Christian";


test("First", () => {
  expect(myValue).toBe(1);
  expect(myValue).toEqual(1);

  expect(myValue).toBeGreaterThan(0);
  expect(name).toMatch(/Chris/);
})
