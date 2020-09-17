import React, {forwardRef, useImperativeHandle} from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtons = forwardRef(
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
                            setError("Please select the Gender")
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
        
        return(
            <div className="rad">
            <FormControl component="fieldset">
                <FormLabel component="legend">
                {props.label && (
                    <label>{props.label}</label>
                )}
                </FormLabel>
                <RadioGroup row aria-label="gender" name="gender1"
                    value={props.value ? props.value : value} 
                    onChange={(event) => handleChange(event)}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
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

RadioButtons.defaultProps = {
    name: "",
    value: "",
    validation : ""
}

export default RadioButtons;