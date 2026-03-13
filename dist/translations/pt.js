import { TranslationsCollection } from "../TranslationsCollection.js";
const { HtmlValue, TextValue } = TranslationsCollection;
export default {
    "currencies": {
        "ptsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} ponto} other {{amount, number, decimal} pontos}}`, true),
        "ptsShortFormattedAmount": new TextValue(`{amount, number, decimal} pts`, true),
        "pcsLongFormattedAmount": new TextValue(`{amount, plural, one {{amount, number, decimal} peça} other {{amount, number, decimal} peças}}`, true),
        "pcsShortFormattedAmount": new TextValue(`{amount, number, decimal} pç`, true),
    },
    "ui": {
        "apply": `Aplicar`,
        "cancel": `Cancelar`,
        "choose_ptr": `Escolha…`,
        "continue": `Continuar`,
        "delete_ask": `Excluir?`,
        "delete_cmd": `Apagar`,
        "edit_cmd": `Editar`,
        "error": `Erro`,
        "loadingTheData_ing": `Carregando os dados…`,
        "loading_ing": `Carregando…`,
        "no_lbl": `Não`,
        "yes_lbl": `Sim`,
        "noDataMatchesSearch": `Nenhum dado corresponde aos critérios de pesquisa especificados.`,
        "noDataToDisplay": `Nenhum dado a ser exibido.`,
        "ok_lbl": `OK`,
        "processingTheData_ing": `Processando os dados…`,
        "redo_cmd": `Refazer`,
        "save_cmd": `Salvar`,
        "search_cmd": `Pesquisar`,
        "searchFor_ptr": `Procurar por…`,
        "sendingTheData_ing": `Enviando os dados…`,
        "skip_cmd": `Pular`,
        "undo_cmd": `Desfazer`,
    },
    "users": {
        "signIn_cmd": `Entrar`,
    },
    "validation": {
        "invalidValue_err": `O valor é inválido.`,
        "valueMinCharsLength_err": new TextValue(`{length, plural, =0 {O valor tem muito poucos caracteres.} =1 {O valor deve ter pelo menos um caractere.} other {O valor deve conter pelo menos # caracteres.}}`, true),
        "requiredValue_err": `O valor é obrigatório.`,
        "invalidHttpUrl_err": `URL fornecida é incorreta. Lembre-se de que a URL deve ser completa e conter http:// ou https://.`,
    },
};
//# sourceMappingURL=pt.js.map