// to format numbers in comma, eg. 150000==>1,50,00
export const currencyFormat = (n: number) => {
    return "₦ " + (Math.round(n * 100) / 100).toLocaleString();
}