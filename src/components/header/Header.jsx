import { memo } from "react";

import "./header.scss";

const Header = () => {
	return (
		<header className='header'>
			<h1>Personal Cocktail Book</h1>
		</header>
	);
};

export default memo(Header);
