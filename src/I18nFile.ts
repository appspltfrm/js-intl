import {IntlContext} from "./IntlContext.js";

/**
 * A single translated value within an i18n file's locale data.
 * Plain strings are stored as-is; values needing ICU formatting or html
 * rendering are wrapped in {@link TextValue} / {@link HtmlValue}.
 */
export abstract class TranslationValue {

  constructor(public readonly value: string, public readonly icu: boolean = false) {
  }

  abstract readonly type: "text" | "html";
}

export class TextValue extends TranslationValue {
  readonly type = "text";
}

export class HtmlValue extends TranslationValue {
  readonly type = "html";
}

export type I18nFileKeys = {[key: string]: Function};

export type I18nFileData = {[key: string]: string | TranslationValue};

export type I18nFileImporter = (locale: string) => Promise<I18nFileData>;

/**
 * Runtime handle for one generated `*.i18n.ts` module (one `*.i18n.html` source).
 * Locale data is loaded lazily per locale via the importer and cached.
 */
export interface I18nFile<Keys extends I18nFileKeys = I18nFileKeys> {

  readonly keys: Keys;

  load(context?: IntlContext): Promise<this>;

  loaded(context?: IntlContext): boolean;
}
