export interface ICocktail {
    name: string,
    ingredients: IIngredient[],
    image: string
}

export interface IIngredient {
    name: string,
    quantity: string
}