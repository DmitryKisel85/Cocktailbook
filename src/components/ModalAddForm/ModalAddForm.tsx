import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";

import {
	RadioGroup,
	Radio,
	FormControlLabel,
	FormLabel,
	Button,
	ButtonGroup,
	Typography,
	Container,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useStyles } from "./modalAddFormStyles";
import { theme } from "services/muiConfig";

import { hideModalWindow } from "store/modal/modalWindowSlice";
import {
	deleteCocktailFromListStart,
	postCocktailToListStart,
	editCocktailInListStart,
} from "store/cocktail/cocktailSlice";

import { modalWindowCocktailPreview } from "store/modal/modalWindowSelector";
import { isCocktailLoadingSelector } from "store/cocktail/cocktailSelector";

import { Spinner } from "components/Spinner";
import { ModalAddFormInput } from "components/ModalAddFormInput";

import { useAppDispatch, useAppSelector } from "hooks/typedHooks";
import { useDuplicateAndValidation } from "hooks/useDuplicateAndValidation";

import { IFormValues } from "types/generalTypes";
import { useCallback } from "react";

interface IModalAddFormProps {
	isEdit?: boolean;
}

const ModalAddForm = ({ isEdit }: IModalAddFormProps) => {
	const schema = useDuplicateAndValidation();

	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<IFormValues>({
		resolver: yupResolver(schema),
	});

	const { id, name, ingredients, glass, imageUrl, method } = useAppSelector(modalWindowCocktailPreview);
	const isCocktailLoading = useAppSelector(isCocktailLoadingSelector);

	const dispatch = useAppDispatch();
	const classes = useStyles();

	const formSubmitHandler = (data: IFormValues) => {
		if (data.imageUrl === "") {
			data.imageUrl = "https://i.pinimg.com/originals/a3/b9/6f/a3b96f21beb326de113562c5062368e9.png";
		}

		if (isEdit) {
			dispatch(editCocktailInListStart({ id: id, data: data }));
		} else {
			const newCocktail = {
				id: uuidv4(),
				...data,
			};

			dispatch(postCocktailToListStart(newCocktail));
		}
	};

	const closeButtonHandler = useCallback(() => {
		reset();
		dispatch(hideModalWindow());
	}, [dispatch, reset]);

	const deleteItemHandler = useCallback(() => {
		dispatch(deleteCocktailFromListStart(id));
	}, [dispatch, id]);

	return (
		<>
			{isCocktailLoading ? (
				<Spinner />
			) : (
				<ThemeProvider theme={theme}>
					<Container className={classes.container} disableGutters>
						<Typography component='h1' variant='h5' gutterBottom align='center' className={classes.title}>
							{isEdit ? "Edit Cocktail" : "Add Cocktail to list"}
						</Typography>
						<form onSubmit={handleSubmit(formSubmitHandler)} className='modal-add-form__form modal-form'>
							<ModalAddFormInput
								name='name'
								label='Enter cocktail name'
								control={control}
								errors={errors}
								defaultValue={isEdit ? name : ""}
							/>
							<ModalAddFormInput
								name='ingredients'
								label='Put ingredients'
								control={control}
								errors={errors}
								defaultValue={isEdit ? ingredients : ""}
							/>
							<ModalAddFormInput
								name='glass'
								label='Insert cocktail glass'
								control={control}
								errors={errors}
								defaultValue={isEdit ? glass : ""}
							/>
							<ModalAddFormInput
								name='imageUrl'
								label='Enter image URL'
								control={control}
								errors={errors}
								defaultValue={isEdit ? imageUrl : ""}
							/>
							<Controller
								name='method'
								control={control}
								defaultValue={isEdit ? method : "build"}
								render={({ field }) => {
									return (
										<>
											<FormLabel id='radio-group' className={classes.formLabel}>
												Select method
											</FormLabel>
											<RadioGroup
												{...field}
												aria-labelledby='radio-group'
												name='row-radio-buttons-group'
												className={classes.radioGroup}>
												<FormControlLabel value='build' control={<Radio />} label='Build' />
												<FormControlLabel value='stir' control={<Radio />} label='Stir' />
												<FormControlLabel value='shake' control={<Radio />} label='Shake' />
												<FormControlLabel value='blend' control={<Radio />} label='Blend' />
											</RadioGroup>
										</>
									);
								}}
							/>
							<ButtonGroup variant='text' className={classes.buttonGroup} fullWidth>
								<Button type='submit' className={classes.button}>
									{isEdit ? "Save" : "Submit"}
								</Button>
								<Button className={classes.button} onClick={isEdit ? deleteItemHandler : () => reset()}>
									{isEdit ? "Delete Cocktail" : "Reset"}
								</Button>
							</ButtonGroup>
						</form>
						<Button className={classes.closeButton} onClick={closeButtonHandler}>
							&times;
						</Button>
					</Container>
				</ThemeProvider>
			)}
		</>
	);
};

export { ModalAddForm };
