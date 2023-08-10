import { blog, cafe, portfolio, simongame } from '../assets/index';

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'technologies',
    title: 'Technologies',
  },
  // {
  //   id: 'blog',
  //   title: 'Blog',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    id: Math.random() * 10,
    name: 'Developers Blog',
    description:
      'Web-based platform that allows the user to post their own blog and intereact with other developers through comments.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: blog,
    source_link: 'https://sweet-sawine-08dd7e.netlify.app',
  },
  {
    id: Math.random() * 10,
    name: 'POS/Inventory System',
    description:
      'Web-based point of sale system that allows establishments to monitor their inventory in real time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: cafe,
    source_link: 'https://sweet-sawine-08dd7e.netlify.app',
  },
  {
    id: Math.random() * 10,
    name: 'Simon Game',
    description:
      'Game developed using Javascript which is derived from the original Simon game. ',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: simongame,
    source_link: 'https://js-game-aisha.netlify.app',
  },
  {
    id: Math.random() * 10,
    name: 'Static Portfolio',
    description: 'Static website to showcase HTML5, CSS3, Flexbod and Grid.',
    tags: [
      {
        name: 'flexbox',
        color: 'blue-text-gradient',
      },
      {
        name: 'grid',
        color: 'blue-text-gradient',
      },
      {
        name: 'html5',
        color: 'green-text-gradient',
      },
      {
        name: 'css3',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_link: 'https://aisha-folio.netlify.app',
  },
];

export { navLinks, projects };
