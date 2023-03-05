import { useParams, Link } from "react-router-dom";

import { useAppSelector } from "hooks/typedHooks";

import { Divider, Chip, List, ListItem, Typography, Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "services/muiConfig";

import { cocktailByIdSelector } from "store/cocktail/cocktailSelector";
import { NotFoundPage } from "components/NotFoundPage";

import { useStyles } from "./cocktailPreviewPageStyles";

interface ICocktailParams {
	id: string;
}

const CocktailPreviewPage = () => {
	const { id } = useParams<keyof ICocktailParams>();

	const classes = useStyles();

	const [cocktailPreview] = useAppSelector(cocktailByIdSelector(id!));

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

export { CocktailPreviewPage };
