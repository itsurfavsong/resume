import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// 言語ごとの習熟度の推移(イメージ)。値は厳密な測定ではなく、学習の流れを表した曲線
const X_MIN = 2011;
const X_MAX = 2026.9;
const PLOT = { left: 96, right: 768, top: 96, bottom: 500 };
const X_TICKS = [2011, 2015, 2019, 2023, 2026];
const Y_TICKS = [0, 20, 40, 60, 80, 100];

const x = (year: number) =>
  PLOT.left + ((year - X_MIN) / (X_MAX - X_MIN)) * (PLOT.right - PLOT.left);
const y = (value: number) =>
  PLOT.bottom - (value / 100) * (PLOT.bottom - PLOT.top);

interface Series {
  key: 'chinese' | 'english' | 'japanese' | 'programming';
  color: string;
  start: number;
  base: number;
  top: number;
  mid: number;
  steep: number;
}

const series: Series[] = [
  {
    key: 'chinese',
    color: '#c84347',
    start: 2011,
    base: 3,
    top: 85,
    mid: 2019,
    steep: 0.65,
  },
  {
    key: 'english',
    color: '#4e7caf',
    start: 2019,
    base: 3,
    top: 82,
    mid: 2023.4,
    steep: 0.9,
  },
  {
    key: 'programming',
    color: '#e9bd20',
    start: 2025,
    base: 3,
    top: 70,
    mid: 2025.9,
    steep: 3.2,
  },
  {
    key: 'japanese',
    color: '#3f9a63',
    start: 2026,
    base: 3,
    top: 48,
    mid: 2026.4,
    steep: 3.2,
  },
];

const sigmoid = (t: number) => 1 / (1 + Math.exp(-t));

const buildPath = (s: Series): string => {
  const f = (year: number) => sigmoid((year - s.mid) * s.steep);
  const f0 = f(s.start);
  const f1 = f(X_MAX);
  const points: string[] = [];
  const step = 0.05;
  for (let year = s.start; year <= X_MAX + 1e-9; year += step) {
    const yr = Math.min(year, X_MAX);
    const value = s.base + ((f(yr) - f0) / (f1 - f0)) * (s.top - s.base);
    points.push(`${x(yr).toFixed(1)} ${y(value).toFixed(1)}`);
  }
  return `M${points.join(' L')}`;
};

const labels = {
  ja: {
    title: '言語とともに歩んだ軌跡',
    yAxis: '習熟度（%）',
    chinese: '中国語',
    english: '英語',
    japanese: '日本語',
    programming: 'プログラミング言語',
  },
  ko: {
    title: '언어와 함께한 나의 시간',
    yAxis: '숙련도 (%)',
    chinese: '중국어',
    english: '영어',
    japanese: '일본어',
    programming: '프로그래밍 언어',
  },
};

const LEGEND_ORDER: Series['key'][] = [
  'chinese',
  'english',
  'japanese',
  'programming',
];

const LanguageGraph: React.FC = () => {
  const { lang, t } = useLanguage();
  const text = labels[lang];
  return (
    <svg
      className="language-graph"
      viewBox="0 0 800 640"
      role="img"
      aria-label={t.aboutImageAlt}
    >
      <rect width="800" height="640" fill="#fffdf8" />
      <text x="400" y="52" textAnchor="middle" className="lg-title">
        {text.title}
      </text>

      {Y_TICKS.map((tick) => (
        <g key={tick}>
          <line
            x1={PLOT.left}
            x2={PLOT.right}
            y1={y(tick)}
            y2={y(tick)}
            className="lg-grid"
          />
          <text
            x={PLOT.left - 12}
            y={y(tick) + 7}
            textAnchor="end"
            className="lg-tick"
          >
            {tick}
          </text>
        </g>
      ))}
      {X_TICKS.map((tick) => (
        <g key={tick}>
          <line
            x1={x(tick)}
            x2={x(tick)}
            y1={PLOT.top}
            y2={PLOT.bottom}
            className="lg-grid"
          />
          <text
            x={x(tick)}
            y={PLOT.bottom + 32}
            textAnchor="middle"
            className="lg-tick"
          >
            {tick}
          </text>
        </g>
      ))}
      <line
        x1={PLOT.left}
        x2={PLOT.left}
        y1={PLOT.top}
        y2={PLOT.bottom}
        className="lg-axis"
      />
      <line
        x1={PLOT.left}
        x2={PLOT.right}
        y1={PLOT.bottom}
        y2={PLOT.bottom}
        className="lg-axis"
      />
      <text
        transform={`translate(26 ${(PLOT.top + PLOT.bottom) / 2}) rotate(-90)`}
        textAnchor="middle"
        className="lg-axis-label"
      >
        {text.yAxis}
      </text>

      {series.map((s) => (
        <path
          key={s.key}
          d={buildPath(s)}
          fill="none"
          stroke={s.color}
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {LEGEND_ORDER.map((key, i) => {
        const s = series.find((item) => item.key === key)!;
        const lx = i % 2 === 0 ? 130 : 420;
        const ly = 566 + Math.floor(i / 2) * 44;
        return (
          <g key={key}>
            <rect
              x={lx}
              y={ly - 9}
              width={34}
              height={14}
              rx={7}
              fill={s.color}
            />
            <text x={lx + 48} y={ly + 4} className="lg-legend">
              {text[key]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default LanguageGraph;
