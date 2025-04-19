const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
	currency: 'EUR',
	style: 'currency',
	minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
	return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-US');

export function formatNumber(number: number) {
	return NUMBER_FORMATTER.format(number);
}

const TIME_FORMATTER = new Intl.DateTimeFormat('pt-BR', {
	timeStyle: 'short',
	timeZone: 'UTC',
});

export function timeFormatter(time: Date | undefined) {
	return TIME_FORMATTER.format(time);
}
