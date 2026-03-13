import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} балл} few {{amount, number, decimal} балла} many {{amount, number, decimal} баллов} other {{amount, number, decimal} баллов}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} очков`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} штука} few {{amount, number, decimal} штуки} many {{amount, number, decimal} штук} other {{amount, number, decimal} штук}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} шт.`, true),
    },
    "ui": {
        "apply": `Применить`,
        "cancel": `Отмена`,
        "choose_ptr": `Выберите…`,
        "continue": `Продолжить`,
        "delete_ask": `Удалить?`,
        "delete_cmd": `Удалить`,
        "edit_cmd": `Изменить`,
        "error": `Ошибка`,
        "loadingTheData_ing": `Загрузка данных…`,
        "loading_ing": `Загрузка…`,
        "no_lbl": `Нет`,
        "yes_lbl": `Да`,
        "noDataMatchesSearch": `Нет данных, соответствующих заданным критериям поиска.`,
        "noDataToDisplay": `Нет данных для отображения.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Обработка данных…`,
        "redo_cmd": `Повторить`,
        "save_cmd": `Сохранить`,
        "search_cmd": `Поиск`,
        "searchFor_ptr": `Поиск по…`,
        "sendingTheData_ing": `Отправка данных…`,
        "skip_cmd": `Пропустить`,
        "undo_cmd": `Отменить`,
    },
    "users": {
        "signIn_cmd": `Войти`,
    },
    "validation": {
        "invalidValue_err": `Значение неверно.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {Значение содержит слишком мало символов.} =1 {Значение должно содержать как минимум один символ.} other {Значение должно содержать как минимум # символов.}}`, true),
        "requiredValue_err": `Значение обязательно.`,
        "invalidHttpUrl_err": `Указанный URL некорректен. Пожалуйста, убедитесь, что URL полный и содержит http:// или https://.`,
    },
};
//# sourceMappingURL=ru.js.map