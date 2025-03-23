import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

interface TopWelcomeProps {
  content: string;
}
export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        به
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          {' '}
          کرمان انتخاب{' '}
        </Text>
        خوش آمدید.
      </Title>
    </>
  );
}

export function PodcastWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          پادکست‌های خبری
        </Text>
      </Title>
    </>
  );
}

export function NewsletterWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          گزارش‌های خبری
        </Text>
      </Title>
    </>
  );
}

export const TopWelcome: React.FC<TopWelcomeProps> = ({ content = 'No content provided' }) => {
  return (
    <Title className={classes.title} ta="center" mt={10} mb={20}>
      <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        {content}
      </Text>
    </Title>
  );
};
