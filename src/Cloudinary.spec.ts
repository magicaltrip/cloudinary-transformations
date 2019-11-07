import { Cloudinary } from "./index";

const cloudinary = new Cloudinary({ cloud_name: "demo" });

test("url", () => {
  const actual = cloudinary.url("cat");
  const expected = "https://res.cloudinary.com/demo/image/upload/v1/cat";

  expect(actual).toEqual(expected);
});

test("video url", () => {
  const actual = cloudinary.video_url("dog");
  const expected = "https://res.cloudinary.com/demo/video/upload/v1/dog";

  expect(actual).toEqual(expected);
});

test("width transformation", () => {
  const actual = cloudinary.url("cat", {
    width: 100
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/w_100/v1/cat";

  expect(actual).toEqual(expected);
});

test("height transformation", () => {
  const actual = cloudinary.url("cat", {
    height: 120
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/h_120/v1/cat";

  expect(actual).toEqual(expected);
});

test("crop transformation", () => {
  const actual = cloudinary.url("cat", {
    crop: "fill"
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/c_fill/v1/cat";

  expect(actual).toEqual(expected);
});

test("fetch_format transformation", () => {
  const actual = cloudinary.url("cat", {
    fetch_format: "auto"
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/f_auto/v1/cat";

  expect(actual).toEqual(expected);
});

test("all transformations", () => {
  const actual = cloudinary.url("cat", {
    width: 200,
    height: 300,
    crop: "scale",
    fetch_format: "auto"
  });
  const expected =
    "https://res.cloudinary.com/demo/image/upload/c_scale,f_auto,h_300,w_200/v1/cat";

  expect(actual).toEqual(expected);
});
