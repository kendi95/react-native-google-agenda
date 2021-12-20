import { Context, FC } from 'react';
import { HeaderProps } from './src/types/Header';
import { IUseGoogleAgenda } from './src/types/IUseGoogleAgenda';

export const Header: FC<HeaderProps>;

export const useGoogleAgenda: Context<IUseGoogleAgenda>;

export const GoogleAgendaProvider: FC;
