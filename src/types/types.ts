export interface IPrices {
    pre?: number,
    pos?: number,
    "1k"?: number
}

export interface ICompany {
    company?: string,
    quantity?: number,
    prices?: IPrices
}