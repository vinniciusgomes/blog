export function formatCurrency(
  value: number,
  locale = 'pt-BR',
  currency = 'BRL',
): string {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

  return formattedCurrency;
}
