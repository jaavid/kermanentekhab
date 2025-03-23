import {
  IconBlockquote,
  IconBrandGithub,
  IconBrandTelegram,
  IconBuildingBroadcastTower,
  IconHeart,
  IconHome,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { ActionIcon, Flex } from '@mantine/core';

interface LinkButtonProps {
  to?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
}

const LinkButton = ({
  to = '/',
  icon = <IconBrandTelegram />,
  ariaLabel = 'Navigate to page',
  gradientFrom = 'blue',
  gradientTo = 'cyan',
  gradientDeg = 90,
}: LinkButtonProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label={ariaLabel}
        gradient={{ from: gradientFrom, to: gradientTo, deg: gradientDeg }}
      >
        {icon}
      </ActionIcon>
    </Link>
  );
};
export function TopIcons2() {
  return (
    <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap" m="lg">
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Telegram"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        <IconBrandTelegram stroke={1} />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Bale"
        gradient={{ from: 'blue', to: 'cyan', deg: 180 }}
      >
        <IconHeart />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Github"
        gradient={{ from: 'blue', to: 'cyan', deg: 270 }}
      >
        <IconBrandGithub stroke={1} />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Telegram"
        gradient={{ from: 'blue', to: 'red', deg: 90 }}
      >
        <IconBuildingBroadcastTower stroke={1} />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        size="xl"
        aria-label="Bale"
        gradient={{ from: 'blue', to: 'red', deg: 180 }}
      >
        <IconBlockquote stroke={1} />
      </ActionIcon>
    </Flex>
  );
}

export function TopIcons() {
  return (
    <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap" m="lg">
      <LinkButton
        to="/"
        ariaLabel="Navigate to Home"
        gradientFrom="blue"
        gradientTo="cyan"
        gradientDeg={90}
        icon={<IconHome stroke={1} />}
      />

      <LinkButton
        to="/podcasts"
        ariaLabel="Navigate to podcasts page"
        gradientFrom="blue"
        gradientTo="cyan"
        gradientDeg={90}
        icon={<IconBuildingBroadcastTower stroke={1} />}
      />

      <LinkButton
        to="/newsletters"
        ariaLabel="Navigate to newsletters page"
        gradientFrom="blue"
        gradientTo="red"
        gradientDeg={180}
        icon={<IconBlockquote stroke={1} />}
      />

      <LinkButton
        to="/github"
        ariaLabel="Navigate to github page"
        gradientFrom="purple"
        gradientTo="pink"
        gradientDeg={270}
        icon={<IconBrandGithub stroke={1} />}
      />

      <LinkButton
        to="/heart"
        ariaLabel="Navigate to heart page"
        gradientFrom="red"
        gradientTo="orange"
        gradientDeg={360}
        icon={<IconHeart />}
      />
    </Flex>
  );
}
