import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} бал} other {{amount, number, decimal} балів}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} очків`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} штука} few {{amount, number, decimal} штуки} many {{amount, number, decimal} штук} other {{amount, number, decimal} штук}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} шт.`, true),
    },
    "ui": {
        "apply": `Застосувати`,
        "cancel": `Скасувати`,
        "choose_ptr": `Виберіть…`,
        "continue": `Продовжити`,
        "delete_ask": `Видалити?`,
        "delete_cmd": `Видалити`,
        "edit_cmd": `Редагувати`,
        "error": `Помилка`,
        "loadingTheData_ing": `Завантаження даних…`,
        "loading_ing": `Завантаження…`,
        "no_lbl": `Ні`,
        "yes_lbl": `Так`,
        "noDataMatchesSearch": `Немає даних, які відповідають заданим критеріям пошуку.`,
        "noDataToDisplay": `Немає даних для відображення.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Обробка даних…`,
        "redo_cmd": `Повторити`,
        "save_cmd": `Зберегти`,
        "search_cmd": `Пошук`,
        "searchFor_ptr": `Пошук за…`,
        "sendingTheData_ing": `Надсилання даних…`,
        "skip_cmd": `Пропустити`,
        "undo_cmd": `Скасувати`,
    },
    "users": {
        "signIn_cmd": `Увійти`,
    },
    "validation": {
        "invalidValue_err": `Значення недійсне.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Значення має занадто мало символів.} =1 {Значення має містити принаймні один символ.} other {Значення має містити принаймні # символів.}}`, true),
        "requiredValue_err": `Значення є обов'язковим.`,
        "invalidHttpUrl_err": `Заданий URL не вірний. Пам'ятайте, що URL має бути повним і включати http:// або https://.`,
    },
}
