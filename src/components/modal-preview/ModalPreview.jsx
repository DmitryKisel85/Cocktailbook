import { useSelector, useDispatch } from "react-redux";

import { Divider, Chip, List, ListItem, Typography, Container, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { modalWindowCocktailPreview } from "../../store/modalWindowSelector";
import { hideModalWindow } from "../../store/modalWindowSlice";

const theme = createTheme({
	palette: {
		primary: {
			main: "#40312a",
		},
	},
	typography: {
		fontFamily: "Syne",
		fontSize: 16,
	},
	breakpoints: {
		values: {
			tabletS: 768,
			mobileL: 525,
			mobileS: 360,
		},
	},
});

const useStyles = makeStyles({
	container: {
		position: "relative",
	},
	listTitle: {
		textAlign: "center",
		textTransform: "uppercase",
		fontFamily: "Syne",
		marginBottom: "30px",
	},

	listItem: {
		padding: "20px 0",
	},

	listImageUrl: {
		wordWrap: "break-word",
		overflowX: "scroll",
		padding: "20px 0",
		fontSize: 16,
	},
	closeButton: {
		position: "absolute",
		right: "-45px",
		top: "-35px",
		fontSize: 32,
		[theme.breakpoints.down("mobileL")]: {
			right: "-25px",
			top: "-35px",
		},
	},
});

const ModalPreview = () => {
	const cocktailPreview = useSelector(modalWindowCocktailPreview);
	const { name, ingredients, method, glass, imageUrl } = cocktailPreview;

	const classes = useStyles();
	const dispatch = useDispatch();

	const closeButtonHandler = () => {
		dispatch(hideModalWindow());
	};

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.container} disableGutters>
				<List>
					<Typography component='h2' variant='h4' className={classes.listTitle}>
						{name}
					</Typography>
					<Divider>
						<Chip label='INGREDIENTS' />
					</Divider>
					<ListItem className={classes.listItem}>{ingredients}</ListItem>
					<Divider>
						<Chip label='METHOD' />
					</Divider>
					<ListItem className={classes.listItem}>{method}</ListItem>
					<Divider>
						<Chip label='GLASS' />
					</Divider>
					<ListItem className={classes.listItem}>{glass}</ListItem>
					<Divider>
						<Chip label='IMAGE URL' />
					</Divider>
					<ListItem className={classes.listImageUrl}>{imageUrl}</ListItem>
				</List>
				<Button className={classes.closeButton} onClick={closeButtonHandler}>
					&times;
				</Button>
			</Container>
		</ThemeProvider>
	);
};

export default ModalPreview;
