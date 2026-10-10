import { SkillCategory } from "../types";
import { type Lang } from './ui.constants';

export const skillsData: Record<Lang, SkillCategory[]> = {
  ja: [
    {
      category: 'バックエンド',
      featured: true,
      skills: ['Java', 'Kotlin', 'Spring Boot', 'JPA', 'Thymeleaf', 'Node.js', 'Express.js', 'NestJS'],
    },
    {
      category: 'フロントエンド',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Zustand', 'TanStack Query', 'Zod'],
    },
    {
      category: 'モバイル',
      skills: ['React Native', 'Flutter'],
    },
    {
      category: 'データベース',
      skills: ['MySQL', 'PostgreSQL', 'ERD・テーブル設計'],
    },
    {
      category: 'その他',
      skills: ['Git', 'Linux', 'WebSocket'],
    },
    {
      category: '協業ツール',
      skills: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs/Sheets/Slides'],
    },
  ],
  ko: [
    {
      category: '백엔드',
      featured: true,
      skills: ['Java', 'Kotlin', 'Spring Boot', 'JPA', 'Thymeleaf', 'Node.js', 'Express.js', 'NestJS'],
    },
    {
      category: '프론트엔드',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Zustand', 'TanStack Query', 'Zod'],
    },
    {
      category: '모바일',
      skills: ['React Native', 'Flutter'],
    },
    {
      category: '데이터베이스',
      skills: ['MySQL', 'PostgreSQL', 'ERD·테이블 설계'],
    },
    {
      category: '기타',
      skills: ['Git', 'Linux', 'WebSocket'],
    },
    {
      category: '협업 도구',
      skills: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs/Sheets/Slides'],
    },
  ],
};
