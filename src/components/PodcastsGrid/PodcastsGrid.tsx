import React, { useEffect, useState } from 'react';
import { IconBuildingBroadcastTower } from '@tabler/icons-react';
import axios from 'axios';
import Markdown from 'react-markdown';
import { Blockquote, SimpleGrid, Text } from '@mantine/core';

const PodcastsGrid = () => {
  const [feeds, setFeeds] = useState<
    {
      mainUrl: string;
      mainData: any;
      newsletterUrl: string;
      newsletterData: any;
    }[]
  >([]);

  const urls = [
    'https://rss.kermaneno.ir/yournews/social/',
    'https://rss.kermaneno.ir/yournews/world/',
    'https://rss.kermaneno.ir/yournews/politic/',
    'https://rss.kermaneno.ir/yournews/sport/',
    'https://rss.kermaneno.ir/yournews/culture/',
    'https://rss.kermaneno.ir/yournews/economy/',
  ];

  const newsletterUrls = [
    'https://yn.j-ai.ir/newsletter/latest/social',
    'https://yn.j-ai.ir/newsletter/latest/world',
    'https://yn.j-ai.ir/newsletter/latest/politic',
    'https://yn.j-ai.ir/newsletter/latest/sport',
    'https://yn.j-ai.ir/newsletter/latest/culture',
    'https://yn.j-ai.ir/newsletter/latest/economy',
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
  const podcast_icon = <IconBuildingBroadcastTower stroke={1} />;

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing="sm" verticalSpacing="xl">
      {feeds.map((feed, index) => (
        <div key={index}>
          <Text ta="left" size="lg" fw={900} tt="capitalize">
            {new URL(feed.mainUrl).pathname.split('/')[2]}
          </Text>
          <Blockquote
            color="blue"
            cite={new URL(feed.mainUrl).pathname.split('/')[2]}
            icon={podcast_icon}
            mt="xs"
            p="xs"
          >
            <Markdown>{feed.newsletterData.podcast}</Markdown>
            <time>{new Date(feed.newsletterData.updated_at).toLocaleDateString()}</time>
          </Blockquote>
        </div>
      ))}
    </SimpleGrid>
  );
};

export default PodcastsGrid;
