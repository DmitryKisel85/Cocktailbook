export interface ICocktail extends IFormValues {
    id: string;
}

export interface IPostCocktailActionPayload {
    type: string;
    payload: ICocktail;
}

export interface IEditCocktailActionPayload {
    type: string;
    payload: { id: string; data: IFormValues };
}

export interface IDeleteCocktailActionPayload {
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

export interface IUpdateCocktailProps {
    id: string;
    data: IFormValues;
}
