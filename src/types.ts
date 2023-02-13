import { IEDirectives } from "@imageengine/imageengine-helpers";

export interface User {
  id: string;
  name: string;
}

export type TSrcSet = Array<{
  // Relative path to the image.
  src: string;
  // Width descriptor.
  width: string;
  directives?: IEDirectives;
}>;
