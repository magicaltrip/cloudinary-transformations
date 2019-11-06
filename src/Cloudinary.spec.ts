import { Cloudinary } from "./index";

const cloudinary = new Cloudinary({ cloud_name: "demo" });

test("url", () => {
  const actual = cloudinary.url("cat");
  const expected = "https://res.cloudinary.com/demo/image/upload/cat";

  expect(actual).toEqual(expected);
});

test("video url", () => {
  const actual = cloudinary.video_url("dog");
  const expected = "https://res.cloudinary.com/demo/video/upload/dog";

  expect(actual).toEqual(expected);
});

test("width transformation", () => {
  const actual = cloudinary.url("cat", {
    width: 100
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/w_100/cat";

  expect(actual).toEqual(expected);
});

test("height transformation", () => {
  const actual = cloudinary.url("cat", {
    height: 120
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/h_120/cat";

  expect(actual).toEqual(expected);
});

test("crop transformation", () => {
  const actual = cloudinary.url("cat", {
    crop: "fill"
  });
  const expected = "https://res.cloudinary.com/demo/image/upload/c_fill/cat";

  expect(actual).toEqual(expected);
});

test("all transformations", () => {
  const actual = cloudinary.url("cat", {
    width: 200,
    height: 300,
    crop: "scale"
  });
  const expected =
    "https://res.cloudinary.com/demo/image/upload/w_200,h_300,c_scale/cat";

  expect(actual).toEqual(expected);
});
