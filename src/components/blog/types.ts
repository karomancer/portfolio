import { ContentfulMedia, ContentfulRichText } from '../../types/contentful'

export type PortfolioPiece = {
  date: string;
  deliverables: ContentfulMedia[];
  description?: ContentfulRichText;
  hero?: {
    title: string;
    description: string;
    url: string;
  };
  hex: string;
  images?: ContentfulMedia[];
  role?: string;
  slug: string;
  thumbnail: ContentfulMedia;
  title: string;
  type: 'UX Research';
};
