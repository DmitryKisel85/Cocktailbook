import { Controller, Control } from "react-hook-form";

import { TextField, FormHelperText } from "@mui/material";
import { useStyles } from "./modalAddFormInputStyles";

import { IFormValues } from "types/generalTypes";

interface IModalAddFormInputProps {
    name: "name" | "ingredients" | "method" | "glass" | "imageUrl";
    label: string;
    control: Control<IFormValues>;
    errors: any;
    defaultValue: string;
}

const ModalAddFormInput = ({ name, label, control, errors, defaultValue = "" }: IModalAddFormInputProps) => {
    const classes = useStyles();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <div style={{ position: "relative" }}>
                    <TextField
                        {...field}
                        label={label}
                        variant="outlined"
                        error={!!errors[name]}
                        className={classes.textField}
                        fullWidth
                    />
                    <FormHelperText className={classes.helperText}>
                        {errors ? errors[name]?.message : ""}
                    </FormHelperText>
                </div>
            )}
        />
    );
};

export default ModalAddFormInput;
