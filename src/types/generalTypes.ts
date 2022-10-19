export interface ICocktail {
    id: string;
    name: string;
    ingredients: string;
    glass: string;
    method: string;
    imageUrl: string;
}

export interface ICocktailAction {
    type: string;
    payload: ICocktail;
}

export interface IEditCocktailAction {
    type: string;
    payload: { id: string; data: IFormValues };
}

export interface IDeleteCocktailAction {
    type: string;
    payload: string;
}

export interface IFormValues {
    name: string;
    ingredients: string;
    method: string;
    glass: string;
    imageUrl: string;
}
