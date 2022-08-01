import PropTypes from "prop-types";

import { Controller } from "react-hook-form";

import { TextField, FormHelperText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	textField: {
		display: "block",
		position: "relative",
		paddingBottom: "30px",
	},
	helperText: {
		position: "absolute",
		bottom: "10px",
		color: "#d32f2f",
	},
});

const ModalAddFormInput = ({ name, label, control, errors }) => {
	const classes = useStyles();

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
			)}
		/>
	);
};

ModalAddFormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

export default ModalAddFormInput;
