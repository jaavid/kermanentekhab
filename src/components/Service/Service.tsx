import React from 'react';
import axios from 'axios';
import ServicePage from '@/pages/Service.page';
import { ServiceAI } from '@/types/ServiceAI';
import { ServiceItem } from '@/types/ServiceItem';

const Politic: React.FC = () => {
  const cat = 'politic';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس سیاست" fetchData={fetchData} />;
};

const World: React.FC = () => {
  const cat = 'world';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس جهان" fetchData={fetchData} />;
};

const Culture: React.FC = () => {
  const cat = 'culture';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس فرهنگ" fetchData={fetchData} />;
};

const Sport: React.FC = () => {
  const cat = 'sport';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      description.data !== null ? { ...description.data, id: Date.now() } : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس ورزش" fetchData={fetchData} />;
};

const Economy: React.FC = () => {
  const cat = 'economy';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس اقتصاد" fetchData={fetchData} />;
};

const Social: React.FC = () => {
  const cat = 'social';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title="سرویس جامعه" fetchData={fetchData} />;
};

const Kerman: React.FC = () => {
  const cat = 'kerman';
  const fetchData = async (): Promise<[Array<ServiceItem>, ServiceAI | null]> => {
    const response = await axios.get(`https://rss.kermaneno.ir/yournews/${cat}/`);
    const description = await axios.get(`https://yn.j-ai.ir/newsletter/latest/${cat}`);
    const parsedResponse = Array.isArray(response.data)
      ? response.data.map((item) => ({ ...item, id: Date.now() })) // Add unique id to each item
      : [];
    const parsedDescription =
      typeof description.data === 'object' && description.data !== null
        ? { ...description.data, id: Date.now() }
        : null;

    return [parsedResponse, parsedDescription];
  };

  return <ServicePage title=" کرمان" fetchData={fetchData} />;
};

export { Politic, World, Culture, Sport, Economy, Social, Kerman };
