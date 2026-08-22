'use client';

import { pastel, fg } from '@/theme/color';
import { useReader } from '@/state/ReaderContext';
import { speakSentence, cancelSpeech } from '@/lib/azure/tts';

/**
 * src/components/Phrases/PlayButton.jsx
 * Pastilla redonda de escuchar — la misma pastilla que usan los párrafos del
 * relato (StoryReader), solo más pequeña (§2 linguatales-conectores-spec.md).
 * Comparte el estado `playing` del contexto: solo una puede sonar a la vez,
 * en toda la página — párrafos del relato (índice numérico), frases
 * ('ph'+i), contestaciones ('re'+i) y el juego 08 ('sph') conviven en el
 * mismo valor porque nunca coinciden entre sí.
 */
export default function PlayButton({ id, text, color, size = 24 }) {
  const { lang, playing, setPlaying } = useReader();
  const isPlaying = playing === id;
  const restBg = pastel(color, 0.82);

  const handleClick = async () => {
    cancelSpeech();
    if (isPlaying) {
      setPlaying(null);
      return;
    }
    setPlaying(id);
    try {
      await speakSentence(text, { lang });
    } catch {
      // cancelada (se pulsó otra pastilla) o sin soporte: no hay más que hacer
    }
    setPlaying((current) => (current === id ? null : current));
  };

  return (
    <button
      aria-label={isPlaying ? 'Detener' : 'Escuchar'}
      onClick={handleClick}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        border: isPlaying ? 'none' : `1px solid ${pastel(color, 0.5)}`,
        background: isPlaying ? color : restBg,
        boxShadow: isPlaying ? `0 0 0 4px ${color}24` : 'none',
        color: isPlaying ? '#fffdf7' : fg(color, restBg, 4.6),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: Math.round(size * 0.42),
        padding: 0,
        cursor: 'pointer',
        transition: 'box-shadow .2s, background .12s'
      }}
    >
      {isPlaying ? '■' : '▶'}
    </button>
  );
}
