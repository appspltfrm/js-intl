import {getGlobalValuesVersions} from "./getGlobalValuesVersions.js";

export function deleteGlobalValuesVersion(versionName: string): void;

export function deleteGlobalValuesVersion(versionName: string, namespace: string): void;

export function deleteGlobalValuesVersion(versionName: string, namespace?: string): void {
    const versions = getGlobalValuesVersions();

    for (const ns in versions) {
        if (!namespace || ns === namespace) {
            for (let i = 0; i < versions[ns].length; i++) {
                if (versions[ns][i].name === versionName) {
                    versions[ns].splice(i, 1);
                    break;
                }
            }
        }
    }
}
