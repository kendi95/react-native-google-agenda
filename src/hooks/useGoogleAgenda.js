import { useContext } from 'react';
import { GoogleAgenda } from '../lib/GoogleAgendaProvider';

export function useGoogleAgenda() {
  return useContext(GoogleAgenda);
}
