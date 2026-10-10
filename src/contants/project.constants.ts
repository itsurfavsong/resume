import { Project } from "../types";
import dgdImage from '../assets/dgd.png';
import girigiriImage from '../assets/girigiri.svg';
import soomcareImage from '../assets/soomcare.png';
import { type Lang } from './ui.constants';

const dgDelivery = {
  githubLink: 'https://github.com/rainBowRiceCakes',
  notionLink: 'https://iodized-wilderness-bba.notion.site/DGD-Daegu-Delivery-Web-PWA-2b700683cadc80a0ac15fce914a8b1d0',
  deployLink: 'https://app2.green-meerkat.kro.kr/',
  image: dgdImage,
};

const soomCare = {
  githubLink: 'https://github.com/itsurfavsong/architects',
  notionLink: 'https://iodized-wilderness-bba.notion.site/Web-PWA-2b600683cadc813eb9c7db56c2760aec?pvs=74',
  deployLink: 'https://architects-mocha.vercel.app/',
  image: soomcareImage,
};

export const projectsData: Record<Lang, Project[]> = {
  ja: [
    {
      title: 'ギリギリ(GIRIGIRI)',
      period: '2026年8月 ～ 2026年10月(完了予定)',
      team: '5名',
      role: 'Team Lead・Backend Developer',
      description: '賞味期限・消費期限が迫った商品を抱える店舗と、割引価格で購入したい利用者をつなぐWebサービスです。',
      features: [
        '地図による近隣の値引き商品検索',
        '予約・事前決済',
        'QRコード提示による店頭受け取り',
        '目標:店舗の廃棄ロス削減と、食品ロスという社会課題の解決'
      ],
      responsibilities: [
        '5名チームのリーダーとして、WBSによる進捗管理・担当割り振り、提出物・発表の取りまとめ',
        'ERD・DB設計、テーブルスキーマの実装とエンティティのマッピング、共通CRUDの実装',
        'グローバル例外ハンドラと共通レスポンスDTOによる、チーム全体の例外レスポンス形式の統一',
        '画面設計(ワイヤーフレーム)と、共通レイアウト・共通コンポーネント(モーダル・トースト・ページング・ローディング)の設計',
        'スーパー管理者機能を単独で担当(運営統計ダッシュボード、会員管理、出店申請の承認フロー、通報・問い合わせ対応、共通コード／カテゴリのマスタ管理)',
        'デモ用シードデータ投入スクリプトとREADMEの整備'
      ],
      technologies: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'MySQL'],
      tools: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs'],
      image: girigiriImage,
      imageFit: 'contain',
      imageBg: '#f6f0e3',
    },
    {
      title: 'DG Delivery',
      period: '2025年12月 ～ 2026年1月',
      team: '5名',
      role: 'Full-stack Developer',
      description: '大邱を訪れる旅行者向けのショッピング配送サービス(PWA)です。購入した商品をホテルへ配送し、手ぶらでの観光を実現します。',
      features: [
        '注文リクエスト',
        'ライダーの受注・配達',
        'パートナー精算・決済'
      ],
      responsibilities: [
        '注文リクエストからライダー受注までの注文システムの設計・実装(WebSocket導入によるリファクタリング)',
        'Rider／Partnerの役割別アクセス権限の分離と、役割に応じた注文生成・処理フローの設計',
        '注文段階ごとの権限検証と、必須証憑画像アップロードのサーバーサイド検証の実装',
        'パートナー精算・決済の自動化(billing key方式の決済とSchedulerによるバッチ処理)',
        '終了後のリファクタリング(連打防止、Middlewareによる副作用の分離、配達員1人あたりの受注上限(3件)の実装)と、技術ブログでの公開'
      ],
      technologies: ['React', 'Redux', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Node.js', 'Express.js', 'WebSocket', 'PWA'],
      ...dgDelivery,
    },
    {
      title: 'スムケア(SoomCare)',
      period: '2025年9月 ～ 2025年10月',
      team: '5名',
      role: 'Frontend Developer・Project Manager',
      description: '韓国の大気質情報(PM2.5／PM10など)をリアルタイムで可視化するWebサービス(PWA)です。カード型のダッシュボードUIを採用しています。',
      responsibilities: [
        'React・Viteによる構造設計と、共通コンポーネント・CSS変数によるUIシステムの構築',
        'リアルタイムAPIデータ処理(フィルタリング・グルーピング・ページネーション)のルール定義と、共通utilsの設計',
        'モバイル・デスクトップ向けPWAのUI/UXガイドラインの策定',
        'Notionのガントチャートによる進捗管理と、週2回の定例会議・週1回のメンター会議の運営',
        '進捗が遅れているメンバーへの1on1メンタリングと、週次フィードバック'
      ],
      technologies: ['React', 'Vite', 'JavaScript (ES6+)', 'HTML', 'CSS', 'PWA', 'Vercel'],
      ...soomCare,
    },
  ],
  ko: [
    {
      title: 'GIRIGIRI',
      period: '2026.08 - 2026.10 (완료 예정)',
      team: '5명',
      role: 'Team Lead · Backend Developer',
      description: '유통기한·소비기한이 임박한 상품을 가진 매장과, 할인가로 구매하려는 이용자를 연결하는 웹 서비스',
      features: [
        '지도로 근처 할인 상품 검색',
        '예약 및 사전 결제',
        'QR 코드 제시를 통한 매장 수령',
        '매장의 폐기 손실을 줄이고 식품 손실 문제 해결을 목표로 함'
      ],
      responsibilities: [
        '5인 팀 리더: WBS 기반 일정 관리·업무 분배, 제출물 및 발표 취합',
        'ERD·DB 설계, 테이블 스키마 및 엔티티 매핑 구현, 공통 CRUD 구현',
        '글로벌 예외 핸들러와 공통 응답 DTO로 팀 전체의 예외 응답 형식 통일',
        '화면 설계(와이어프레임), 공통 레이아웃·공통 컴포넌트(모달·토스트·페이징·로딩) 설계',
        '슈퍼 관리자 기능 단독 담당: 운영 통계 대시보드, 회원 관리, 입점 신청 승인 플로우, 신고·문의 처리, 공통 코드·카테고리 마스터 관리',
        '데모용 시드 데이터 투입 스크립트 및 README 정비'
      ],
      technologies: ['Java', 'Spring Boot', 'JPA', 'Thymeleaf', 'MySQL'],
      tools: ['GitHub', 'Notion', 'Slack', 'Jira', 'Google Docs'],
      image: girigiriImage,
      imageFit: 'contain',
      imageBg: '#f6f0e3',
    },
    {
      title: 'DG Delivery',
      period: '2025.12 - 2026.01',
      team: '5명',
      role: 'Full-stack Developer',
      description: '대구를 찾는 여행자를 위한 쇼핑 배송 서비스(PWA). 구매한 상품을 호텔로 배송해 가볍게 여행할 수 있도록 지원',
      features: [
        '주문 요청',
        '라이더 주문 수락 및 배달',
        '파트너 정산·결제'
      ],
      responsibilities: [
        '주문 요청부터 라이더 수락까지의 주문 시스템 설계·구현 (WebSocket 도입 리팩터링)',
        'Rider/Partner 역할별 접근 권한 분리, 역할에 따른 주문 생성·처리 플로우 설계',
        '주문 단계별 권한 검증, 필수 증빙 이미지 업로드의 서버 사이드 검증 구현',
        '파트너 정산·결제 자동화 (billing key 방식 결제 + Scheduler 배치 처리)',
        '종료 후 리팩터링: 중복 클릭 방지, Middleware로 부수 효과 분리, 배달원 1인당 수락 상한(3건) 구현 후 기술 블로그에 게시'
      ],
      technologies: ['React', 'Redux', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Node.js', 'Express.js', 'WebSocket', 'PWA'],
      ...dgDelivery,
    },
    {
      title: '숨케어 (SoomCare)',
      period: '2025.09 - 2025.10',
      team: '5명',
      role: 'Frontend Developer · Project Manager',
      description: '한국의 대기질 정보(PM2.5/PM10 등)를 실시간으로 시각화한 웹 서비스(PWA). 카드형 대시보드 UI 적용',
      responsibilities: [
        'React·Vite 기반 구조 설계, 공통 컴포넌트와 CSS 변수 기반 UI 시스템 구축',
        '실시간 API 데이터 처리(필터링·그룹핑·페이지네이션) 규칙 정의 및 공통 utils 설계',
        '모바일·데스크톱 PWA의 UI/UX 가이드라인 수립',
        'Notion 간트 차트로 일정 관리, 주 2회 정기 회의·주 1회 멘토 회의 운영',
        '진행이 늦은 팀원 대상 1:1 멘토링 및 주간 피드백'
      ],
      technologies: ['React', 'Vite', 'JavaScript (ES6+)', 'HTML', 'CSS', 'PWA', 'Vercel'],
      ...soomCare,
    },
  ],
};
