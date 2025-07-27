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

const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
	timeZone: 'UTC',
	dateStyle: 'short',
});

export function formatDate(time: Date | undefined) {
	return DATE_FORMATTER.format(time);
}

const TIME_FORMATTER = new Intl.DateTimeFormat('en-GB', {
	timeZone: 'UTC',
	timeStyle: 'short',
});

export function formatTime(time: Date | undefined) {
	return TIME_FORMATTER.format(time);
}
