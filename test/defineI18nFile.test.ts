import assert from "node:assert/strict";
import {defineI18nFile} from "../src/defineI18nFile.js";
import {TextValue} from "../src/I18nFile.js";
import {IntlHelper} from "../src/IntlHelper.js";
import {loadI18nFiles} from "../src/loadI18nFiles.js";

const unhandled: unknown[] = [];
process.on("unhandledRejection", (reason) => unhandled.push(reason));

const data: {[lang: string]: {[key: string]: string | TextValue}} = {
  en: {
    greeting: "Hello",
    points: new TextValue("{amount, plural, one {# point} other {# points}}", true)
  },
  pl: {
    greeting: "Cześć",
    points: new TextValue("{amount, plural, one {# punkt} few {# punkty} other {# punktów}}", true)
  },
  de: {
    greeting: "Hallo"
  }
};

type TestKeys = {
  greeting(): string;
  greeting(context: IntlHelper): string;
  points(vars: {amount: number}): string;
  points(context: IntlHelper, vars: {amount: number}): string;
};

async function run() {

  const importedLangs: string[] = [];
  const file = defineI18nFile<TestKeys>(async (locale) => {
    importedLangs.push(locale);
    if (!data[locale]) {
      return data["en"];
    }
    return data[locale];
  });

  const en = new IntlHelper("en");
  const pl = new IntlHelper("pl");
  const plPL = new IntlHelper("pl-PL");
  const de = new IntlHelper("de");

  // global context (intl singleton) defaults to en-US → cached under "en"
  await file.load();
  assert.equal(file.loaded("en"), true);

  // 1. regional tag: "pl-PL" must resolve and cache the base "pl" module
  await file.load(plPL);
  assert.deepEqual(importedLangs, ["en", "pl"]);
  assert.equal(file.loaded(plPL), true);
  assert.equal(file.loaded("pl"), true);
  assert.equal(file.keys.greeting(plPL), "Cześć");

  // 2. per-context isolation: explicit context wins, no context = global context
  assert.equal(file.keys.greeting(pl), "Cześć");
  assert.equal(file.keys.greeting(), "Hello");

  // 3. miss + self-heal: unloaded locale falls back to default synchronously,
  //    then serves its own data once the background load settles
  assert.equal(file.keys.greeting(de), "Hello");
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal(file.keys.greeting(de), "Hallo");

  // 5. ICU plural uses the bound context's locale rules
  assert.equal(file.keys.points(pl, {amount: 2}), "2 punkty");
  assert.equal(file.keys.points(pl, {amount: 5}), "5 punktów");
  assert.equal(file.keys.points(en, {amount: 5}), "5 points");
  assert.equal(file.keys.points(en, {amount: 1}), "1 point");

  // 6. bare locale string loads populate the same cache entry as a context
  const file2 = defineI18nFile<TestKeys>(async (locale) => data[locale] ?? data["en"]);
  await file2.load("pl");
  assert.equal(file2.loaded(pl), true);
  assert.equal(file2.keys.greeting(pl), "Cześć");
  await loadI18nFiles("de");
  assert.equal(file2.loaded(de), true);

  // 4. total miss: no data at all → key name; rejecting importer must not
  //    cause an unhandled rejection
  const broken = defineI18nFile(async () => {
    throw new Error("boom");
  });
  assert.equal((broken.keys as any).greeting(de), "greeting");
  await new Promise((resolve) => setTimeout(resolve, 0));
  assert.equal((broken.keys as any).greeting(de), "greeting");

  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.deepEqual(unhandled, []);

  console.log("defineI18nFile.test.ts: all assertions passed");
}

await run();
