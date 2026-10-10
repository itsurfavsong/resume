export type Lang = 'ja' | 'ko';

export interface UiText {
  heroBadge: string;
  heroLine1: string;
  heroLine2: string;
  heroDescription: [string, string];
  viewProjects: string;
  contactCta: string;
  cvDownload: string;
  backToTop: string;
  aboutTitle: string;
  aboutFormula: string;
  experienceTitle: string;
  educationTitle: string;
  skillsTitle: string;
  certificationsTitle: string;
  projectsTitle: string;
  contactTitle: string;
  contactDescription: string;
  caseStudy: string;
  teamLabel: string;
  roleLabel: string;
  featuresLabel: string;
  responsibilitiesLabel: string;
  toolsLabel: string;
  velog: string;
  menuLabel: string;
  navLabel: string;
  aboutImageAlt: string;
  contactEmailLabel: string;
  switchAria: string;
}

export const uiText: Record<Lang, UiText> = {
  ja: {
    heroBadge: 'フルスタックエンジニア',
    heroLine1: 'はじめまして！',
    heroLine2: 'ソン・ボミと申します。',
    heroDescription: [
      '人々の生活をもっと便利にする',
      'Webサービスを作るフルスタックエンジニアです。',
    ],
    viewProjects: '制作実績を見る',
    contactCta: 'お問い合わせ',
    cvDownload: '履歴書をダウンロード',
    backToTop: 'ページの先頭へ戻る',
    aboutTitle: 'About Me',
    aboutFormula: 'f(ソン・ボミ) = 言語',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    certificationsTitle: 'Certifications',
    projectsTitle: 'Projects',
    contactTitle: 'Contact',
    contactDescription: '詳しいお話を伺いたい方は、お気軽にご連絡ください。',
    caseStudy: 'ケーススタディ',
    teamLabel: 'チーム',
    roleLabel: '役割',
    featuresLabel: '主な機能',
    responsibilitiesLabel: '担当',
    toolsLabel: '協業',
    velog: 'Velog',
    menuLabel: 'メニューを開閉する',
    navLabel: 'メインナビゲーション',
    aboutImageAlt: '言語習熟度の推移グラフ(中国語・英語・プログラミング言語)',
    contactEmailLabel: 'メール',
    switchAria: '韓国語に切り替える',
  },
  ko: {
    heroBadge: '풀스택 개발자',
    heroLine1: '반가워요!',
    heroLine2: '송보미입니다.',
    heroDescription: [
      '사용자가 편하게 사용할 수 있는',
      '웹 서비스를 만드는 풀스택 웹 개발자입니다.',
    ],
    viewProjects: '프로젝트 보기',
    contactCta: '연락하기',
    cvDownload: '이력서 다운로드 (일본어)',
    backToTop: '맨 위로 이동',
    aboutTitle: 'About Me',
    aboutFormula: 'f(송보미) = 언어',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    certificationsTitle: 'Certifications',
    projectsTitle: 'Projects',
    contactTitle: 'Contact Me',
    contactDescription:
      '더 자세한 이야기를 나누고 싶으시다면, 편하게 연락 주세요!',
    caseStudy: 'Case Study',
    teamLabel: '팀',
    roleLabel: '역할',
    featuresLabel: '주요 기능',
    responsibilitiesLabel: '담당',
    toolsLabel: '협업',
    velog: 'Velog.io',
    menuLabel: '메뉴 열기/닫기',
    navLabel: '메인 내비게이션',
    aboutImageAlt: '언어 숙련도 변화 그래프 (중국어, 영어, 프로그래밍 언어)',
    contactEmailLabel: '이메일',
    switchAria: '일본어로 전환',
  },
};
