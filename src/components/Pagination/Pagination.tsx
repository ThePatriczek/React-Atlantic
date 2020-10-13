import React, { FC, useEffect, useState } from 'react';
import { Size } from '../../types';

import { ButtonList } from './ButtonList';
import { StyledPagination } from './Pagination.style';
import { QuickJumper } from './QuickJumper';
import { SizeChanger } from './SizeChanger';

export interface PaginationProps {
	/** Current page number */
	current?: number;
	/** Default initial page number */
	defaultCurrent?: number;
	/** Disable pagination */
	isDisabled?: boolean;
	/** Number of data per page */
	pageSize?: number;
	/** Specify select options */
	pageSizeOptions?: number[];
	/** Determine whether you can jump to pages directly */
	showQuickJumper?: boolean;
	/** Determine whether you can jump with arrow jumper */
	hideArrowJumper?: boolean;
	/** Determine whether you can jump with double-arrow jumper */
	showDoubleArrowJumper?: boolean;
	/** Determine whether pageSize can be changed */
	showSizeChanger?: boolean;
	/** Determine  whether threedots visible */
	showThreeDots?: boolean;
	/** Simple mode */
	isSimple?: boolean;
	/** Badge mode */
	isBadge?: boolean;
	/** Total number of data items */
	total?: number;
	/** custom className */
	className?: string;
	/** Called when the page number is changed */
	onPageChange?: (page: number, pageSize: number) => void;
	/** Called when pageSize is changed */
	onSizeChange?: (current: number, size: number) => void;
	/** Tooltip text right */
	tooltipTextRight?: string;
	/** Tooltip text left */
	tooltipTextLeft?: string;
	/** Select text */
	sizeChangerText?: string;
	/** Jumper text */
	quickJumperText?: string;
	/** small | medium | large */
	size?: Size;
}

export const Pagination: FC<PaginationProps> = (props) => {
	const {
		defaultCurrent,
		isDisabled,
		pageSizeOptions,
		showQuickJumper,
		hideArrowJumper,
		showDoubleArrowJumper,
		showSizeChanger,
		isSimple,
		className,
		total,
		showThreeDots,
		sizeChangerText,
		quickJumperText,
		tooltipTextRight,
		tooltipTextLeft,
		size,
		isBadge,
	} = props;

	const [currentPage, setPage] = useState<number>(defaultCurrent || 1);
	const [pageSize, setPageSize] = useState<number>(pageSizeOptions ? pageSizeOptions[0] : props.pageSize || 20);

	useEffect(() => {
		if (props.pageSize) {
			setPageSize(props.pageSize);
		}
	}, [props.pageSize]);

	useEffect(() => {
		if (props.current) {
			setPage(props.current);
		}
	}, [props.current]);

	useEffect(() => {
		if (total && currentPage > Math.ceil(total / pageSize)) {
			setPage(Math.ceil(total / pageSize));
		}
	}, [pageSize]);

	const onSizeChange = (pageSize: number) => {
		let page: number = currentPage;
		if (total && currentPage > Math.ceil(total / pageSize)) {
			page = Math.ceil(total / pageSize);
		}
		setPageSize(pageSize);
		props.onSizeChange?.(page, pageSize);
	};

	const onChange = (currentPage: number) => {
		props.current === undefined && setPage(currentPage);
		props.onPageChange?.(currentPage, pageSize);
	};

	const count = total ? Math.ceil(total / pageSize) : 0;

	return (
		<StyledPagination className={className} {...props}>
			<ButtonList
				isBadge={!!isBadge}
				isSimple={!!isSimple}
				currentPage={currentPage}
				showArrowJumper={!hideArrowJumper}
				showDoubleArrowJumper={!!showDoubleArrowJumper}
				isDisabled={!!isDisabled || count === 0}
				count={count}
				showThreeDots={!!showThreeDots}
				textRight={tooltipTextRight}
				textLeft={tooltipTextLeft}
				onChange={onChange}
				size={size || 'medium'}
			/>
			{showQuickJumper && (
				<QuickJumper
					setPage={setPage}
					count={count}
					isDisabled={!!isDisabled || count === 0}
					text={quickJumperText}
					onChange={onChange}
					size={size || 'medium'}
				/>
			)}
			{showSizeChanger && (
				<SizeChanger
					pageSize={pageSize}
					setPageSize={setPageSize}
					isDisabled={!!isDisabled || count === 0}
					pageSizeOptions={pageSizeOptions}
					text={sizeChangerText}
					onSizeChange={onSizeChange}
					size={size || 'medium'}
				/>
			)}
		</StyledPagination>
	);
};

Pagination.defaultProps = {
	pageSizeOptions: [10, 20, 30, 40],
	defaultCurrent: 1,
	pageSize: 20,
	total: 0,
	showThreeDots: true,
	tooltipTextRight: `Next 5 pages`,
	tooltipTextLeft: `Previous 5 pages`,
	sizeChangerText: `page`,
	quickJumperText: `Go to`,
	size: 'medium',
};

Pagination.displayName = `Pagination`;
