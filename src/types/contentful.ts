import { FixedObject, FluidObject } from 'gatsby-image';

export type ContentfulRichText = {
  json?: Document;
};

export type ContentfulFile = {
  contentType: 'application/pdf' | 'image/jpeg' | 'image/gif' | 'image/png' | 'video/mp4';
  url: string;
};

export interface ContentfulMedia extends ContentfulFile {
  title: string;
  description?: string;
  file: ContentfulFile;
  fixed: FixedObject;
  fluid: FluidObject;
}
