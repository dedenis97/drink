export interface IDrink {
    id: string;
    drinkName: string;
    isAlcolic: boolean;
    category: string;
    thumb: string;
    instructions: string;
    urlVideo: string;

    ingredients: string[]
    measures: string[]

}