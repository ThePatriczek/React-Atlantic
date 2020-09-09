import { ProgressBar, ProgressBarType } from './ProgressBar';
import { ProgressCircle, ProgressCircleType } from './ProgressCircle';

export interface ProgressType {
    Bar: ProgressBarType;
    Circle: ProgressCircleType;
}

export const Progress: ProgressType = {
    Bar: ProgressBar,
    Circle: ProgressCircle,
};
