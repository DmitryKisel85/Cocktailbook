import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Divider, Chip, List, ListItem, Typography, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { cocktailByIdSelector } from "../../store/cocktail/cocktailSelector";
import NotFoundPage from "../NotFoundPage";

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
		maxWidth: "800px!important",
		borderRadius: "12px!important",
		display: "flex!important",
		flexDirection: "column!important",
		padding: "30px 40px!important",
		margin: "50px auto!important",
		backgroundImage: "linear-gradient(45deg, #a27639 0%, #ae7f3d 11%, #bd8a42 21%, #c89246 31%, #cd974c 41%, #ce9b50 51%, #cf9e54 60%, #d1a25c 70%, #d4a768 80%, #d8ae74 90%, #dbb580 100%)!important",
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
		margin: "20px auto 20px auto!important",
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

	backButton: {
		position: "absolute!important",
		left: "20px!important",
		top: "20px!important",
		fontSize: "20px!important",
		color: "#40312a!important",
		transform: "scale(1)",
		transition: "transform 0.3s",
		"&:hover": {
			transform: "scale(1.1)!important",
		},
	},
});

const CocktailPreviewPage = () => {
	const { id } = useParams();

	const classes = useStyles();

	const [cocktailPreview] = useSelector(cocktailByIdSelector(id));

	if (!cocktailPreview) {
		return <NotFoundPage />;
	}

	const { name, ingredients, method, glass, imageUrl } = cocktailPreview;

	return (
		<ThemeProvider theme={theme}>
			<Container className={classes.container} disableGutters>
				<Link to='/' className={classes.backButton}>
					<i className='fas fa-arrow-left'></i>
					<span> HOME</span>
				</Link>
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
			</Container>
		</ThemeProvider>
	);
};

export default CocktailPreviewPage;
