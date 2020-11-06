import { FixedObject, FluidObject } from 'gatsby-image';

export type ContentfulRichText = {
  json?: Document;
};

export type ContentfulFile = {
  contentType: 'application/pdf';
  url: string;
};

export interface ContentfulMedia extends ContentfulFile {
  title: string;
  description?: string;
  file: ContentfulFile;
  fixed: FixedObject;
  fluid: FluidObject;
}

export type PortfolioPiece = {
  date: string;
  deliverables: ContentfulMedia[];
  description?: ContentfulRichText;
  hero?: ContentfulMedia;
  hex: string;
  images?: ContentfulMedia[];
  role?: string;
  slug: string;
  thumbnail: ContentfulMedia;
  title: string;
  type: 'UX Research';
};
