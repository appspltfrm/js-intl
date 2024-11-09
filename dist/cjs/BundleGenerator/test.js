"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BundleGenerator_1 = require("./BundleGenerator");
new BundleGenerator_1.IntlBundleGenerator(["pl-PL", "en-US"], [
    { type: "message", path: "{{NODE_MODULES}}/@appspltfrm/test/{{LOCALE}}.json", namespace: "@appspltfrm/test" },
    "intl",
    "@formatjs/intl-relativetimeformat"
], "./test/test-out-{{LOCALE}}.js").generate();
//# sourceMappingURL=test.js.map