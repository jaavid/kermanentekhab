import { Container } from '@mantine/core';
import PodcastsGrid from '@/components/PodcastsGrid/PodcastsGrid';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { PodcastWelcome } from '@/components/Welcome/Welcome';

export function PodcastPage() {
  return (
    <>
      <TopHeader />
      <PodcastWelcome />
      <Container size="lg">
        <PodcastsGrid />
      </Container>
    </>
  );
}
