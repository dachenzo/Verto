import { SetMetadata } from '@nestjs/common';

export const NO_GUARD = 'isPublic';
export const Public = () => SetMetadata(NO_GUARD, true);
