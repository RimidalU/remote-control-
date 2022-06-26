import internal from "stream";
export declare const commandProcessor: (command: string, params: string[], WSStream: internal.Duplex) => Promise<void>;
