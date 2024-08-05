'use client'

import z from 'zod'

export const emailSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
})

const phoneRegex = new RegExp(
	'/^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$/',
);

const nifRegex = new RegExp('/^[1235689]d{8}$/');

export const companyRegisterSchema = z.object({
    name: z.string().min(2, {message: 'The name must be at least 2 characters'}),
	email: z.string().email({ message: 'Please enter a valid email address' }),
    phone: z.string().regex(phoneRegex, {message: "Must be a valid phone number"}),
    nif: z.string().regex(nifRegex, {message: "Must be a valid NIF"}),
});