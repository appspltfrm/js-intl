import type { IntlMap } from "./IntlMap.js";
/**
 * A translatable value as the data models store it: the bare value while only the default language is filled in, an
 * {@link IntlMap} once another language has a value. In editorial files the bare value is the default language and
 * the map is written as `{pl: "…", en: "…"}`.
 */
export type Localized<V> = V | IntlMap<V>;
