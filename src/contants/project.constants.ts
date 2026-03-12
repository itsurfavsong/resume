import { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: 'DG Delivery',
    description: '대구 여행자를 위한, 두 손 가벼운 쇼핑 딜리버리 서비스 (PWA)',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'mySQL'],
    githubLink: 'https://github.com/rainBowRiceCakes',
    notionLink: 'https://iodized-wilderness-bba.notion.site/DGD-Daegu-Delivery-Web-PWA-2b700683cadc80a0ac15fce914a8b1d0',
    deployLink: 'https://app2.green-meerkat.kro.kr/',
    image: 'https://app2.green-meerkat.kro.kr/resource/main-logo.png', // Placeholder image
  },
  {
    title: '숨케어',
    description: '한국의 실시간 미세먼지 및 대기질 정보를 시각적으로 제공하는 웹 사이트(PWA)',
    technologies: ['React', 'JavaScript', 'Vite'],
    githubLink: 'https://github.com/itsurfavsong/architects',
    notionLink: 'https://iodized-wilderness-bba.notion.site/Web-PWA-2b600683cadc813eb9c7db56c2760aec?pvs=74',
    deployLink: 'https://architects-mocha.vercel.app/',
    image: 'https://architects-mocha.vercel.app/assets/logonew-B474Rv3H.png', // Placeholder image
  },
];