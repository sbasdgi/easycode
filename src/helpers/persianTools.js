import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

export function currency(data) {
    return `${digitsEnToFa(addCommas(Number(data)))} تومان` || "-";
}

export function productImgUrl(data) {
    const baseUrl = 'https://easycodey.org/';
    return data
    ? `${baseUrl}${data.image}`
    : '/logo.svg';
}

export function convertEnToFa(data) {
    return digitsEnToFa(data || "");
}

