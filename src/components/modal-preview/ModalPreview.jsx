import { useSelector } from "react-redux";

import { Divider, Chip, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { modalWindowCocktailPreview } from "../../store/modalWindowSelector";

const useStyles = makeStyles({
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
		fontSize: "16px",
	},
});

const ModalPreview = () => {
	const cocktailPreview = useSelector(modalWindowCocktailPreview);
	const { name, ingredients, method, glass, imageUrl } = cocktailPreview;

	const classes = useStyles();

	return (
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
	);
};

export default ModalPreview;
