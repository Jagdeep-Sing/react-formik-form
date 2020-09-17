import React, {forwardRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Calender = forwardRef(
    (props, ref) => {
        const [value, setValue] = React.useState("");    
        const handleChange = (event) => {
            setValue(event.target.value)
            props.onChange(event.target.name, event.target.value)
        }

        
        const classes = useStyles();
        return(
            <div className="input-wrapper">
                
                <div className={classes.container} noValidate>
                    <TextField
                        id="date"
                        name = {props.name}
                        label="Birthday"
                        type="date"
                        className={classes.textField}
                        value={props.value ? props.value : value} 
                        onChange={(event) => handleChange(event)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            )
        </div>
        )
    }
)

Calender.defaultProps = {
    placeholder: "",
    name: "",
    type: "",
    value: "",
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