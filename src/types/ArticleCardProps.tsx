export default interface ArticleCardProps {
  id: string;
  title: string;
  content: string;
  link: string;
  media?: string;
  origin?: string;
  published?: Date | number;
  categories?: string;
  crawlTimeMsec?: string;
}
