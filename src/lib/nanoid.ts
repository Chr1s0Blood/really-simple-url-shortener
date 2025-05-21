import { customAlphabet } from "nanoid";


const customAlphabetForId = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export function generateShortId() {
    const customNanoid = customAlphabet(customAlphabetForId, 10);
    return customNanoid();
}

export function isNanoid(value: string): boolean {
    const regex = /^[0-9A-Za-z]{10}$/;
    return regex.test(value);
}