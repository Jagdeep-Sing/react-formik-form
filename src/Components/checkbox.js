import React, {forwardRef} from "react";
import Checkbox from '@material-ui/core/Checkbox';;

const CheckBox = forwardRef(
    (props, ref) => {
        const [value, setValue] = React.useState("");
    
        const handleChange = (event) => {
            setValue(event.target.checked)
            props.onChange(event.target.name, event.target.checked)
        }


        return(
            <div className="input-wrapper">
                
                <Checkbox
                    checked={props.value ? props.value : value}
                    value={props.value ? props.value : value}
                    name={props.name}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
        </div>
        )
    }
)

CheckBox.defaultProps = {
    placeholder: "",
    name: "",
    value: "",
}

export default CheckBox;