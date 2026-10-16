import React, { useEffect, useRef } from 'react';
import './TroubleshootingModal.css';
import { type TroubleshootingItem } from '../types';

interface Props {
  title: string;
  items: TroubleshootingItem[];
  labels: { close: string; problem: string; solution: string; readMore: string };
  onClose: () => void;
}

const TroubleshootingModal: React.FC<Props> = ({ title, items, labels, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // 背景(ダイアログ外)をクリックしたら閉じる
  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="ts-modal"
      aria-labelledby="ts-modal-title"
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="ts-header">
        <h3 id="ts-modal-title">{title}</h3>
        <button type="button" className="ts-close" onClick={onClose} aria-label={labels.close}>
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="ts-body">
        {items.map((item, i) => (
          <details key={i} className="ts-item">
            <summary>{item.title}</summary>
            <div className="ts-content">
              <h4>{labels.problem}</h4>
              <p>{item.problem}</p>
              <h4>{labels.solution}</h4>
              <p>{item.solution}</p>
              {item.link && (
                <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="ts-link">
                  {item.link.label ?? labels.readMore}
                  <span aria-hidden="true"> ↗</span>
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
    </dialog>
  );
};

export default TroubleshootingModal;
