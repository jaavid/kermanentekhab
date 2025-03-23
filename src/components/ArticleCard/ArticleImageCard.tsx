import moment from 'moment-jalaali';
import { Avatar, Card, Group, Text } from '@mantine/core';
import ArticleCardProps from '../../types/ArticleCardProps';
import classes from './ArticleImageCard.module.css';

const ArticleImageCard = ({
  title = 'تیتر',
  content = 'خبر',
  link = '#',
  media = 'https://placehold.co/180x100/ccc/F00?text=Your\nNews&font=oswald',
  origin = '',
  crawlTimeMsec = '',
  categories = '',
}: ArticleCardProps) => {
  const convertTimestamp = (timestamp: string | undefined): number | null => {
    if (!timestamp) {
      return null;
    }
    const numValue = parseInt(timestamp);
    return isNaN(numValue) ? null : numValue;
  };
  const processedCrawlTime = convertTimestamp(crawlTimeMsec);
  const imageUrl = `https://yn.j-ai.ir/assets/images/logo/${origin}.png`;

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://yournews.j-ai.ir/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${media})`,
        }}
      />
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Text
            size="lg"
            className={classes.title}
            fw={500}
            component="a"
            href={link}
            target="_blank"
          >
            {title}
          </Text>
          <Group justify="space-between" gap="xs">
            <Avatar src={imageUrl} alt={origin} size="sm" />
            <Text size="sm" className={classes.bodyText}>
              {categories}
            </Text>
            <Text size="xs" className={classes.bodyText}>
              {moment(processedCrawlTime).format('jYYYY/jM/jD')}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default ArticleImageCard;
