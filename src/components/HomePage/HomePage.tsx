import { useEffect } from "react";

import { modalWindowIsOpenSelector, modalWindowTypeSelector } from "store/modal/modalWindowSelector";

import { useAppSelector } from "hooks/typedHooks";
import { useScrollLock } from "hooks/useScrollLock";

import { Header } from "components/Header";
import { SearchBox } from "components/SearchBox";
import { CocktailList } from "components/CocktailList";
import { Modal } from "components/Modal";
import { ModalAddForm } from "components/ModalAddForm";

import s from "./homepage.module.scss";

const HomePage = () => {
	const IsOpenModal = useAppSelector(modalWindowIsOpenSelector);
	const typeOfModal = useAppSelector(modalWindowTypeSelector);

	const { lockScroll, unlockScroll } = useScrollLock();

	useEffect(() => {
		if (IsOpenModal) {
			lockScroll();
		} else {
			unlockScroll();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [IsOpenModal]);

	return (
		<div className={s.root}>
			<main className={s.main}>
				<Header />
				<SearchBox />
				<CocktailList />
				{IsOpenModal && (
					<Modal>
						{typeOfModal === "form" && <ModalAddForm />}
						{typeOfModal === "edit" && <ModalAddForm isEdit />}
					</Modal>
				)}
			</main>
		</div>
	);
};

export { HomePage };
