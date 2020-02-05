import { languageMap } from "./laguages";

const translationKeyMap = {
  clear: "clear",
  start: "start",
  pause: "pause",
  abort: "abort",
};

const en = {
  [translationKeyMap.clear]: "Clear",
  [translationKeyMap.start]: "Start",
  [translationKeyMap.pause]: "Pause",
  [translationKeyMap.abort]: "Abort",
};

const ru = {
  [translationKeyMap.clear]: "Очистить",
  [translationKeyMap.start]: "Начать",
  [translationKeyMap.pause]: "Остановить",
  [translationKeyMap.abort]: "Прервать",
};

const translationMap = {
  [languageMap.en]: en,
  [languageMap.ru]: ru,
};

export { translationKeyMap, translationMap };
