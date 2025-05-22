import { customAlphabet } from "nanoid";


const customAlphabetForId = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default class NanoId {
    static generateShortId() {
        const customNanoid = customAlphabet(customAlphabetForId, 10);
        return customNanoid();
    }

    static isNanoid(value: string): boolean {
        const regex = /^[0-9A-Za-z]{10}$/;
        return regex.test(value);
    }
}