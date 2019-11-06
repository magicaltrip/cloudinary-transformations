import { Transformation, url, videoUrl } from "./Transformation";

export interface Cloudinary {
  cloudName: string;
  secure: boolean;

  url(publicId: string, options: Transformation.ImageOptions): string;
  video_url(publicId: string, options: Transformation.VideoOptions): string;
}

type CloudinaryOptions = {
  cloud_name: string;
  secure?: boolean;
};

export class Cloudinary implements Cloudinary {
  constructor({ cloud_name, secure = true }: CloudinaryOptions) {
    this.cloudName = cloud_name;
    this.secure = secure;
  }

  url(publicId: string, options?: Transformation.ImageOptions): string {
    return url(this.cloudName, publicId, options);
  }

  video_url(publicId: string, options?: Transformation.VideoOptions): string {
    return videoUrl(this.cloudName, publicId, options);
  }
}
