import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

//自定义的theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff'
        }
    }
});

export default theme;