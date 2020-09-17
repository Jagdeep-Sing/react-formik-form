import React, {forwardRef, useImperativeHandle} from "react";
import TextField from '@material-ui/core/TextField';const TextArea = forwardRef(
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
                            setError("This field cannot be empty")
                            return false;
                        }
                    }

                    const pair = current.split(":");
                    switch(pair[0]) {
                        case "min":
                            if (value.length < pair[1]) {
                                setError(`Must be ${pair[1]} characters long`)
                                return false
                            }
                            break;
                        case "max":
                            if (value.length > pair[1]) {
                                setError(`must not longer than ${pair[1]}`)
                                return false
                            }
                            break;
                        case "email":
                            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))
                                {
                                    return (true)
                                } else {
                                    setError('Please Enter a valid email address')
                                }
                            break;
                        case "positive":
                            if (value < 0) {
                                setError("lucky number cannot be negative 😀")
                            }
                            break;
                        default:
                            break;
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
                {props.label && (
                    <label>{props.label}</label>
                )}
            <TextField
                aria-label="maximum height"
                placeholder={props.placeholder}
                name={props.name}
                rows ={props.rows}
                multiline={props.multiline}
                variant={props.variant}
                onChange={(event) => handleChange(event)}
                defaultValue={props.value ? props.value : value}
                autoComplete={props.autoComplete}
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

TextArea.defaultProps = {
    placeholder: "",
    name: "",
    rows: "",
    value: "",
    autoComplete: "off",
    validation : "",
    variant:"",
    multiline:""
}

export default TextArea;