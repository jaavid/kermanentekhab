import Markdown from 'react-markdown';
import { Carousel } from '@mantine/carousel';
import { Box, Container, Grid, List, Loader, Paper, SimpleGrid } from '@mantine/core';
import { NewsCategory, NewsListProps } from '@/Api/Api';
import ArticleCard from '@/components/ArticleCard/ArticleCard';
import ArticleImageCard from '@/components/ArticleCard/ArticleImageCard';
import { Footer } from '@/components/Footer/Footer';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { TopWelcome } from '@/components/Welcome/Welcome';
import { useNews } from '@/Hooks/UseNews';

import '@mantine/carousel/styles.css';

const getCategory = (categories: Array<string> | undefined): string => {
  return categories?.[1] ?? ' ';
};
export function LandingPage() {
  function NewsList({ category = 'politic', start = 0, end = 10, view = 'list' }: NewsListProps) {
    const { data, loading, error } = useNews(category);

    if (loading) {
      return <Loader color="red" size="sm" type="bars" />;
    }

    if (error) {
      return <div>Error loading news</div>;
    }

    const items = data.items.slice(start, end);

    switch (view) {
      case 'card':
        return (
          <Grid>
            {items.map((item) => (
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
        );

      case 'image':
        return (
          <SimpleGrid>
            {items.map((item) => (
              <ArticleImageCard
                key={item.id}
                title={item.title}
                id={item.id}
                content={item.content}
                link={item.link}
                media={item.media?.[0]?.href}
                origin={item.origin?.title}
                crawlTimeMsec={item.crawlTimeMsec}
                categories={getCategory(item.categories)}
              />
            ))}
          </SimpleGrid>
        );

      case 'carouselcard':
        return (
          <>
            {items.map((item, index) => (
              <Carousel.Slide key={index}>
                <ArticleImageCard
                  key={item.id}
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
            ))}
          </>
        );

      //  <Carousel.Slide key={index}>

      default:
        return (
          <List>
            {items.map((item) => (
              <List.Item key={item.id}>{item.title}</List.Item>
            ))}
          </List>
        );
    }
  }

  function NewsDesc({ category }: { category: NewsCategory }) {
    const { data, loading, error } = useNews(category);

    if (loading) {
      return <Loader color="red" size="sm" type="bars" />;
    }

    if (error) {
      return <div>Error loading news</div>;
    }

    return <Markdown>{data.description?.body}</Markdown>;
  }

  return (
    <>
      <TopHeader />
      <Container p="sm" fluid>
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 12, sm: 2 }} spacing="md">
            <Box>
              <TopWelcome content="سیاست" />
              <NewsDesc category="politic" />
            </Box>
            <Grid gutter="md">
              <Grid.Col>
                <NewsList category="politic" start={0} end={4} view="carouselcard" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="politic" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="politic" start={6} end={8} view="image" />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container fluid mt="md">
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Grid gutter="md">
              <Grid.Col span={6}>
                <NewsList category="culture" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="culture" start={6} end={8} view="image" />
              </Grid.Col>
              <Grid.Col>
                <NewsList category="culture" start={0} end={4} view="card" />
              </Grid.Col>
            </Grid>
            <Box>
              <TopWelcome content="فرهنگ" />
              <NewsDesc category="culture" />
            </Box>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container fluid mt="md">
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Box>
              <TopWelcome content="ورزش" />
              <NewsDesc category="sport" />
            </Box>
            <Grid gutter="md">
              <Grid.Col>
                <NewsList category="sport" start={0} end={4} view="card" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="sport" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="sport" start={6} end={8} view="image" />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container fluid mt="md">
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 12, sm: 2 }} spacing="md">
            <Box>
              <TopWelcome content="جامعه" />
              <NewsDesc category="social" />
            </Box>
            <Grid gutter="md">
              <Grid.Col>
                <NewsList category="social" start={0} end={4} view="card" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="social" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="social" start={6} end={8} view="image" />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container fluid mt="md">
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Grid gutter="md">
              <Grid.Col span={6}>
                <NewsList category="economy" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="economy" start={6} end={8} view="image" />
              </Grid.Col>
              <Grid.Col>
                <NewsList category="economy" start={0} end={4} view="card" />
              </Grid.Col>
            </Grid>
            <Box>
              <TopWelcome content="اقتصاد" />
              <NewsDesc category="economy" />
            </Box>
          </SimpleGrid>
        </Paper>
      </Container>

      <Container fluid mt="md">
        <Paper shadow="xl" radius="xs" p="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Box>
              <TopWelcome content="جهان" />
              <NewsDesc category="world" />
            </Box>
            <Grid gutter="md">
              <Grid.Col>
                <NewsList category="world" start={0} end={4} view="card" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="world" start={4} end={6} view="image" />
              </Grid.Col>
              <Grid.Col span={6}>
                <NewsList category="world" start={6} end={8} view="image" />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}
