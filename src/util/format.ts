/* eslint-disable import/no-duplicates */
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const { format: formatNumber } = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
});

export const capitalizeFirstLetter = (string: string): string => {
  try {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } catch (error) {
    return string;
  }
};

export const dateFormat = (
  date: string | Date,
  format_type = 'dd/MM/yyyy',
): string | null => {
  try {
    const formatedDate = typeof date === 'string' ? parseISO(date) : date;
    return format(formatedDate, format_type, { locale: pt });
  } catch (error) {
    return '';
  }
};
