import { Dispatch, FC, SetStateAction, useCallback, useMemo } from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { colors } from "../colors";

type IPaginate = {
	noOfPages: number;
	// pageNumber: number;
	pageNo: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
};
export const Paginate: FC<IPaginate> = ({
	noOfPages,
	setPageNumber,
	// pageNumber,
	pageNo,
}) => {
	const showPreviousPage = () => {
		if (pageNo !== 1) {
			setPageNumber(pageNo - 1);
		}
	};

	const showNextPage = () => {
		if (pageNo < noOfPages) {
			setPageNumber(pageNo + 1);
		}
	};

	const pageList = useMemo(() => {
		let arr: Array<number> = [];
		const num = Math.floor(pageNo / 10);
		for (let i = 10 * num; i < 10 + 10 * num; i++) {
			if (i > noOfPages) break;
			if (i === 0) continue;
			arr.push(i);
		}
		return arr;
	}, [noOfPages, pageNo]);

	const renderItem = useCallback(
		(pageItem: number, index: number) => (
			<PageItems
				key={index}
				isActive={pageNo === pageItem}
				onClick={() => setPageNumber(pageItem)}
			>
				{pageItem}
			</PageItems>
		),
		[pageNo, setPageNumber]
	);
	return (
		<PageSection>
			<PageButton onClick={showPreviousPage}>Previous</PageButton>
			{pageList.map(renderItem)}
			<PageButton onClick={showNextPage}>Next</PageButton>
		</PageSection>
	);
};
const PageSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PageButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;

	:hover {
		opacity: 0.6;
		cursor: pointer;
	}
`;
const PageItems = styled.span<{ isActive: boolean }>`
	font-size: ${pxToRem(12)};
	line-height: ${pxToRem(16)};
	padding: 6px 12px;
	cursor: pointer;
	color: ${({ isActive }) => (isActive ? "#F4F5F7" : "#42526E")};
	background-color: ${({ isActive }) =>
		isActive ? colors.orange : "transparent"};
`;
