import { makeStyles } from "@material-ui/core/styles";
import { radioClasses } from "@mui/material";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles(() => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
    background: "rgb(237, 239, 245)",
  },
}));

const Input_Field = ({ input, onChange }) => {
  const classes = useStyles();

  return (
    <TextField
      onChange={onChange}
      sx={{
        margin: 1,
        marginLeft: 0,
        padding: 0,
      }}
      margin="normal"
      required
      fullWidth
      label={input.label}
      variant="filled"
      name={input.name}
      InputProps={{ disableUnderline: true }}
      inputProps={{
        style: {
          textAlign: "center",
          color: "black",
          fontWeight: "",
          fontSize: "2rem",
          height: "4rem",
          width: "410px",
          borderRadius: "1rem",
        },
      }}
      InputLabelProps={{
        style: {
          textAlign: "center",
          color: "black",
          marginLeft: input.marginLeft,
          fontSize: "2rem",
        },
        shrink: true,
      }}
      className={classes.textField}
      type={input.type}
    />
  );
};

export default Input_Field;
