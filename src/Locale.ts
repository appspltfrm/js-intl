import type {IntlBundleItem} from "./BundleGenerator/BundleGenerator.js";
import {MessageRef} from "./MessageRef.js";

export const localeIntlBundleItem: IntlBundleItem = {path: "node_modules/@umpirsky/locale-list/data/{{LOCALE}}/locales.json", type: "message", namespace: "@umpirsky/locale-list"};

/**
 * https://en.wikipedia.org/wiki/IETF-language-tag
 */
export class Locale {

    private static _codes = ["af","af-NA","af-ZA","ak","ak-GH","am","am-ET","ar","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","as","as-IN","az","az-AZ","az-Cyrl","az-Cyrl_AZ","az-Latn","az-Latn_AZ","be","be-BY","bg","bg-BG","bm","bm-Latn","bm-Latn_ML","bn","bn-BD","bn-IN","bo","bo-CN","bo-IN","br","br-FR","bs","bs-BA","bs-Cyrl","bs-Cyrl_BA","bs-Latn","bs-Latn_BA","ca","ca-AD","ca-ES","ca-FR","ca-IT","cs","cs-CZ","cy","cy-GB","da","da-DK","da-GL","de","de-AT","de-BE","de-CH","de-DE","de-LI","de-LU","dz","dz-BT","ee","ee-GH","ee-TG","el","el-CY","el-GR","en","en-AG","en-AI","en-AS","en-AU","en-BB","en-BE","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CK","en-CM","en-CX","en-DG","en-DM","en-ER","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SG","en-SH","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-US","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","eo","es","es-AR","es-BO","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-ES","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","et","et-EE","eu","eu-ES","fa","fa-AF","fa-IR","ff","ff-CM","ff-GN","ff-MR","ff-SN","fi","fi-FI","fo","fo-FO","fr","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-FR","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fy","fy-NL","ga","ga-IE","gd","gd-GB","gl","gl-ES","gu","gu-IN","gv","gv-IM","ha","ha-GH","ha-Latn","ha-Latn_GH","ha-Latn_NE","ha-Latn_NG","ha-NE","ha-NG","he","he-IL","hi","hi-IN","hr","hr-BA","hr-HR","hu","hu-HU","hy","hy-AM","id","id-ID","ig","ig-NG","ii","ii-CN","is","is-IS","it","it-CH","it-IT","it-SM","ja","ja-JP","ka","ka-GE","ki","ki-KE","kk","kk-Cyrl","kk-Cyrl_KZ","kk-KZ","kl","kl-GL","km","km-KH","kn","kn-IN","ko","ko-KP","ko-KR","ks","ks-Arab","ks-Arab_IN","ks-IN","kw","kw-GB","ky","ky-Cyrl","ky-Cyrl_KG","ky-KG","lb","lb-LU","lg","lg-UG","ln","ln-AO","ln-CD","ln-CF","ln-CG","lo","lo-LA","lt","lt-LT","lu","lu-CD","lv","lv-LV","mg","mg-MG","mk","mk-MK","ml","ml-IN","mn","mn-Cyrl","mn-Cyrl_MN","mn-MN","mr","mr-IN","ms","ms-BN","ms-Latn","ms-Latn_BN","ms-Latn_MY","ms-Latn_SG","ms-MY","ms-SG","mt","mt-MT","my","my-MM","nb","nb-NO","nb-SJ","nd","nd-ZW","ne","ne-IN","ne-NP","nl","nl-AW","nl-BE","nl-BQ","nl-CW","nl-NL","nl-SR","nl-SX","nn","nn-NO","no","no-NO","om","om-ET","om-KE","or","or-IN","os","os-GE","os-RU","pa","pa-Arab","pa-Arab_PK","pa-Guru","pa-Guru_IN","pa-IN","pa-PK","pl","pl-PL","ps","ps-AF","pt","pt-AO","pt-BR","pt-CV","pt-GW","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","qu","qu-BO","qu-EC","qu-PE","rm","rm-CH","rn","rn-BI","ro","ro-MD","ro-RO","ru","ru-BY","ru-KG","ru-KZ","ru-MD","ru-RU","ru-UA","rw","rw-RW","se","se-FI","se-NO","se-SE","sg","sg-CF","sh","sh-BA","si","si-LK","sk","sk-SK","sl","sl-SI","sn","sn-ZW","so","so-DJ","so-ET","so-KE","so-SO","sq","sq-AL","sq-MK","sq-XK","sr","sr-BA","sr-Cyrl","sr-Cyrl_BA","sr-Cyrl_ME","sr-Cyrl_RS","sr-Cyrl_XK","sr-Latn","sr-Latn_BA","sr-Latn_ME","sr-Latn_RS","sr-Latn_XK","sr-ME","sr-RS","sr-XK","sv","sv-AX","sv-FI","sv-SE","sw","sw-KE","sw-TZ","sw-UG","ta","ta-IN","ta-LK","ta-MY","ta-SG","te","te-IN","th","th-TH","ti","ti-ER","ti-ET","tl","tl-PH","to","to-TO","tr","tr-CY","tr-TR","ug","ug-Arab","ug-Arab_CN","ug-CN","uk","uk-UA","ur","ur-IN","ur-PK","uz","uz-AF","uz-Arab","uz-Arab_AF","uz-Cyrl","uz-Cyrl_UZ","uz-Latn","uz-Latn_UZ","uz-UZ","vi","vi-VN","yi","yo","yo-BJ","yo-NG","zh","zh-CN","zh-HK","zh-Hans","zh-Hans_CN","zh-Hans_HK","zh-Hans_MO","zh-Hans_SG","zh-Hant","zh-Hant_HK","zh-Hant_MO","zh-Hant_TW","zh-MO","zh-SG","zh-TW","zu","zu-ZA"];

    private static _languages = ["af","ak","am","ar","as","az","be","bg","bm","bn","bo","br","bs","ca","cs","cy","da","de","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fo","fr","fy","ga","gd","gl","gu","gv","ha","he","hi","hr","hu","hy","id","ig","ii","is","it","ja","ka","ki","kk","kl","km","kn","ko","ks","kw","ky","lb","lg","ln","lo","lt","lu","lv","mg","mk","ml","mn","mr","ms","mt","my","nb","nd","ne","nl","nn","no","om","or","os","pa","pl","ps","pt","qu","rm","rn","ro","ru","rw","se","sg","sh","si","sk","sl","sn","so","sq","sr","sv","sw","ta","te","th","ti","tl","to","tr","ug","uk","ur","uz","vi","yi","yo","zh","zu"];

    static readonly jsonTypeName = "intl/Locale";

    static languageLocales() {
        return this._languages.map(c => new Locale(c)).sort();
    }

    static fromJSON(json: any) {

        if (typeof json === "string" || (json && typeof json["code"] == "string")) {
            return new Locale(json);
        } else {
            throw new Error("Cannot unserialize '" + json + "' to Locale");
        }
    }

    constructor(code: string);

    constructor(codeOrPrototype: string | Partial<Locale>) {

        if (typeof codeOrPrototype === "string") {
            this.code = codeOrPrototype;
        } else if (codeOrPrototype.code && typeof codeOrPrototype.code === "string") {
            this.code = codeOrPrototype.code;
        } else {
            throw new Error("Locale code must be given in order to create Locale instance");
        }

        this.name = new MessageRef("@umpirsky/locale-list", this.code.split("-").join("_"));
    }

    readonly code: string;

    readonly name: MessageRef;

    toString(): string {
        return this.code;
    }

    toJSON() {
        return {"@type": Locale.jsonTypeName, code: this.code};
    }
}
