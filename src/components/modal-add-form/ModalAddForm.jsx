import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { TextField, RadioGroup, Radio, FormControlLabel, FormLabel, Button } from "@mui/material";

const schema = yup.object().shape({
	name: yup.string().min(2).required(),
	ingredients: yup.string().min(2).required(),
	method: yup.string(),
	imageUrl: yup.string().min(2),
});

const ModalAddForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const formSubmitHandler = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(formSubmitHandler)} className='modal-add-form'>
			<Controller
				name='name'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						label='Cocktail name'
						variant='outlined'
						error={!!errors.name}
						helperText={errors.name && errors.name?.message}
						margin='dense'
						sx={{ display: "block" }}
						placeholder='Enter cocktail name...'
						fullWidth
					/>
				)}
			/>

			<Controller
				name='ingredients'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						label='Ingredients'
						variant='outlined'
						error={!!errors.ingredients}
						helperText={errors.ingredients && errors.ingredients?.ingredients}
						margin='dense'
						sx={{ display: "block" }}
						placeholder='Put ingredients here...'
						fullWidth
					/>
				)}
			/>

			<Controller
				name='method'
				control={control}
				render={({ field }) => {
					return (
						<>
							<FormLabel id='radio-group'>Select method</FormLabel>
							<RadioGroup {...field} row aria-labelledby='radio-group' name='row-radio-buttons-group'>
								<FormControlLabel value='build' control={<Radio />} label='Build' />
								<FormControlLabel value='stir' control={<Radio />} label='Stir' />
								<FormControlLabel value='shake' control={<Radio />} label='Shake' />
								<FormControlLabel value='blend' control={<Radio />} label='Blend' />
							</RadioGroup>
						</>
					);
				}}
			/>

			<Controller
				name='imageUrl'
				control={control}
				defaultValue=''
				render={({ field }) => (
					<TextField
						{...field}
						label='Image Url'
						variant='outlined'
						error={!!errors.imageUrl}
						helperText={errors.imageUrl && errors.imageUrl?.imageUrl}
						margin='dense'
						sx={{ display: "block" }}
						placeholder='Enter image URL here...'
						fullWidth
					/>
				)}
			/>

			<Button type='submit' fullWidth>
				Submit
			</Button>
		</form>
	);
};

export default ModalAddForm;
