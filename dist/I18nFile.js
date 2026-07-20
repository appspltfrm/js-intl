/**
 * A single translated value within an i18n file's locale data.
 * Plain strings are stored as-is; values needing ICU formatting or html
 * rendering are wrapped in {@link TextValue} / {@link HtmlValue}.
 */
export class TranslationValue {
    value;
    icu;
    constructor(value, icu = false) {
        this.value = value;
        this.icu = icu;
    }
}
export class TextValue extends TranslationValue {
    type = "text";
}
export class HtmlValue extends TranslationValue {
    type = "html";
}
//# sourceMappingURL=I18nFile.js.map