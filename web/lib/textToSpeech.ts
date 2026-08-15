export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
  voiceName?: string;
}

export interface SpeechVoice {
  name: string;
  lang: string;
  default: boolean;
  localService: boolean;
}

function getSpeechSynthesis(): SpeechSynthesis | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (!("speechSynthesis" in window)) {
    return null;
  }

  return window.speechSynthesis;
}

export function isTextToSpeechSupported(): boolean {
  return getSpeechSynthesis() !== null;
}

export function getSpeechVoices(): SpeechVoice[] {
  const synthesis = getSpeechSynthesis();

  if (!synthesis) {
    return [];
  }

  return synthesis.getVoices().map((voice) => ({
    name: voice.name,
    lang: voice.lang,
    default: voice.default,
    localService: voice.localService,
  }));
}

export function speakText(
  text: string,
  options: SpeechOptions = {},
): boolean {
  const synthesis = getSpeechSynthesis();

  if (!synthesis || !text.trim()) {
    return false;
  }

  synthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    text.trim(),
  );

  utterance.rate = Math.min(
    2,
    Math.max(0.1, options.rate ?? 1),
  );

  utterance.pitch = Math.min(
    2,
    Math.max(0, options.pitch ?? 1),
  );

  utterance.volume = Math.min(
    1,
    Math.max(0, options.volume ?? 1),
  );

  if (options.lang?.trim()) {
    utterance.lang = options.lang.trim();
  }

  if (options.voiceName?.trim()) {
    const voice = synthesis
      .getVoices()
      .find(
        (item) =>
          item.name === options.voiceName,
      );

    if (voice) {
      utterance.voice = voice;
    }
  }

  synthesis.speak(utterance);

  return true;
}

export function pauseSpeech(): boolean {
  const synthesis = getSpeechSynthesis();

  if (!synthesis) {
    return false;
  }

  if (synthesis.speaking) {
    synthesis.pause();
    return true;
  }

  return false;
}

export function resumeSpeech(): boolean {
  const synthesis = getSpeechSynthesis();

  if (!synthesis) {
    return false;
  }

  if (synthesis.paused) {
    synthesis.resume();
    return true;
  }

  return false;
}

export function stopSpeech(): boolean {
  const synthesis = getSpeechSynthesis();

  if (!synthesis) {
    return false;
  }

  synthesis.cancel();

  return true;
}

export function isSpeechSpeaking(): boolean {
  const synthesis = getSpeechSynthesis();

  return synthesis?.speaking ?? false;
}

export function isSpeechPaused(): boolean {
  const synthesis = getSpeechSynthesis();

  return synthesis?.paused ?? false;
}

export function loadSpeechVoices(): Promise<
  SpeechVoice[]
> {
  const synthesis = getSpeechSynthesis();

  if (!synthesis) {
    return Promise.resolve([]);
  }

  const existing = synthesis.getVoices();

  if (existing.length > 0) {
    return Promise.resolve(
      getSpeechVoices(),
    );
  }

  return new Promise((resolve) => {
    const handleVoicesChanged = () => {
      synthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged,
      );

      resolve(getSpeechVoices());
    };

    synthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged,
    );

    window.setTimeout(() => {
      synthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged,
      );

      resolve(getSpeechVoices());
    }, 2000);
  });
}
