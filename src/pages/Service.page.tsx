import React from 'react';
import Markdown from 'react-markdown';
import { Container, Divider, Grid, Loader, Stack } from '@mantine/core';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import ArticleImageCard from '@/components/ArticleCard/ArticleImageCard';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { TopWelcome } from '@/components/Welcome/Welcome';
import { ServiceAI } from '@/types/ServiceAI';
import { ServiceItem } from '@/types/ServiceItem';

interface ServicePageProps {
  title: string;
  fetchData: () => Promise<[Array<ServiceItem>, ServiceAI | null]>;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, fetchData }) => {
  const [data, setData] = React.useState<Array<ServiceItem>>([]);
  const [description, setDescription] = React.useState<ServiceAI | null>();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        const description = result[1];
        const news = Array.isArray(result[0]) ? result[0] : [];
        setData(news as ServiceItem[]);
        setDescription(description);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [fetchData]);

  if (loading) {
    return <Loader color="red" size="sm" type="bars" />;
  }

  if (error) {
    return <div>Error loading news</div>;
  }

  const getCategory = (categories: Array<string> | undefined): string => {
    return categories?.[1] ?? ' ';
  };

  return (
    <>
      <TopHeader />
      <Container fluid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>
            <Stack h={300} align="center" justify="center" gap="md">
              <TopWelcome content={title} />
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>
            <Markdown>{description?.body}</Markdown>
          </Grid.Col>
        </Grid>
        {data.length === 0 && <div>No articles found</div>}
        <Grid>
          {data.slice(0, 2).map((item) => (
            <Grid.Col span={{ base: 6, md: 6, lg: 6 }} key={item.id}>
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
            </Grid.Col>
          ))}
          {data.slice(3, 7).map((item) => (
            <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={item.id}>
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
            </Grid.Col>
          ))}

          <Divider size="xl" mt="lg" mb="lg" />

          {data.slice(8).map((item) => (
            <Grid.Col span={{ base: 6, md: 4, lg: 3 }} key={`card-${item.id}`}>
              <ArticleCard
                title={item.title}
                id={item.id}
                content={item.content}
                link={item.link}
                media={item.media?.[0]?.href}
                origin={item.origin?.title}
                categories={getCategory(item.categories)}
                crawlTimeMsec={item.crawlTimeMsec}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ServicePage;
