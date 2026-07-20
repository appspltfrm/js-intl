const registry = new Set();
export function registerI18nFile(file) {
    registry.add(file);
}
export function getRegisteredI18nFiles() {
    return registry;
}
//# sourceMappingURL=_i18nFilesRegistry.js.map