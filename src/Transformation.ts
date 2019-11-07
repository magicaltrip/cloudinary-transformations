export namespace Transformation {
  interface MediaOptions {
    width?: number;
    height?: number;
    crop?: "fill" | "scale";
    fetch_format?: "auto";
  }

  export interface ImageOptions extends MediaOptions {}

  export interface VideoOptions extends MediaOptions {
    duration?: number;
  }

  export type Options = VideoOptions | ImageOptions;
}

const domain = "https://res.cloudinary.com";
const imageNs = "image/upload";
const videoNs = "video/upload";

function makeImageOptionList(
  options: Transformation.ImageOptions
): Array<string> {
  let xs = [];

  if (options.width) {
    xs.push(`w_${options.width}`);
  }

  if (options.height) {
    xs.push(`h_${options.height}`);
  }

  if (options.crop) {
    xs.push(`c_${options.crop}`);
  }

  if (options.fetch_format) {
    xs.push(`f_${options.fetch_format}`);
  }

  return xs;
}

function makeVideoOptionList(
  options: Transformation.VideoOptions
): Array<string> {
  let xs = [];

  if (options.duration) {
    xs.push(`du_${options.duration}`);
  }

  return xs;
}

export function url(
  cloudName: string,
  publicId: string,
  options?: Transformation.ImageOptions
): string {
  const base = `${domain}/${cloudName}/${imageNs}`;

  if (!options) {
    return `${base}/${publicId}`;
  }

  const xs = makeImageOptionList(options);
  const optionString = xs.join(",");

  return `${base}/${optionString}/${publicId}`;
}

export function videoUrl(
  cloudName: string,
  publicId: string,
  options?: Transformation.VideoOptions
) {
  const base = `${domain}/${cloudName}/${videoNs}`;

  if (!options) {
    return `${base}/${publicId}`;
  }

  const imageOptions = makeImageOptionList(options);
  const videoOptions = makeVideoOptionList(options);
  const optionString = imageOptions.concat(videoOptions).join(",");

  return `${base}/${optionString}/${publicId}`;
}
