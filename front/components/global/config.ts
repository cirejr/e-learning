import { ArticleProps } from './article-card';

export const usefullLinks: {
  headTitle: string;
  submenu: { title: string; href: string; description: string }[];
}[] = [
  {
    headTitle: 'Product',
    submenu: [
      {
        title: 'Overview',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },

      {
        title: 'Features',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Solutions',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Tutorials',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
      {
        title: 'Pricing',
        href: '/docs/primitives/tabs',
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    ],
  },
  {
    headTitle: 'Company',
    submenu: [
      {
        title: 'About us',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },

      {
        title: 'Careers',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Press',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'News',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
  },
  {
    headTitle: 'Social',
    submenu: [
      {
        title: 'Twitter',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },

      {
        title: 'Linkedin',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Facebook',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'GitHub',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
  },
  {
    headTitle: 'Legal',
    submenu: [
      {
        title: 'Terms',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },

      {
        title: 'Privacy',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Cookies',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Contact',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
    ],
  },
];

export const courses = [
  {
    title: 'Figma UI UX Design..',
    description:
      'Use Figma to get a job in UI Design, User Interface, User Experience design.',
    hasEnrolled: 2001,
    price: '17.84',
    tag: 'design',
    userName: 'Jane Cooper',
    userImage: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/conception-medias-sociaux-realiste-du-telephone-studio_23-2151459562.jpg?t=st=1715367152~exp=1715370752~hmac=3b5ec02283a4b5648d35b67ceff96a3291f826ad31d7f924cb4b6700c9f443b4&w=740',
  },
  {
    title: 'React Native Mobile App Development',
    description:
      'Learn how to build cross-platform mobile applications using React Native. Dive into the world of mobile app development with React Native.',
    hasEnrolled: 1500,
    price: '29.99',
    tag: 'development',
    userName: 'John Smith',
    userImage: 'https://i.pravatar.cc/150?u=react-native',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/conception-medias-sociaux-realiste-du-telephone-studio_23-2151459542.jpg?t=st=1715372603~exp=1715376203~hmac=a5423b6d15d3ce66eb31e75660870fdaa42bd0a6d35d40d89359ac65cd309158&w=740',
  },
  {
    title: 'Python Programming for Beginners',
    description:
      'Start your journey into the world of programming with Python. Learn the fundamentals of Python programming from scratch.',
    hasEnrolled: 3000,
    price: '24.99',
    tag: 'programming',
    userName: 'Sarah Johnson',
    userImage: 'https://i.pravatar.cc/150?u=python-programming',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/rendering-3d-ordinateur-portable_23-2151004304.jpg?t=st=1715372698~exp=1715376298~hmac=183f002021156cf98749ee011f23cf6f3c2d2524d6d3a39c1ea5e8c70e82b337&w=826',
  },
  {
    title: 'Digital Marketing Fundamentals',
    description:
      'Master the basics of digital marketing and explore various digital channels such as social media, email, and content marketing.',
    hasEnrolled: 2500,
    price: '19.99',
    tag: 'marketing',
    userName: 'Michael Lee',
    userImage: 'https://i.pravatar.cc/150?u=digital-marketing',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/vue-3d-homme-affaires_23-2150710000.jpg?t=st=1715372765~exp=1715376365~hmac=b203bb3e86b36070682484d5b1c3e19750daeee2fb7d5fde7c3aa0de9d33c88f&w=740',
  },
  {
    title: 'Data Science and Machine Learning',
    description:
      'Dive deep into data science and machine learning. Learn how to analyze data, build predictive models, and extract insights.',
    hasEnrolled: 2000,
    price: '34.99',
    tag: 'data-science',
    userName: 'Emily Rodriguez',
    userImage: 'https://i.pravatar.cc/150?u=data-science-machine-learning',
    imageUrl:
      'https://img.freepik.com/photos-gratuite/robot-effectuant-travail-humain_23-2150911983.jpg?t=st=1715372830~exp=1715376430~hmac=ce8b3cf5aa931bee6a89e7bf1deeaa63cf4f0367bcaf1f753fce93beb0cf16e4&w=900',
  },
];

export const tutors = [
  {
    userImage: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    name: 'John Doe',
    userRole: 'Mathematics Teacher',
    supportingText: 'Passionate about helping students excel in mathematics.',
  },
  {
    userImage: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    name: 'Alice Smith',
    userRole: 'Science Teacher',
    supportingText:
      'Bringing science to life with exciting experiments and activities.',
  },
  {
    userImage: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'Michael Johnson',
    userRole: 'English Teacher',
    supportingText:
      "Dedicated to improving students' language skills through literature and writing.",
  },
  {
    userImage: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    name: 'Emily Wilson',
    userRole: 'History Teacher',
    supportingText: "Making history engaging and relevant to students' lives.",
  },
];
export const articles: {
  imageUrl: string;
  createdAt: string;
  title: string;
  description: string;
  tags: {
    name: string;
    color: 'success' | 'danger' | 'warning' | 'default';
  }[];
  isMobile?: boolean;
  href: string;
}[] = [
  {
    imageUrl:
      'https://img.freepik.com/photos-gratuite/jeune-homme-est-assis-bureau-livres-dessus_1340-42779.jpg?t=st=1715431435~exp=1715435035~hmac=9725398517c3e1f7f7697996ed1b70f680986027cb6f7d7c483bb7f0526ca8cd&w=740',
    createdAt: 'November 16, 2014',
    description: 'Discover the Benefits of Online Learning',
    tags: [
      { name: 'Online Learning', color: 'success' },
      { name: 'Education', color: 'default' },
    ],
    title: 'Unlock Your Potential: The Power of Lifelong Learning',
    href: '/blog/1',
  },
  {
    imageUrl:
      'https://img.freepik.com/photos-gratuite/horloge-ancienne-bureau-antique-rappelle-etude-generee-par-ia_24640-90145.jpg?t=st=1715431585~exp=1715435185~hmac=07fa42c61074093ce3d5a2db6384a14d4ebcf2ff01de49f9cf5242f7bc3c21ed&w=826',
    createdAt: 'October 22, 2019',
    description: '5 Study Habits to Boost Your Academic Success',
    tags: [
      { name: 'Study Tips', color: 'warning' },
      { name: 'Learning Strategies', color: 'danger' },
    ],
    title: 'Effective Learning Techniques Every Student Should Know',
    href: '/blog/2',
  },
  {
    imageUrl:
      'https://img.freepik.com/photos-gratuite/bibliotheque-bois-dans-bibliotheque-moderne-environnement-parfait-pour-apprentissage-genere-par-intelligence-artificielle_24640-131320.jpg?t=st=1715433300~exp=1715436900~hmac=a1693bc773e815e970c9d7c0f76c3b2f09ad10de71947687e359d4def791fbb1&w=826',
    createdAt: 'March 8, 2022',
    description: 'How to Stay Motivated When Learning Online',
    tags: [
      { name: 'Motivation', color: 'danger' },
      { name: 'Online Education', color: 'success' },
    ],
    title: 'Overcoming Challenges in Remote Learning: Strategies for Success',
    href: '/blog/3',
  },
];
