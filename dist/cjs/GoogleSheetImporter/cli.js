#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const GoogleSheetImporter_1 = require("./GoogleSheetImporter");
(async () => {
    const argv = await (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
        .option("outputPath", { description: "Output directory path", type: "string" })
        .option("outputType", { description: "Output type", choices: ["json", "ts"], type: "string" })
        .option("defaultLocale", { description: "Default locale to use, when no translation for some other locale", "type": "string" })
        .option("document", { description: "Google document identifier", type: "string" })
        .option("worksheet", { description: "Document's worksheet index (1 based) or worksheet name", type: "string" })
        .option("filterTags", { description: "Comma separated tags, that must be present for keys from worksheet. Key will be taken from worksheet if at least one tag is matched." })
        .demandOption(["outputPath", "outputType", "document"]).argv;
    const importer = new GoogleSheetImporter_1.GoogleSheetImporter();
    importer.outputPath = argv["outputPath"];
    importer.outputType = argv["outputType"];
    importer.defaultLocale = argv["defaultLocale"];
    const documents = Array.isArray(argv["document"]) ? argv["document"] : [argv["document"]];
    const sheets = Array.isArray(argv["worksheet"]) ? argv["worksheet"] : [argv["worksheet"]];
    const tags = Array.isArray(argv["filterTags"]) ? argv["filterTags"] : [argv["filterTags"]];
    for (let i = 0; i < documents.length; i++) {
        importer.addDocument(documents[i], sheets.length > i ? sheets[i] : undefined, tags.length > i ? (tags[i] ? tags[i].split(",") : undefined) : undefined);
    }
    try {
        await importer.generate();
    }
    catch (error) {
        console.error(error);
    }
    process.exit();
})();
//# sourceMappingURL=cli.js.map