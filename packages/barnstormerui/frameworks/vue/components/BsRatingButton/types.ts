import { BsIconSize } from '@barnstormer/shared';

export { BsRatingButtonSize } from '@barnstormer/shared';

export type BsRatingButtonIconSize = Extract<`${BsIconSize}`, 'base' | 'lg' | 'xl'>;
