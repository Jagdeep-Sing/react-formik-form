import React, {forwardRef, useImperativeHandle} from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectBox = forwardRef(
    (props, ref) => {
        const [value, setValue] = React.useState("");
        const [error, setError] = React.useState("");
    
        const handleChange = (event) => {
            setValue(event.target.value)
            setError("")
            props.onChange(event.target.name, event.target.value)
        }

        const validate = () => {
            // return true if is valid
            // else return false
            if (props.validation) {
                const rules = props.validation.split("|");

                for (let i = 0; i < rules.length; i++) {
                    const current = rules[i];

                    if (current === "required") {
                        if (!value) {
                            setError("Please select the age")
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        useImperativeHandle(ref, () => {
            return {
                validate: () => validate()
            }
        })
        const classes = useStyles();
        return(
            <div className="input-wrapper">
                
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                {props.label && (
                    <label>{props.label}</label>
                )}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder={props.placeholder}
                    name={props.name}
                    onChange={(event) => handleChange(event)}
                    type={props.type}
                    value={props.value ? props.value : value}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            {error && (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
        )
    }
)

SelectBox.defaultProps = {
    placeholder: "",
    name: "",
    type: "",
    value: "",
    validation : ""
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default SelectBox;