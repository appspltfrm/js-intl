import {getGlobalValuesVersions} from "./getGlobalValuesVersions.js";

export function insertGlobalValuesVersion(versionName: string, priority: number, namespace: string, locale: string, messages: {[key: string]: string}) {

    const versionsByNamespace = getGlobalValuesVersions();
    const versions = versionsByNamespace[namespace] || (versionsByNamespace[namespace] = []);

    CREATE: {
        for (let i = 0; i < versions.length; i++) {
            if (versions[i].name === versionName) {
                break CREATE;
            }
        }

        versions.unshift({name: versionName, messages: {}});
    }

    for (let i = 0; i < versions.length; i++) {
        if (versions[i].name === versionName) {
            versions[i].messages[locale] = messages;
        }
    }
}
