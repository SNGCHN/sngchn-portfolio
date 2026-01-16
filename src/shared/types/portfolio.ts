/**
 * @description 포트폴리오 데이터의 카테고리 타입
 */
export type SidebarContentType = "project" | "journey" | "about";

/**
 * @description 외부 연결 링크 (버튼, 아이콘 등)의 공통 인터페이스
 */
export interface ProjectLink {
  label: string; // 버튼 라벨 (예: "View Project", "Download CV")
  href: string; // 연결 주소
  primary?: boolean; // 강조 강조 스타일 적용 여부
  secondary?: boolean; // 보조 스타일 적용 여부
}

/**
 * @description 모든 포트폴리오 데이터 항목이 가져야 할 기본 구조
 */
export interface BasePortfolioData {
  id: string; // 고유 식별자 (예: "PROJECT_01", "ABOUT")
  title: string; // 메인 제목
  category: string; // 소분류 (예: "Frontend Developer", "Web Design")
  description: string; // 요약 설명
  details: string; // 상세 정보 (장문 텍스트)
  links: ProjectLink[]; // 관련 리소스 링크 목록
}

/**
 * @description 프로젝트 섹션 전용 데이터 타입
 */
export interface ProjectData extends BasePortfolioData {
  type: "project";
  image: string; // 대표 이미지 경로
  tags?: string[]; // 사용 기술 태그 (예: "React", "Next.js")
}

/**
 * @description 경력/경험(Journey) 섹션 전용 데이터 타입
 */
export interface JourneyData extends BasePortfolioData {
  type: "journey";
  date: string; // 기간 (예: "2023 - 2024")
  tech?: string[]; // 주요 사용 기술
  keywords?: string[]; // 핵심 키워드 (예: "PMING", "Design")
  achievements?: { title: string; desc: string }[]; // 주요 성과 목록
}

/**
 * @description '자기소개(About)' 섹션 전용 데이터 타입
 */
export interface AboutData extends BasePortfolioData {
  type: "about";
  tech: string[]; // 보유 기술 스택
  keywords: string[]; // 전문 분야 키워드
  achievements?: { title: string; desc: string }[]; // 수상 경력 등 주요 이력
}

/**
 * @description 상세 사이드바에 전달되는 통합 데이터 컨테이너
 */
export type SidebarContent = {
  type: SidebarContentType;
  data: ProjectData | JourneyData | AboutData;
};

/**
 * @description 사이드바 오픈을 위한 전역 커스텀 이벤트 객체 타입
 */
export interface DetailEvent extends CustomEvent {
  detail: SidebarContent;
}

/**
 * @description 애플리케이션 테마 테마 (Light/Dark)
 */
export type Theme = "light" | "dark";
