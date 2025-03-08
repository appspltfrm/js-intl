export function getBrowserLocales() {
    const locales: string[] = [];
    for (const locale of window.navigator.languages) {
        const parts = locale.split(/-|_/);
        for (let i = 0; i < parts.length; i++) {
            locales.push(parts.slice(0, i + 1).join("-"));
        }
    }

    return locales.filter((l, i, a) => a.indexOf(l) === i).slice(0, 10);
}
