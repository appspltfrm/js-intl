import { HtmlString } from "@appspltfrm/js-utils/core";
import { IntlContext } from "./IntlContext.js";
type MessageType = string | HtmlString;
export declare function formatMessage<T extends MessageType>(message: T, values: {
    [key: string]: any;
}, formats?: any): T;
export declare function formatMessage<T extends MessageType>(context: IntlContext, message: T, values: {
    [key: string]: any;
}, formats?: any): T;
export {};
