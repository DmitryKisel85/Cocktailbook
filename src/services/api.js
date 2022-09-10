export const fetchCocktails = async (url) => {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Fetch ${url} error, status ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		throw new Error(`Fetching error! ${error}`);
	}
};

export const postNewCocktail = async (url, uploadData) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(uploadData),
		});

		if (!response.ok) {
			throw new Error(`Post to ${url} error, status ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		throw new Error(`Posting error! ${error}`);
	}
};

export const deleteCocktail = async (url, id) => {
	try {
		const response = await fetch(`${url}/${id}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error(`Delete of ${id} from ${url} error, status ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		throw new Error(`Deleting error! ${error}`);
	}
};

export const editCocktail = async (url, uploadData) => {
	const { id, data } = uploadData;

	try {
		const response = await fetch(`${url}/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`Edit of ${url} error, status ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		throw new Error(`Editing error! ${error}`);
	}
};
