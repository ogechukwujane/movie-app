import { Dispatch, FC, SetStateAction, useCallback, useMemo } from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { colors } from "../colors";

type IPaginate = {
	noOfPages: number;
	pageNo: number;
	setPageNumber: Dispatch<SetStateAction<number>>;
};
export const Paginate: FC<IPaginate> = ({
	noOfPages,
	setPageNumber,
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
		<PageSection className="mt-5 gap-3">
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
	background: ${colors.lightRed};
	color: #facdcd;
	padding: 8px 10px;
	border-radius: 5px;
	cursor: pointer;

	:hover {
		background:  ${colors.red};
		cursor: pointer;
	}
`;
const PageItems = styled.span<{ isActive: boolean }>`
	font-size: ${pxToRem(12)};
	line-height: ${pxToRem(16)};
	padding: 10px 12px;
	cursor: pointer;
	border-radius: 5px;
	color: ${({ isActive }) => (isActive ? "white" : "#facdcd")};
	background-color: ${({ isActive }) => (isActive ? colors.red : colors.lightRed)};
	transform: background 0.6s ease-in-out;
	:hover {
		background: ${colors.red};
		color:  ${colors.white};
	}
`;
