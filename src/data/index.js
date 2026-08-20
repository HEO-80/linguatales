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
