import { type EducationEntry } from '../types/education.types';
import { type Lang } from './ui.constants';

export const educationData: Record<Lang, EducationEntry[]> = {
  ja: [
    {
      major: 'Smart Cloud ITマスターAX/DX(釜山 2026-1)',
      university: 'Data Science Academy(韓国・釜山のIT教育機関)',
      duration: '2026年3月 ～ 2026年11月(修了予定)',
      details: [
        'Java、Spring Boot、JPA、Thymeleaf、JavaScript、Linux、MySQLを学んでいます。',
        'チームプロジェクト「ギリギリ」で、チームリーダー・バックエンド開発を担当しました。'
      ]
    },
    {
      major: 'Full-Stack PWA Development Bootcamp',
      university: 'グリーンコンピュータアートセンター(韓国・大邱のIT教育機関)',
      duration: '2025年8月 ～ 2026年1月',
      details: [
        'JavaScript、TypeScript、React、Next.js、Node.js、Express.js、PostgreSQLを学びました。',
        'チームプロジェクト「スムケア」「DG Delivery」に取り組みました。'
      ]
    },
    {
      major: '一般英語コース(約9か月の語学留学)',
      university: 'AM Language School(マルタ・スリーマ)',
      duration: '2019年3月 ～ 2019年11月',
    },
    {
      major: '言語文学部 中国語専攻(卒業)',
      university: '啓明大学(韓国・大邱の私立総合大学)',
      duration: '2015年3月 ～ 2019年2月',
      details: [
        '在学中、台湾へ約6か月間、交換留学しました。'
      ]
    }
  ],
  ko: [
    {
      major: 'Smart Cloud IT 마스터 AX/DX (부산 2026-1)',
      university: 'Data Science Academy',
      duration: '2026.03 - 2026.11 (수료 예정)',
      details: [
        '학습 기술: Java, Spring Boot, JPA, Thymeleaf, JavaScript, Linux, MySQL',
        '팀 프로젝트 GIRIGIRI에서 팀 리더 및 백엔드 개발 담당'
      ]
    },
    {
      major: 'Full-Stack PWA Development Bootcamp',
      university: '그린컴퓨터아트센터 (대구)',
      duration: '2025.08 - 2026.01',
      details: [
        '학습 기술: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL',
        '팀 프로젝트 「숨케어」, 「DG Delivery」 진행'
      ]
    },
    {
      major: '일반 영어 과정 (약 9개월 어학연수)',
      university: 'AM Language School (몰타 슬리에마)',
      duration: '2019.03 - 2019.11',
    },
    {
      major: '언어문학부 중국어 전공 (졸업)',
      university: '계명대학교 (대구)',
      duration: '2015.03 - 2019.02',
      details: [
        '재학 중 대만 교환학생 (약 6개월)'
      ]
    }
  ]
};
