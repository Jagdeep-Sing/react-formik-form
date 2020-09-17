import React, {forwardRef} from "react";
import TextField from '@material-ui/core/TextField';const TextArea = forwardRef(
    (props, ref) => {
        const [value, setValue] = React.useState("");
    
        const handleChange = (event) => {
            setValue(event.target.value)
            props.onChange(event.target.name, event.target.value)
        }
    
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