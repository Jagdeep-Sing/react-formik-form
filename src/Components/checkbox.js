import React, {forwardRef, useImperativeHandle} from "react";
import Checkbox from '@material-ui/core/Checkbox';;

const CheckBox = forwardRef(
    (props, ref) => {
        const [value, setValue] = React.useState("");
        const [error, setError] = React.useState("");
    
        const handleChange = (event) => {
            setValue(event.target.checked)
            setError("")
            props.onChange(event.target.name, event.target.checked)
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
                            setError("Please check this")
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
            <div className="input-wrapper">
                
                <Checkbox
                    checked={props.value ? props.value : value}
                    value={props.value ? props.value : value}
                    name={props.name}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            {error && (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
        )
    }
)

CheckBox.defaultProps = {
    placeholder: "",
    name: "",
    value: "",
    validation : ""
}

export default CheckBox;