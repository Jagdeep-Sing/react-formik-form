import React, {forwardRef, useImperativeHandle} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Calender = forwardRef(
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
                            setError("Please select the DOB")
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
                
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        name = {props.name}
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        value={props.value ? props.value : value} 
                        onChange={(event) => handleChange(event)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            {error && (
                <p className="error">
                    {error}
                </p>
            )}
        </div>
        )
    }
)

Calender.defaultProps = {
    placeholder: "",
    name: "",
    type: "",
    value: "",
    validation : ""
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        
        width: 350,
    },
}));

export default Calender;