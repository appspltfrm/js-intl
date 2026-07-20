import type {I18nFile} from "./I18nFile.js";

const registry = new Set<I18nFile<any>>();

export function registerI18nFile(file: I18nFile<any>): void {
  registry.add(file);
}

export function getRegisteredI18nFiles(): ReadonlySet<I18nFile<any>> {
  return registry;
}
