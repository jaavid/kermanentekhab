import {
  IconBallBaseball,
  IconBuildingPavilion,
  IconChevronDown,
  IconCoins,
  IconMasksTheater,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  Image,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './TopHeader.module.css';

const mockdata = [
  {
    icon: IconBuildingPavilion,
    title: 'سیاست',
    description: ' ',
    url: '/service/politic',
  },
  {
    icon: IconBallBaseball,
    title: 'ورزش',
    description: ' ',
    url: '/service/sport',
  },
  {
    icon: IconWorld,
    title: 'جهان',
    description: ' ',
    url: '/service/world',
  },
  {
    icon: IconUsers,
    title: 'جامعه',
    description: ' ',
    url: '/service/social',
  },
  {
    icon: IconMasksTheater,
    title: 'فرهنگ',
    description: ' ',
    url: '/service/culture',
  },
  {
    icon: IconCoins,
    title: 'اقتصاد',
    description: ' ',
    url: '/service/economy',
  },
];

export function TopHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <Link key={item.title} to={item.url}>
      <UnstyledButton className={classes.subLink}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} c="dark">
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <Box pb={10}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src="https://raw.githubusercontent.com/YourNewsSystem/front/refs/heads/master/src/favicon-32x32.png" />
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              شروع
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      سرویس‌ها
                    </Box>
                    <IconChevronDown size={16} color={theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>سرویس‌های خبری</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/newsletters" className={classes.link}>
              تحلیل
            </Link>
            <Link to="/podcasts" className={classes.link}>
              پادکست
            </Link>
            <Link to="/landing" className={classes.link}>
              L
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="filled">تلگرام</Button>
            <Button variant="filled" color="teal">
              بله
            </Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="فهرست"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link}>
            شروع
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                سرویس‌ها
              </Box>
              <IconChevronDown size={16} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link to="/newsletters" className={classes.link}>
            تحلیل
          </Link>
          <Link to="/podcasts" className={classes.link}>
            پادکست
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="filled">تلگرام</Button>
            <Button variant="filled" color="teal">
              بله
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
