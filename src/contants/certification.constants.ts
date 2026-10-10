import { CertificationGroup } from "../types";
import { type Lang } from './ui.constants';

export const certificationData: Record<Lang, CertificationGroup[]> = {
  ja: [
    {
      category: '日本語',
      items: [
        'JPT 530点(2026年7月)',
        'JLPT N2相当',
        '2026年12月にJLPT N2を受験予定'
      ],
    },
    {
      category: '英語',
      items: [
        'TOEIC 820点(2026年4月)',
        '英国・豪州で3年以上勤務'
      ],
    },
    {
      category: '中国語',
      items: [
        '新HSK 6級・220点(2015年12月)',
        '通訳・講師経験'
      ],
    },
    {
      category: '韓国語',
      items: ['母語'],
    },
    {
      category: '教員資格',
      items: [
        '中等学校正教師2級(中国語)(2019年2月、韓国教育部)',
        '教職課程(学科定員65名中6名のみ選抜)を修了'
      ],
    },
  ],
  ko: [
    {
      category: '일본어',
      items: [
        'JPT 530점 (2026.07)',
        'JLPT N2 수준',
        '12월 JLPT N2 응시 예정'
      ],
    },
    {
      category: '영어',
      items: [
        'TOEIC 820점 (2026.04)',
        '영국·호주 근무 3년 이상'
      ],
    },
    {
      category: '중국어',
      items: [
        '신HSK 6급 220점 (2015.12)',
        '통역·강사 경험'
      ],
    },
    {
      category: '한국어',
      items: ['모국어'],
    },
    {
      category: '교원 자격',
      items: [
        '중등학교 정교사 2급 (중국어), 한국 교육부 (2019.02)',
        '교직과정 이수 (학과 정원 65명 중 6명 선발)'
      ],
    },
  ],
};
