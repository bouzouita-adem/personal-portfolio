import React, { useState, useEffect, useCallback } from 'react';

/**
 * CalculatriceWidget - Browser Calculator with French UI & Glassmorphism
 * 
 * Features:
 * - Frosted-glass UI with teal & warm orange accent buttons
 * - Auto-scaling display font size to prevent overflow
 * - Interactive calculation history tape
 * - Full keyboard support (0-9, +, -, *, /, Enter, Backspace, Escape)
 */
export default function CalculatriceWidget() {
  const [currentVal, setCurrentVal] = useState('992');
  const [historyVal, setHistoryVal] = useState('124 × 8');
  const [justCalculated, setJustCalculated] = useState(false);

  const handleInput = useCallback((key) => {
    if (key === 'C') {
      setCurrentVal('0');
      setHistoryVal('');
      setJustCalculated(false);
      return;
    }

    if (key === '±') {
      setCurrentVal((prev) => {
        if (prev === '0' || prev === 'Erreur') return prev;
        return prev.startsWith('-') ? prev.slice(1) : '-' + prev;
      });
      return;
    }

    if (key === '%') {
      setCurrentVal((prev) => {
        const num = parseFloat(prev);
        if (isNaN(num)) return prev;
        return String(num / 100);
      });
      return;
    }

    if (key === '=') {
      if (!historyVal || justCalculated) return;
      try {
        const expr = (historyVal + ' ' + currentVal)
          .replace(/×/g, '*')
          .replace(/÷/g, '/');
        // Safe evaluation of standard arithmetic expressions
        // eslint-disable-next-line no-new-func
        const res = Function(`"use strict"; return (${expr})`)();
        const formatted = Number.isFinite(res) ? String(Math.round(res * 1e8) / 1e8) : 'Erreur';
        setHistoryVal(`${historyVal} ${currentVal} =`);
        setCurrentVal(formatted);
        setJustCalculated(true);
      } catch (err) {
        setCurrentVal('Erreur');
      }
      return;
    }

    if (['+', '-', '×', '÷'].includes(key)) {
      setHistoryVal(`${currentVal} ${key}`);
      setCurrentVal('0');
      setJustCalculated(false);
      return;
    }

    // Numbers and decimal comma
    if (key === '.' || key === ',') {
      if (justCalculated) {
        setCurrentVal('0.');
        setHistoryVal('');
        setJustCalculated(false);
        return;
      }
      if (!currentVal.includes('.')) {
        setCurrentVal((prev) => prev + '.');
      }
      return;
    }

    // Digit 0-9
    if (justCalculated) {
      setCurrentVal(key);
      setHistoryVal('');
      setJustCalculated(false);
      return;
    }

    setCurrentVal((prev) => {
      if (prev === '0' || prev === 'Erreur') return key;
      if (prev.length >= 12) return prev; // Limit to 12 digits
      return prev + key;
    });
  }, [currentVal, historyVal, justCalculated]);

  // Keyboard navigation listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      // Don't intercept if user is typing into an input/textarea in the contact form
      if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key >= '0' && e.key <= '9') {
        handleInput(e.key);
      } else if (e.key === '+') {
        handleInput('+');
      } else if (e.key === '-') {
        handleInput('-');
      } else if (e.key === '*' || e.key === 'x') {
        handleInput('×');
      } else if (e.key === '/') {
        handleInput('÷');
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        handleInput('=');
      } else if (e.key === 'Backspace') {
        setCurrentVal((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      } else if (e.key === 'Escape') {
        handleInput('C');
      } else if (e.key === '.' || e.key === ',') {
        handleInput('.');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleInput]);

  // Auto font-size scaling based on length
  const getDisplayFontSize = (text) => {
    if (text.length > 10) return 'text-lg';
    if (text.length > 7) return 'text-xl';
    return 'text-headline-sm';
  };

  return (
    <div
      id="calc-preview"
      className="w-full bg-surface-container-lowest/80 border border-outline-variant/30 rounded-xl p-space-md flex flex-col gap-space-sm shadow-inner backdrop-blur-xl"
    >
      {/* Display Screen */}
      <div className="flex flex-col items-end justify-center bg-surface-container/60 px-space-md py-space-sm rounded-lg min-h-[64px] border border-outline-variant/20 shadow-inner">
        <span className="font-code-mono-sm text-[11px] text-outline h-4">
          {historyVal}
        </span>
        <span
          className={`font-headline-sm ${getDisplayFontSize(currentVal)} text-primary font-bold tracking-wider transition-all duration-150`}
        >
          {currentVal.replace('.', ',')}
        </span>
      </div>

      {/* Calculator Buttons Grid */}
      <div className="grid grid-cols-4 gap-1.5 text-center font-code-mono-sm text-code-mono-sm select-none">
        {/* Row 1 */}
        <button
          type="button"
          onClick={() => handleInput('C')}
          className="h-10 rounded-md bg-surface-variant/60 text-error font-bold active:scale-95 hover:bg-surface-variant transition-all focus:outline-none focus:ring-1 focus:ring-error"
        >
          C
        </button>
        <button
          type="button"
          onClick={() => handleInput('±')}
          className="h-10 rounded-md bg-surface-variant/40 text-on-surface active:scale-95 hover:bg-surface-variant transition-all focus:outline-none"
        >
          ±
        </button>
        <button
          type="button"
          onClick={() => handleInput('%')}
          className="h-10 rounded-md bg-surface-variant/40 text-on-surface active:scale-95 hover:bg-surface-variant transition-all focus:outline-none"
        >
          %
        </button>
        <button
          type="button"
          onClick={() => handleInput('÷')}
          className="h-10 rounded-md bg-secondary-container/30 text-secondary font-bold active:scale-95 hover:bg-secondary-container/50 transition-all focus:outline-none"
        >
          ÷
        </button>

        {/* Row 2 */}
        <button
          type="button"
          onClick={() => handleInput('7')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          7
        </button>
        <button
          type="button"
          onClick={() => handleInput('8')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => handleInput('9')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          9
        </button>
        <button
          type="button"
          onClick={() => handleInput('×')}
          className="h-10 rounded-md bg-secondary-container/30 text-secondary font-bold active:scale-95 hover:bg-secondary-container/50 transition-all focus:outline-none"
        >
          ×
        </button>

        {/* Row 3 */}
        <button
          type="button"
          onClick={() => handleInput('4')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          4
        </button>
        <button
          type="button"
          onClick={() => handleInput('5')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          5
        </button>
        <button
          type="button"
          onClick={() => handleInput('6')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          6
        </button>
        <button
          type="button"
          onClick={() => handleInput('-')}
          className="h-10 rounded-md bg-secondary-container/30 text-secondary font-bold active:scale-95 hover:bg-secondary-container/50 transition-all focus:outline-none"
        >
          −
        </button>

        {/* Row 4 */}
        <button
          type="button"
          onClick={() => handleInput('1')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => handleInput('2')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          2
        </button>
        <button
          type="button"
          onClick={() => handleInput('3')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          3
        </button>
        <button
          type="button"
          onClick={() => handleInput('+')}
          className="h-10 rounded-md bg-secondary-container/30 text-secondary font-bold active:scale-95 hover:bg-secondary-container/50 transition-all focus:outline-none"
        >
          +
        </button>

        {/* Row 5 */}
        <button
          type="button"
          onClick={() => handleInput('0')}
          className="col-span-2 h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          0
        </button>
        <button
          type="button"
          onClick={() => handleInput('.')}
          className="h-10 rounded-md bg-surface-container-high text-on-surface active:scale-95 hover:bg-surface-bright transition-all focus:outline-none"
        >
          ,
        </button>
        <button
          type="button"
          onClick={() => handleInput('=')}
          className="h-10 rounded-md bg-primary text-on-primary font-bold active:scale-95 hover:bg-primary-fixed shadow-[0_0_12px_rgba(79,219,200,0.35)] transition-all focus:outline-none"
        >
          =
        </button>
      </div>

      <div className="flex items-center justify-between text-[10px] font-code-mono-sm text-outline pt-1">
        <span>FR / Écoute clavier active</span>
        <span>Esc pour reset</span>
      </div>
    </div>
  );
}
