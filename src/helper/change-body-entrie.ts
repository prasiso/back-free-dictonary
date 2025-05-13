import { WordEntry } from 'src/services/free-dictionary/interface/dictionary';

export function change_body_entrie(resp: WordEntry): any {
  const meanings = resp.meanings
    .map((dt) => {
      return dt.definitions.map((def) => ({
        speach: dt.partOfSpeech,
        definition: def.definition,
      }));
    })
    .flat();
  const data = {
    word: resp.word,
    phonetic: resp.phonetic,
    audio: resp.phonetics.find((audio) => audio.audio),
    meanings,
  };
  return data;
}
