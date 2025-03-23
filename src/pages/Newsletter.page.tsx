import { Container } from '@mantine/core';
import NewslettersGrid from '@/components/NewslettersGrid/NewslettersGrid';
import { TopHeader } from '@/components/TopHeader/TopHeader';
import { NewsletterWelcome } from '@/components/Welcome/Welcome';

export function NewsletterPage() {
  return (
    <>
      <TopHeader />
      <NewsletterWelcome />
      <Container size="lg">
        <NewslettersGrid />
      </Container>
    </>
  );
}
