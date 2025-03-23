import { useEffect, useState } from 'react';
import { IconBlockquote, IconBuildingBroadcastTower } from '@tabler/icons-react';
import axios from 'axios';
import moment from 'moment-jalaali';
import Markdown from 'react-markdown';
import { Carousel } from '@mantine/carousel';
import { Blockquote, Divider, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import ArticleImageCard from '../ArticleCard/ArticleImageCard';

import '@mantine/carousel/styles.css';

interface NewsItem {
  source: string;
  id: string;
  feedid: number;
  crawlTimeMsec: string;
  timestampUsec: string;
  published: number;
  title: string;
  link: string;
  content: string;
  categories: Array<string>;
  origin: {
    title: string;
    htmlUrl: string;
    feedUrl: string;
  };
  media?: Array<{
    href: string;
    type: string;
    length: number;
  }>;
  read: number;
  favorite: number;
}

const NewsGrid = () => {
  const [feeds, setFeeds] = useState<
    {
      mainUrl: string;
      mainData: any;
      newsletterUrl: string;
      newsletterData: any;
    }[]
  >([]);

  const urls = [
    'https://rss.kermaneno.ir/yournews/kerman/',
  ];

  const newsletterUrls = [
    'https://yn.j-ai.ir/newsletter/latest/culture',
  ];

  useEffect(() => {
    const fetchAllFeeds = async () => {
      const results = await Promise.all(
        urls.map(async (mainUrl, index) => {
          try {
            const [mainResponse, newsletterResponse] = await Promise.all([
              axios.get(mainUrl),
              axios.get(newsletterUrls[index]),
            ]);
            return {
              mainUrl,
              mainData: mainResponse.data,
              newsletterUrl: newsletterUrls[index],
              newsletterData: newsletterResponse.data,
            };
          } catch (error) {
            return {
              mainUrl,
              mainData: 'Error loading feed',
              newsletterUrl: newsletterUrls[index],
              newsletterData: 'Error loading newsletter',
            };
          }
        })
      );
      setFeeds(results);
    };
    fetchAllFeeds();
  }, []);
  const summary_icon = <IconBlockquote stroke={1} />;
  const podcast_icon = <IconBuildingBroadcastTower stroke={1} />;
  const getCategory = (categories: Array<string> | undefined): string => {
    return categories?.[1] ?? ' ';
  };
  const slides = feeds.map((item, index) => (
    <Carousel.Slide key={index}>
      <Text ta="left" size="lg" fw={900} tt="capitalize">
        {new URL(item.mainUrl).pathname.split('/')[2]}
      </Text>
      <Blockquote
        color="red"
        radius="xl"
        iconSize={30}
        cite="تحلیل"
        icon={summary_icon}
        mt="xs"
        p="xs"
      >
        <Text c="gray" ta="left" size="xs">
          {moment(item.newsletterData.created_at).format('jYYYY/jM/jD')}
        </Text>
        <ScrollArea h={400} scrollbarSize={8} scrollbars="y" type="always">
          <Markdown>{item.newsletterData.body}</Markdown>
        </ScrollArea>
      </Blockquote>
    </Carousel.Slide>
  ));
  return (
    <>
      {/* <Carousel
        slideSize="70%"
        height={400}
        slideGap="xl"
        controlsOffset="xs"
        controlSize={40}
        loop
        withIndicators
      >
        {slides}
      </Carousel> */}
      <Divider my="md" variant="dashed" />
      {/* <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="sm" verticalSpacing="xl"> */}
        {feeds.map((feed, index) => (
          <div key={index}>
            <Text ta="left" size="lg" fw={900} tt="capitalize">
              {new URL(feed.mainUrl).pathname.split('/')[2]}
            </Text>
            {/* <Blockquote color="blue" cite="پادکست" icon={podcast_icon} mt="xs" p="xs">
              <Text c="gray" ta="left" size="xs">
                {moment(feed.newsletterData.updated_at).format('jYYYY/jM/jD')}
              </Text>
              <ScrollArea h={150} scrollbarSize={8} scrollbars="y" type="always">
                <Markdown>{feed.newsletterData.podcast}</Markdown>
              </ScrollArea> */}

              <Carousel
                slideSize="70%"
                height={300}
                slideGap="xl"
                controlsOffset="xs"
                controlSize={20}
                loop
              >
                {typeof feed.mainData === 'string' ? (
                  <Text>{feed.mainData}</Text>
                ) : (
                  feed.mainData.map((item: NewsItem, index: number) => (
                    <Carousel.Slide key={index}>
                      <ArticleImageCard
                        title={item.title}
                        id={item.id}
                        content={item.content}
                        link={item.link}
                        media={item.media?.[0]?.href}
                        origin={item.origin?.title}
                        crawlTimeMsec={item.crawlTimeMsec}
                        categories={getCategory(item.categories)}
                      />
                    </Carousel.Slide>
                  ))
                )}
              </Carousel>
            {/* </Blockquote> */}
          </div>
        ))}
      {/* </SimpleGrid> */}
    </>
  );
};

export default NewsGrid;
