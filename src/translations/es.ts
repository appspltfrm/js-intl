import {TranslationsCollection} from "../TranslationsCollection.js";

const {HtmlValue, TextValue} = TranslationsCollection;

export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} punto} other {{amount, number, decimal} puntos}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pts`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} pieza} other {{amount, number, decimal} piezas}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} uds.`, true),
    },
    "ui": {
        "apply": `Aplicar`,
        "cancel": `Cancelar`,
        "choose_ptr": `Elegir…`,
        "continue": `Seguir`,
        "delete_ask": `¿Eliminar?`,
        "delete_cmd": `Eliminar`,
        "edit_cmd": `Editar`,
        "error": `Error`,
        "loadingTheData_ing": `Cargando los datos…`,
        "loading_ing": `Cargando…`,
        "no_lbl": `No`,
        "yes_lbl": `Sí`,
        "noDataMatchesSearch": `No hay datos que coincidan con los criterios de búsqueda especificados.`,
        "noDataToDisplay": `No hay datos que mostrar.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Procesando los datos…`,
        "redo_cmd": `Rehacer`,
        "save_cmd": `Guardar`,
        "search_cmd": `Buscar`,
        "searchFor_ptr": `Buscar...`,
        "sendingTheData_ing": `Enviando los datos…`,
        "skip_cmd": `Omitir`,
        "undo_cmd": `Deshacer`,
    },
    "users": {
        "signIn_cmd": `Ingresar`,
    },
    "validation": {
        "invalidValue_err": `El valor es inválido.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {El valor tiene muy pocos caracteres.} =1 {El valor debe tener al menos un carácter.} other {El valor debe contener al menos # caracteres.}}`, true),
        "requiredValue_err": `El valor es obligatorio.`,
        "invalidHttpUrl_err": `La URL proporcionada es incorrecta. Recuerde que la URL debe ser completa y contener http:// o https://.`,
    },
}
