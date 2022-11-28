import { COLORS } from '@styles/colors';
import Swal from 'sweetalert2';

export const errorMessage = (text: string) =>
  Swal.mixin({
    icon: 'error',
    title: 'Oops...',
    text,
    confirmButtonColor: `${COLORS.lightBlue}`,
  });
