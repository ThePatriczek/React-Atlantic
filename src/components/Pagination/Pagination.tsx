import React, { FC, useEffect, useState } from 'react';
import { ButtonList } from './ButtonList';
import { StyledPagination } from './Pagination.style';
import { QuickJumper } from './QuickJumper';
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
  /** Tooltip text right */
  tooltipTextRight: string;
  /** Tooltip text left */
  tooltipTextLeft: string;
  /** Select text */
  sizeChangerText: string;
  /** Jumper text */
  quickJumperText: string;
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
    className,
    total,
    showThreeDots,
    sizeChangerText,
    quickJumperText,
    tooltipTextRight,
    tooltipTextLeft
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

  /*
  useEffect(() => {
    onChange?.(currentPage, pageSize);
  }, [currentPage]);

  useEffect(() => {
    onSizeChange?.(currentPage, pageSize);
  }, [pageSize]);
  */


  const onSizeChange = (pageSize: number) => {
    setPageSize(pageSize);
    props.onSizeChange?.(currentPage, pageSize);
  };

  const onChange = (currentPage: number) => {
    setPage(currentPage);
    props.onChange?.(currentPage, pageSize);
  };


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
      quickJumperText={quickJumperText}
      sizeChangerText={sizeChangerText}
      tooltipTextRight ={tooltipTextRight}
      tooltipTextLeft={tooltipTextLeft}
    >
      <ButtonList
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
      />
      {showQuickJumper && (
        <QuickJumper
          setPage={setPage}
          count={count}
          isDisabled={!!isDisabled || count === 0}
          text={quickJumperText}
          onChange={onChange}
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
  quickJumperText: `Go to`
};

Pagination.displayName = `Pagination`;
