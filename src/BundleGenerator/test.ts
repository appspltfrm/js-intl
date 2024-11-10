import {IntlBundleGenerator} from "./BundleGenerator.js";

new IntlBundleGenerator(["pl-PL", "en-US"], [
    {type: "message", path: "{{NODE_MODULES}}/@appspltfrm/test/{{LOCALE}}.json", namespace: "@appspltfrm/test"},
    "intl",
    "@formatjs/intl-relativetimeformat"
    ], "./test/test-out-{{LOCALE}}.js"
).generate();
