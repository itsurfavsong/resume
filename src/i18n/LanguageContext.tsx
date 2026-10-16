import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { uiText, type Lang, type UiText } from '../contants/ui.constants';

const STORAGE_KEY = 'portfolio-lang';

// 韓国語版を公開するときは true にする(ナビゲーションの切替ボタンが表示される)
export const LANG_SWITCH_ENABLED = true;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: UiText;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// 初回訪問時は日本語を表示し、切替ボタンが有効なときは選択した言語を記憶する
const getInitialLang = (): Lang => {
  if (!LANG_SWITCH_ENABLED) return 'ja';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ja' || saved === 'ko') return saved;
  } catch {
    // localStorage が使えない環境では既定値を使う
  }
  return 'ja';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // 保存できなくても動作に影響しない
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: uiText[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
