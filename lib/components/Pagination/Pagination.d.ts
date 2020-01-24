import { FC } from 'react';
import { Size } from '../../types';
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
export declare const Pagination: FC<PaginationProps>;
