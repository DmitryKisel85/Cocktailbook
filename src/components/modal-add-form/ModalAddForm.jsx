import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

import { TextField, RadioGroup, Radio, FormControlLabel, FormLabel, Button, ButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { hideModalWindow } from "../../store/modalWindowSlice";
import { addCocktail } from "../../store/cocktailSlice";

import "./modalAddForm.scss";

// устанавливаем цвет нашей формы как 'primary'
const theme = createTheme({
	palette: {
		primary: {
			main: "#40312a",
		},
	},
});

// проверка элементов формы на валидность
const schema = yup.object().shape({
	name: yup.string().min(2).required(),
	ingredients: yup.string().min(2).required(),
	method: yup.string(),
	glass: yup.string().min(2).required(),
	imageUrl: yup.string(),
});

const ModalAddForm = () => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const dispatch = useDispatch();

	const formSubmitHandler = (data) => {
		console.log(data);
		const newCocktail = {
			id: uuidv4(),
			...data,
		};
		dispatch(addCocktail(newCocktail));
		reset();
		dispatch(hideModalWindow());
	};

	const ModalAddFormInput = ({ name, label }) => {
		return (
			<Controller
				name={name}
				control={control}
				defaultValue=''
				render={({ field }) => <TextField {...field} label={label} variant='outlined' color='primary' error={!!errors[name]} helperText={errors[name] && errors[name]?.message} margin='normal' sx={{ display: "block" }} fullWidth />}
			/>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<div className='modal-add-form'>
				<h2 className='modal-add-form__title'> Add Cocktail to list</h2>
				<form onSubmit={handleSubmit(formSubmitHandler)} className='modal-add-form__form modal-form'>
					<ModalAddFormInput name='name' label='Enter cocktail name' />
					<ModalAddFormInput name='ingredients' label='Put ingredients' />
					<ModalAddFormInput name='glass' label='Insert cocktail glass' />
					<ModalAddFormInput name='imageUrl' label='Enter image URL' />

					<Controller
						name='method'
						control={control}
						defaultValue='build'
						render={({ field }) => {
							return (
								<>
									<FormLabel id='radio-group' sx={{ display: "block", textAlign: "center" }}>
										Select method
									</FormLabel>
									<RadioGroup {...field} row aria-labelledby='radio-group' name='row-radio-buttons-group' sx={{ display: "block", textAlign: "center" }}>
										<FormControlLabel value='build' control={<Radio />} label='Build' />
										<FormControlLabel value='stir' control={<Radio />} label='Stir' />
										<FormControlLabel value='shake' control={<Radio />} label='Shake' />
										<FormControlLabel value='blend' control={<Radio />} label='Blend' />
									</RadioGroup>
								</>
							);
						}}
					/>
					<ButtonGroup variant='text' size='large' sx={{ margin: "20px 0" }} fullWidth>
						<Button type='submit'>Submit</Button>
						<Button onClick={() => reset()}>Reset</Button>
					</ButtonGroup>
				</form>
			</div>
		</ThemeProvider>
	);
};

export default ModalAddForm;
