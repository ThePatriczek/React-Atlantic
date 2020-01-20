import React, { FC, useEffect, useState } from 'react';
import { StyledPagination } from './Pagination.style';
import { ButtonList } from './ButtonList';
import { QuickJumper } from './QuickJumper/QuickJumper';
import { SizeChanger } from './SizeChanger';

export interface PaginationProps {
  /** Current page number */
  current?: number;
  /** Default initial page number */
  defaultCurrent: number;
  /** Disable pagination */
  isDisabled?: boolean;
  /** Number of data per page */
  pageSize: number;
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
  /** Total number of data items */
  total: number;
  /** custom className */
  className?: string;
  /** Called when the page number is changed */
  onChange?: (page: number, pageSize: number) => void;
  /** Called when pageSize is changed */
  onSizeChange?: (current: number, size: number) => void;
}

export const Pagination: FC<PaginationProps> = props => {
  const {
    current,
    defaultCurrent,
    isDisabled,
    pageSizeOptions,
    showQuickJumper,
    hideArrowJumper,
    showDoubleArrowJumper,
    showSizeChanger,
    isSimple,
    onChange,
    onSizeChange,
    className,
    total,
    showThreeDots
  } = props;

  const [currentPage, setPage] = useState<number>(defaultCurrent);
  const [pageSize, setPageSize] = useState<number>(
    pageSizeOptions ? pageSizeOptions[0] : props.pageSize
  );

  useEffect(() => {
    if (props.pageSize) {
      setPageSize(props.pageSize);
    }
  }, [props.pageSize]);

  useEffect(() => {
    if (current) {
      setPage(current);
    }
  }, [current]);

  useEffect(() => {
    if (currentPage > Math.ceil(total / pageSize)) {
      setPage(Math.ceil(total / pageSize));
    }
  }, [pageSize]);

  useEffect(() => {
    onChange?.(currentPage, pageSize);
  }, [currentPage]);

  useEffect(() => {
    onSizeChange?.(currentPage, pageSize);
  }, [pageSize]);

  const count = Math.ceil(total / pageSize);

  return (
    <StyledPagination
      isDisabled={isDisabled}
      total={total}
      className={className}
      showQuickJumper={showQuickJumper}
      hideArrowJumper={hideArrowJumper}
      showDoubleArrowJumper={showDoubleArrowJumper}
      showSizeChanger={showSizeChanger}
      showThreeDots={showThreeDots}
      isSimple={isSimple}
      defaultCurrent={defaultCurrent}
      pageSize={pageSize}
    >
      <ButtonList
        isSimple={!!isSimple}
        currentPage={currentPage}
        setPage={setPage}
        showArrowJumper={!hideArrowJumper}
        showDoubleArrowJumper={!!showDoubleArrowJumper}
        isDisabled={!!isDisabled || count === 0}
        count={count}
        showThreeDots={!!showThreeDots}
      />
      {showQuickJumper && (
        <QuickJumper
          setPage={setPage}
          count={count}
          isDisabled={!!isDisabled || count === 0}
        />
      )}
      {showSizeChanger && (
        <SizeChanger
          pageSize={pageSize}
          setPageSize={setPageSize}
          isDisabled={!!isDisabled || count === 0}
          pageSizeOptions={pageSizeOptions}
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
  showThreeDots: true
};

Pagination.displayName = `Pagination`;
