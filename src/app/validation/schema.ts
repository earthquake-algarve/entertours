import { isValid, parseISO } from 'date-fns';
import z, { optional } from 'zod'

export const emailSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
})

const phoneRegex = new RegExp(
	'^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$',
);

const nifRegex = new RegExp(`^[1235689]\\d{8}$`);

export const registerCompanySchema = z.object({
	name: z
		.string()
		.min(2, { message: 'The name must be at least 2 characters' }),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	phone: z
		.string()
		.regex(phoneRegex, { message: 'Must be a valid phone number' }),
	nif: z.string().regex(nifRegex, { message: 'Must be a valid NIF' }),
	address: z
		.string()
		.min(10, { message: 'The address must be at least 10 characters' }),
});


export const tourSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'The name must be at least 2 characters' })
		.max(30, { message: 'The name must be at most 30 characters' }),
	location: z
		.string()
		.min(3, { message: 'The location must be at least 3 characters' }),
	price: z.coerce.number().int().min(1),
	calendarDateFrom: z.string().refine((date) => isValid(parseISO(date)), {
		message: 'A valid start date is required',
	}),
	calendarDateTo: z.string().refine((date) => isValid(parseISO(date)), {
		message: 'A valid end date is required',
	}),
	startTime: z.string(),
	duration: z.coerce.number().int().min(1),
	description: z
		.string()
		.min(10, { message: 'The description must be at least 10 characters' }),
	category: z.string({
		message: 'Choose one of the categories: Boats, Hiking, City Tour',
	}),
	image: z
		.instanceof(File, { message: 'Required' })
		.refine((file) => file.size === 0 || file.type.startsWith('image/')),
});

export const editTourSchema = tourSchema.extend({
	image: z
		.instanceof(File, { message: 'Required' })
		.refine((file) => file.size === 0 || file.type.startsWith('image/'))
		.optional()
});