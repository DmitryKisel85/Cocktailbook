import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

import { TextField, RadioGroup, Radio, FormControlLabel, FormLabel, Button, ButtonGroup, Typography, Container, FormHelperText } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { hideModalWindow } from "../../store/modalWindowSlice";
import { addCocktail } from "../../store/cocktailSlice";

import { testImage } from "../../services/yupImageValidation";

// устанавливаем базовые настройки Material UI
const theme = createTheme({
	palette: {
		primary: {
			main: "#40312a",
		},
	},

	typography: {
		fontFamily: "Syne",
		fontSize: 16,
	},
	breakpoints: {
		values: {
			tabletS: 768,
			mobileL: 525,
			mobileS: 360,
		},
	},
});

// создаем стили для компонентов MUI
const useStyles = makeStyles({
	container: {
		position: "relative",
	},
	textField: {
		display: "block",
		position: "relative",
		paddingBottom: "35px",
	},
	formLabel: {
		display: "block",
		textAlign: "center",
	},
	radioGroup: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		textAlign: "center",
		[theme.breakpoints.down("mobileL")]: {
			display: "grid",
		},
	},
	buttonGroup: {
		margin: "20px 0 0 0",
	},
	button: {
		fontWeight: "bold",
		fontSize: 16,
	},
	closeButton: {
		position: "absolute",
		right: "-45px",
		top: "-35px",
		fontSize: 32,
		[theme.breakpoints.down("mobileL")]: {
			right: "-25px",
			top: "-45px",
		},
	},
	helperText: {
		position: "absolute",
		bottom: "1em",
		color: "#d32f2f",
	},

	title: {
		textTransform: "uppercase",
		[theme.breakpoints.down("tabletS")]: {
			fontSize: 28,
		},
		[theme.breakpoints.down("mobileL")]: {
			fontSize: 24,
		},
		[theme.breakpoints.down("mobileS")]: {
			fontSize: 20,
		},
	},
});

// устанавливаем валидацию элементов формы
const schema = yup.object().shape({
	name: yup.string().min(2).required(),
	ingredients: yup.string().min(2).required(),
	method: yup.string(),
	glass: yup.string().min(2).required(),
	// imageUrl: yup.string(),
	imageUrl: yup.string().test("valid-image-url", "Must use valid image URL or leave input field empty", (value) => testImage(value, 1000).then((status) => status === "success")),
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
	const classes = useStyles();

	const formSubmitHandler = (data) => {
		if (data.imageUrl === "") {
			data.imageUrl = "https://i.pinimg.com/originals/a3/b9/6f/a3b96f21beb326de113562c5062368e9.png";
		}

		const newCocktail = {
			id: uuidv4(),
			...data,
		};
		dispatch(addCocktail(newCocktail));
		reset();
		dispatch(hideModalWindow());
	};

	const closeButtonHandler = () => {
		reset();
		dispatch(hideModalWindow());
	};

	const ModalAddFormInput = ({ name, label }) => {
		return (
			<Controller
				name={name}
				control={control}
				defaultValue=''
				render={({ field }) => (
					<div style={{ position: "relative" }}>
						<TextField {...field} label={label} variant='outlined' error={!!errors[name]} className={classes.textField} fullWidth />
						<FormHelperText className={classes.helperText}>{errors ? errors[name]?.message : ""}</FormHelperText>
					</div>
					// <>
					// 	<TextField {...field} label={label} variant='outlined' error={!!errors[name]} helperText={errors[name] && errors[name]?.message} className={classes.textField} FormHelperTextProps={classes.helperText} fullWidth />
					// 	<FormHelperText className={classes.helperText}>{errors[name] && errors[name]?.message}</FormHelperText>
					// </>
				)}
			/>
		);
	};

	ModalAddFormInput.propTypes = {
		name: PropTypes.string,
		label: PropTypes.string,
	};

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.container} disableGutters>
				<Typography component='h1' variant='h5' gutterBottom align='center' className={classes.title}>
					Add Cocktail to list
				</Typography>
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
									<FormLabel id='radio-group' className={classes.formLabel}>
										Select method
									</FormLabel>
									<RadioGroup {...field} aria-labelledby='radio-group' name='row-radio-buttons-group' className={classes.radioGroup}>
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
							Submit
						</Button>
						<Button className={classes.button} onClick={() => reset()}>
							Reset
						</Button>
					</ButtonGroup>
				</form>
				<Button className={classes.closeButton} onClick={closeButtonHandler}>
					&times;
				</Button>
			</Container>
		</ThemeProvider>
	);
};

export default ModalAddForm;
