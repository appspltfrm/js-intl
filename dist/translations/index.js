import { TranslationsCollection } from "../TranslationsCollection.js";
const importer = async (locale) => {
    switch (locale) {
        case "cs": return (await import("./cs.js")).default;
        case "da": return (await import("./da.js")).default;
        case "de": return (await import("./de.js")).default;
        case "el": return (await import("./el.js")).default;
        case "en": return (await import("./en.js")).default;
        case "es": return (await import("./es.js")).default;
        case "fi": return (await import("./fi.js")).default;
        case "fr": return (await import("./fr.js")).default;
        case "hr": return (await import("./hr.js")).default;
        case "hu": return (await import("./hu.js")).default;
        case "it": return (await import("./it.js")).default;
        case "nl": return (await import("./nl.js")).default;
        case "pl": return (await import("./pl.js")).default;
        case "pt": return (await import("./pt.js")).default;
        case "ro": return (await import("./ro.js")).default;
        case "ru": return (await import("./ru.js")).default;
        case "sk": return (await import("./sk.js")).default;
        case "sl": return (await import("./sl.js")).default;
        case "sv": return (await import("./sv.js")).default;
        case "uk": return (await import("./uk.js")).default;
        default: return {};
    }
};
export default TranslationsCollection.defineCollection("shared", importer);
//# sourceMappingURL=index.js.map