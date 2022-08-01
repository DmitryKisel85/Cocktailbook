import { useSelector, useDispatch } from "react-redux";

import { Divider, Chip, List, ListItem, Typography, Container, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { modalWindowCocktailPreview } from "../../store/modal/modalWindowSelector";
import { hideModalWindow } from "../../store/modal/modalWindowSlice";

// устанавливаем базовые настройки Material UI
const theme = createTheme({
	palette: {
		primary: {
			main: "#40312a",
		},
	},
	typography: {
		fontFamily: "Syne!important",
		fontSize: 16,
	},
	breakpoints: {
		values: {
			tabletS: 768,
			mobileL: 525,
			mobileM: 450,
			mobileS: 360,
		},
	},
	MuiButton: {
		fontSize: [32, "!important"],
	},
});

// создаем стили для компонентов MUI
const useStyles = makeStyles({
	container: {
		position: "relative!important",
	},
	listTitle: {
		textAlign: "center!important",
		textTransform: "uppercase!important",
		fontFamily: "Syne!important",
		marginBottom: "30px!important",
		[theme.breakpoints.down("mobileM")]: {
			marginBottom: "15px!important",
		},
	},

	listItem: {
		padding: "20px 0!important",
		"&:last-child": {
			padding: "20px 0 0 0!important",
		},
		[theme.breakpoints.down("mobileM")]: {
			padding: "10px 0!important",
			"&:last-child": {
				padding: "10px 0 10px 0!important",
			},
		},
	},
	listImageBox: {
		width: "350px!important",
		height: "350px!important",
		margin: "0 auto 20px auto!important",
		[theme.breakpoints.down("mobileM")]: {
			width: "300px!important",
			height: "300px!important",
		},
		[theme.breakpoints.down("mobileS")]: {
			width: "275px!important",
			height: "275px!important",
		},
	},
	listImage: {
		width: "100%!important",
		height: "100%!important",
		objectFit: "cover!important",
	},

	closeButton: {
		position: "absolute!important",
		right: "-45px!important",
		top: "-35px!important",
		fontSize: 32,
		[theme.breakpoints.down("mobileL")]: {
			right: "-25px!important",
			top: "-35px!important",
		},
		[theme.breakpoints.down("mobileM")]: {
			right: "-35px!important",
			top: "-35px!important",
		},
	},
});

const ModalPreview = () => {
	const cocktailPreview = useSelector(modalWindowCocktailPreview);
	const { name, ingredients, method, glass, imageUrl } = cocktailPreview;

	const classes = useStyles();
	const dispatch = useDispatch();

	const closeModalHandler = () => {
		dispatch(hideModalWindow());
	};

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.container} disableGutters>
				<Box className={classes.listImageBox}>
					<img id={name} src={imageUrl} className={classes.listImage} alt={name} />
				</Box>
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
				</List>
				<Button className={classes.closeButton} onClick={closeModalHandler}>
					&times;
				</Button>
			</Container>
		</ThemeProvider>
	);
};

export default ModalPreview;
