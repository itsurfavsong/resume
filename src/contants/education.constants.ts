import { type EducationEntry } from '../types/education.types';

export const educationData: EducationEntry[] = [
  {
    // degree: 'Bachelor of arts',
    major: 'Chinese Language and Literature',
    university: '계명대학교',
    duration: '2015.03 - 2019.02',
    details: [
      '제2 외국어로서의 중국어 교육, 중국 문학 등 전공 과목 이수',
      '교원 자격증 취득'
    ]
  },
  {
    // degree: 'Bachelor of arts',
    major: '기업요구 프로젝트 중심 풀스택 개발자',
    university: '그린컴퓨터아트학원',
    duration: '2025.08 - 2026.02',
    details: [
      'React로 컴포넌트 기반 UI 개발',
      'Node.js와 Express로 API 서버 구축',
      'MySQL을 활용한 데이터 관리 기능 구현',
      'PWA를 활용한 모바일 친화적인 웹앱 개발'
    ]
  }
];