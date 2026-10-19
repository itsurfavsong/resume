import { type EducationEntry } from '../types/education.types';
import { type Lang } from './ui.constants';

export const educationData: Record<Lang, EducationEntry[]> = {
  ja: [
    {
      major: 'Smart Cloud ITマスターAX/DX（釜山 2026-1）',
      university: 'Data Science Academy',
      duration: '2026年3月 ～ 2026年11月（修了予定）',
      details: [
        '学習内容:Java、Spring Boot、JPA、Thymeleaf、JavaScript、Linux、MySQL',
        'チームプロジェクト「ギリギリ」でチームリーダー・フルスタック開発を担当',
      ],
    },
    {
      major: 'Full-Stack PWA Development Bootcamp',
      university: 'グリーンコンピュータアートセンター（韓国・大邱）',
      duration: '2025年8月 ～ 2026年1月',
      details: [
        '学習内容:JavaScript、TypeScript、React、Next.js、Node.js、Express.js、PostgreSQL',
        'チームプロジェクト「スムケア」「DG Delivery」',
      ],
    },
    {
      major: '一般英語コース',
      university: 'AM Language School（マルタ）',
      duration: '2019年3月 ～ 2019年11月',
      details: ['多国籍の環境で英語を学び、実務英語の基礎を築いた経験'],
    },
    {
      major: '言語文学部 中国語専攻',
      university: '啓明大学（韓国・大邱）',
      duration: '2015年3月 ～ 2019年2月',
      details: [
        '在学中、台湾へ交換留学（約6か月）',
        '4年制学士課程修了（学士号取得）',
        '入学後も新HSK6級の受験を続け、2015年12月に取得',
      ],
    },
    {
      major: '一般中国語コース',
      university: '广西大学（中国・南宁）',
      duration: '2013年9月 ～ 2014年7月',
      details: [
        '新HSK6級を目標に毎月受験を重ね、中国語特技者として韓国の大学へ進学',
      ],
    },
    {
      major: '一般中国語コース',
      university: '湖南林业科技大学（中国・長沙）',
      duration: '2012年3月 ～ 2013年7月',
      details: ['留学開始から約6ヶ月で新HSK5級を取得'],
    },
  ],
  ko: [
    {
      major: 'Smart Cloud IT 마스터 AX/DX (부산 2026-1)',
      university: 'Data Science Academy',
      duration: '2026.03 - 2026.11 (수료 예정)',
      details: [
        '사용 기술: Java, Spring Boot, JPA, Thymeleaf, JavaScript, Linux, MySQL',
        '팀 프로젝트 GIRIGIRI에서 팀 리더 및 풀스택 개발 담당',
      ],
    },
    {
      major: 'Full-Stack PWA Development Bootcamp',
      university: '대구 그린컴퓨터아트센터',
      duration: '2025.08 - 2026.01',
      details: [
        '사용 기술: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL',
        '팀 프로젝트 숨케어, DG Delivery 진행',
      ],
    },
    {
      major: '영어 유학',
      university: 'AM Language School (몰타)',
      duration: '2019.03 - 2019.11',
      details: [
        '다국적 환경에서 영어 능력 향상',
        '영국·호주 현지 실무 수행에 필요한 언어 기반 확립',
      ],
    },
    {
      major: '언어문학부 중국어 전공 (졸업)',
      university: '계명대학교',
      duration: '2015.03 - 2019.02',
      details: [
        '대만 교환학생 (약 6개월)',
        '4년제 학사 과정 수료 (학사 학위 취득)',
      ],
    },
    {
      major: '중국 유학',
      university: '광시대학교 어학당 (중국 난닝)',
      duration: '2013.09 - 2014.07',
      details: ['신HSK 6급에 합격해 중국어 특기자로 한국 대학 진학'],
    },
    {
      major: '중국 유학 ',
      university: '후난임업과학기술대학 어학당 (중국 창사)',
      duration: '2012.03 - 2013.07',
      details: ['유학 시작 약 6개월 만에 신HSK 5급 취득'],
    },
  ],
};
