/**
 * src/data/index.js — agrega story/grammar/idioms por idioma.
 * getLanguageData(langCode) => { story, storyList, grammar, idioms }
 */

import { STORY as EN_STORY, STORY_LIST as EN_LIST } from './stories.en';
import { STORY as ES_STORY, STORY_LIST as ES_LIST } from './stories.es';
import { STORY as FR_STORY, STORY_LIST as FR_LIST } from './stories.fr';
import { STORY as DE_STORY, STORY_LIST as DE_LIST } from './stories.de';
import { STORY as IT_STORY, STORY_LIST as IT_LIST } from './stories.it';
import { STORY as PT_STORY, STORY_LIST as PT_LIST } from './stories.pt';

import { GRAMMAR_CHIPS as EN_GRAMMAR } from './grammar.en';
import { GRAMMAR_CHIPS as ES_GRAMMAR } from './grammar.es';
import { GRAMMAR_CHIPS as FR_GRAMMAR } from './grammar.fr';
import { GRAMMAR_CHIPS as DE_GRAMMAR } from './grammar.de';
import { GRAMMAR_CHIPS as IT_GRAMMAR } from './grammar.it';
import { GRAMMAR_CHIPS as PT_GRAMMAR } from './grammar.pt';

import { IDIOM_ENTRIES as EN_IDIOMS } from './idioms.en';
import { IDIOM_ENTRIES as ES_IDIOMS } from './idioms.es';
import { IDIOM_ENTRIES as FR_IDIOMS } from './idioms.fr';
import { IDIOM_ENTRIES as DE_IDIOMS } from './idioms.de';
import { IDIOM_ENTRIES as IT_IDIOMS } from './idioms.it';
import { IDIOM_ENTRIES as PT_IDIOMS } from './idioms.pt';

import { DIALOGUES as EN_REAL_ENGLISH } from './realEnglish.en';

/**
 * Diálogos "Inglés real" por idioma. Genérico desde ya: un idioma sin
 * archivo propio (todavía) simplemente no tiene entrada aquí y
 * getRealEnglishDialogues devuelve [] — añadir argot de otro idioma es
 * crear su realEnglish.<lang>.js y una línea aquí, nada más.
 */
const REAL_ENGLISH_BY_LANG = {
  EN: EN_REAL_ENGLISH
};

export function getRealEnglishDialogues(langCode) {
  return REAL_ENGLISH_BY_LANG[langCode] || [];
}

const DATA = {
  EN: { story: EN_STORY, storyList: EN_LIST, grammar: EN_GRAMMAR, idioms: EN_IDIOMS },
  ES: { story: ES_STORY, storyList: ES_LIST, grammar: ES_GRAMMAR, idioms: ES_IDIOMS },
  FR: { story: FR_STORY, storyList: FR_LIST, grammar: FR_GRAMMAR, idioms: FR_IDIOMS },
  DE: { story: DE_STORY, storyList: DE_LIST, grammar: DE_GRAMMAR, idioms: DE_IDIOMS },
  IT: { story: IT_STORY, storyList: IT_LIST, grammar: IT_GRAMMAR, idioms: IT_IDIOMS },
  PT: { story: PT_STORY, storyList: PT_LIST, grammar: PT_GRAMMAR, idioms: PT_IDIOMS }
};

export function getLanguageData(langCode) {
  return DATA[langCode] || DATA.EN;
}

import { STORIES as EN_A1_STORIES, FEATURED_ID as EN_A1_FEATURED_ID } from './stories/en/a1';
import { STORIES as EN_A2_STORIES, FEATURED_ID as EN_A2_FEATURED_ID } from './stories/en/a2';
import { STORIES as EN_B1_STORIES, FEATURED_ID as EN_B1_FEATURED_ID } from './stories/en/b1';

import { GRAMMAR_CHIPS as EN_A1_GRAMMAR } from './grammar/en/a1';
import { GRAMMAR_CHIPS as EN_A2_GRAMMAR } from './grammar/en/a2';
import { GRAMMAR_CHIPS as EN_B1_GRAMMAR } from './grammar/en/b1';

import { IDIOM_ENTRIES as EN_A1_IDIOMS } from './idioms/en/a1';
import { IDIOM_ENTRIES as EN_A2_IDIOMS } from './idioms/en/a2';
import { IDIOM_ENTRIES as EN_B1_IDIOMS } from './idioms/en/b1';

import { PILOTED_LANG, PILOTED_LEVELS, isPilotedLangLevel } from '@/lib/routes/langLevel';

/** EN A1/A2/B1 — único idioma con contenido partido por nivel en esta fase. */
const PILOTED_LEVEL_CONTENT = {
  EN: {
    A1: { stories: EN_A1_STORIES, featuredId: EN_A1_FEATURED_ID, grammar: EN_A1_GRAMMAR, idioms: EN_A1_IDIOMS },
    A2: { stories: EN_A2_STORIES, featuredId: EN_A2_FEATURED_ID, grammar: EN_A2_GRAMMAR, idioms: EN_A2_IDIOMS },
    B1: { stories: EN_B1_STORIES, featuredId: EN_B1_FEATURED_ID, grammar: EN_B1_GRAMMAR, idioms: EN_B1_IDIOMS }
  }
};

/**
 * getLanguageMeta(langCode) => { code, isPiloted, pilotedLevels, allStories }
 * `allStories` es la unión de TODAS las historias del idioma (todos los
 * niveles). Para EN: a1+a2+b1 concatenadas (con grammarRefs). Para el
 * resto: el storyList plano de siempre (sin grammarRefs).
 */
export function getLanguageMeta(langCode) {
  const isPiloted = langCode === PILOTED_LANG;
  const pilotedLevels = isPiloted ? PILOTED_LEVELS : [];
  const allStories = isPiloted
    ? [...EN_A1_STORIES, ...EN_A2_STORIES, ...EN_B1_STORIES]
    : getLanguageData(langCode).storyList;

  return { code: langCode, isPiloted, pilotedLevels, allStories };
}

/**
 * getLevelContent(langCode, levelCode) =>
 *   { level, isPiloted, stories, featuredStory, grammar, idioms }
 * Piloted (EN A1/A2/B1): stories/grammar/idioms reales de ese nivel.
 * No piloted: fallback exacto al comportamiento de hoy (mismo story fijo,
 * mismo grammar/idioms planos, stories filtradas por s.level === levelCode).
 */
export function getLevelContent(langCode, levelCode) {
  const legacy = getLanguageData(langCode);

  if (isPilotedLangLevel(langCode, levelCode)) {
    const content = PILOTED_LEVEL_CONTENT[langCode][levelCode];
    const featuredStory = content.stories.find((s) => s.id === content.featuredId) || content.stories[0];
    return {
      level: levelCode,
      isPiloted: true,
      stories: content.stories,
      featuredStory,
      grammar: content.grammar,
      idioms: content.idioms
    };
  }

  return {
    level: levelCode,
    isPiloted: false,
    stories: legacy.storyList.filter((s) => s.level === levelCode),
    featuredStory: legacy.story,
    grammar: legacy.grammar,
    idioms: legacy.idioms
  };
}

/**
 * getStory(langCode, storyId) => Story | undefined
 * Busca por id en TODO el idioma (todos los niveles). El caller
 * (story/[id]/page.tsx) sigue validando aparte `story.level === levelCode`.
 */
export function getStory(langCode, storyId) {
  return getLanguageMeta(langCode).allStories.find((s) => s.id === storyId);
}
