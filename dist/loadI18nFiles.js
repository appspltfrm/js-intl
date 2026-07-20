import { getRegisteredI18nFiles } from "./_i18nFilesRegistry.js";
/**
 * Loads locale data of every {@link I18nFile} created so far — call after
 * a locale switch so all already-imported translations are available.
 */
export async function loadI18nFiles(context) {
    await Promise.all([...getRegisteredI18nFiles()].map((file) => file.load(context)));
}
//# sourceMappingURL=loadI18nFiles.js.map