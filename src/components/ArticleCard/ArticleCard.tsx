import { IconClock, IconShare } from '@tabler/icons-react';
import moment from 'moment-jalaali';
import { ActionIcon, Card, Center, Group, Image, ScrollArea, Text } from '@mantine/core';
import ArticleCardProps from '../../types/ArticleCardProps';
import classes from './ArticleCard.module.css';

const ArticleCard = ({
  title = 'تیتر',
  content = 'خبر',
  link = '#',
  media = 'https://placehold.co/180x100/ccc/F00?text=Your\nNews&font=oswald',
  origin = '',
  categories = '',
  crawlTimeMsec = '',
}: ArticleCardProps) => {
  const convertTimestamp = (timestamp: string | undefined): number | null => {
    if (!timestamp) {
      return null;
    }
    const numValue = parseInt(timestamp);
    return isNaN(numValue) ? null : numValue;
  };
  const processedCrawlTime = convertTimestamp(crawlTimeMsec);
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={media}
            height={180}
            fallbackSrc="https://placehold.co/180x100/ccc/F00?text=Your\nNews&font=oswald"
          />
        </a>
      </Card.Section>
      <Text
        className={classes.title}
        fw={500}
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        lineClamp={2}
      >
        {title}
      </Text>
      <ScrollArea h={50} scrollbarSize={2} scrollHideDelay={0}>
        <Text fz="sm" c="dimmed" lineClamp={4}>
          {content}
        </Text>
      </ScrollArea>
      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Text fz="sm" fw="bolder" inline>
            {origin} | {categories}
          </Text>
        </Center>
        <ActionIcon.Group>
          <ActionIcon.GroupSection
            variant="default"
            size="xs"
            bg="var(--mantine-color-body)"
            miw={60}
          >
            {moment(processedCrawlTime).format('jYYYY/jM/jD')}
            <IconClock size={16} />
          </ActionIcon.GroupSection>
          <ActionIcon variant="default" size="xs" radius="md">
            <IconShare size={16} color="blue" />
          </ActionIcon>
        </ActionIcon.Group>
      </Group>
    </Card>
  );
};
export default ArticleCard;
