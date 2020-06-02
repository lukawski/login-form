import signIn from "../signIn";

let mathCopy = Object.create(global.Math);
beforeAll(() => {
  global.Math.random = () => 0.4;
});

beforeEach(() => {
  fetchMock.resetMocks();
});

test("returns username data when sign in is successful", async () => {
  fetchMock.mockResponse(JSON.stringify({ username: "fake username" }));

  const [error, data] = await signIn({ email: "test", password: "test" });

  expect(error).toBeNull();
  expect(data?.username).toBe("fake username");
});

test("returns error data when sign in fails", async () => {
  fetchMock.mockReject();

  const [error, data] = await signIn({ email: "test", password: "test" });

  expect(data).toBeNull();
  expect(error).toEqual({
    status: 401,
    message: "The email/password combination used was not found on the system.",
  });
});

afterAll(() => {
  global.Math = mathCopy;
});
