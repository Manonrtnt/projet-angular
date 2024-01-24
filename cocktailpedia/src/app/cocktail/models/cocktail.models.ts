export interface ICocktail {
    id: string,
    name: string,
    ingredients: IIngredient[],
    image: string
}

export interface IIngredient {
    name: string,
    quantity: string
}