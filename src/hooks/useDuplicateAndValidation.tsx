import * as yup from "yup";
import { testImage } from "../services/yupImageValidation";

import { useAppSelector } from "hooks/typedHooks";
import { cocktailsSelector } from "../store/cocktail/cocktailSelector";

export const useDuplicateAndValidation = () => {
    const cocktailsList = useAppSelector(cocktailsSelector);

    const schema = yup.object().shape({
        name: yup
            .string()
            .min(2)
            .required()
            .test("unique-name", "This name is already exists. Please, choose another one!", (value) => {
                return duplicateNameCheck(cocktailsList, value);
            }),
        // name: yup.string().min(2).required(),
        ingredients: yup.string().min(2).required(),
        method: yup.string(),
        glass: yup.string().min(2).required(),
        imageUrl: yup
            .string()
            .test("valid-image-url", "Must use valid image URL or leave input field empty", (value) =>
                testImage(value, 1000).then((status) => status === "success")
            ),
    });

    function duplicateNameCheck(cocktailsListTotal: any, enteredValue: any) {
        const duplicateCocktailName = cocktailsListTotal.find((cocktail: any) => cocktail.name === enteredValue);
        if (duplicateCocktailName !== undefined) {
            return false;
        } else {
            return true;
        }
    }

    return schema;
};
