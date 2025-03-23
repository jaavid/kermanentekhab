export interface ServiceItem {
  id: string;
  title: string;
  content: string;
  link: string;
  media?: Array<{ href: string }>;
  origin?: { title: string };
  published?: Date | number;
  categories?: Array<string>;
  crawlTimeMsec?: string;
  timestampUsec?: string;
}
