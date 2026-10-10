import { Job } from "../types";
import { type Lang } from './ui.constants';

export const experienceData: Record<Lang, Job[]> = {
  ja: [
    {
      title: '正社員',
      company: 'Flipside Distribution Pty Ltd(豪州・メルボルン)',
      duration: '2024年5月 ～ 2025年3月',
      responsibilities: [
        'Carhartt WIP商品の販売を担当しました。',
        '英語での接客を行いました。',
        'クレーム対応を行いました。'
      ],
    },
    {
      title: '正社員・海外事業部',
      company: 'AOMG Ltd(韓国・ソウル)',
      duration: '2023年9月 ～ 2024年4月',
      responsibilities: [
        '海外イベント・ツアーの企画・運営を支援しました。',
        'マーケティング戦略の立案を担当しました。',
        'SNS運用とコンテンツ企画を行いました。',
        '市場・競合分析を行いました。',
        '契約・スケジュール管理を担当しました。',
        '宣材のデザインを担当しました。',
        'メディアとの調整を行いました。'
      ],
    },
    {
      title: '正社員',
      company: 'END(英国・ロンドン)',
      duration: '2023年1月 ～ 2023年6月',
      responsibilities: [
        '中国語圏のお客様への対応で、通訳をサポートしました。',
        '英語・中国語のマニュアルを翻訳しました。',
        'CS研修を実施しました。',
        '電話・問い合わせ対応を行いました。'
      ],
    },
    {
      title: '正社員',
      company: 'Carhartt Work In Progress(英国・ロンドン)',
      duration: '2021年9月 ～ 2023年1月',
      responsibilities: [
        '英語での接客・商品提案を行いました。',
        'クレーム・特別リクエストに対応しました。'
      ],
    },
    {
      title: '契約社員(週末勤務)',
      company: 'adidas(韓国・ソウル)',
      duration: '2020年2月 ～ 2021年7月',
      responsibilities: [
        '韓国語・中国語の通訳を担当しました。',
        '接客・販売を行いました。',
        '陳列と在庫整理を行いました。'
      ],
    },
    {
      title: '中国語講師',
      company: 'フリーランス',
      duration: '2019年12月 ～ 2021年7月',
      responsibilities: [
        '社会人向けに1対1で指導しました(受講生3名、週3回・夜間)。',
        'レッスンの設計と教材作成を行いました。'
      ],
    },
    {
      title: '契約社員',
      company: '延世大学(韓国・ソウルの私立総合大学)',
      duration: '2019年12月 ～ 2020年11月',
      responsibilities: [
        '一般事務を担当しました。',
        'イベントの企画・運営を行いました。',
        '予約・会議の手配を行いました。',
        'データ管理を担当しました。',
        '部門間のサポートを行いました。'
      ],
    }
  ],
  ko: [
    {
      title: '정규직',
      company: 'Flipside Distribution Pty Ltd (호주·멜버른)',
      duration: '2024.05 - 2025.03',
      responsibilities: [
        'Carhartt WIP 상품 판매',
        '영어 고객 응대',
        '클레임 처리'
      ],
    },
    {
      title: '정규직 · 해외사업부',
      company: 'AOMG Ltd (한국·서울)',
      duration: '2023.09 - 2024.04',
      responsibilities: [
        '해외 이벤트·투어 기획 및 운영 지원',
        '마케팅 전략 수립',
        'SNS 운영 및 콘텐츠 기획',
        '시장·경쟁사 분석',
        '계약 및 일정 관리',
        '홍보물 디자인',
        '미디어 협의'
      ],
    },
    {
      title: '정규직',
      company: 'END (영국·런던)',
      duration: '2023.01 - 2023.06',
      responsibilities: [
        '중국어권 고객 응대 시 통역 지원',
        '영어·중국어 매뉴얼 번역',
        'CS 교육 진행',
        '전화·문의 응대'
      ],
    },
    {
      title: '정규직',
      company: 'Carhartt Work In Progress (영국·런던)',
      duration: '2021.09 - 2023.01',
      responsibilities: [
        '영어 고객 응대 및 상품 제안',
        '클레임·특별 요청 처리'
      ],
    },
    {
      title: '계약직 (주말 근무)',
      company: 'adidas (한국·서울)',
      duration: '2020.02 - 2021.07',
      responsibilities: [
        '한국어·중국어 통역',
        '고객 응대 및 판매',
        '진열 및 재고 정리'
      ],
    },
    {
      title: '중국어 강사',
      company: '프리랜서',
      duration: '2019.12 - 2021.07',
      responsibilities: [
        '직장인 대상 1:1 수업 (수강생 3명, 주 3회 야간)',
        '수업 구성 및 교재 제작'
      ],
    },
    {
      title: '계약직',
      company: '연세대학교 (한국·서울)',
      duration: '2019.12 - 2020.11',
      responsibilities: [
        '일반 사무',
        '행사 기획·운영',
        '예약 및 회의 준비',
        '데이터 관리',
        '부서 간 업무 지원'
      ],
    }
  ]
};
