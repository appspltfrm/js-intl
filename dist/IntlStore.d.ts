/**
 * An object, whose keys are locales.
 */
export interface IntlStore<V = string> {
    [locale: string]: V;
}
export declare namespace IntlStore {
    function value<V>(value: IntlStore<V>, locale?: string): V | undefined;
    function clone<V>(value: IntlStore<V>): IntlStore<V>;
}
