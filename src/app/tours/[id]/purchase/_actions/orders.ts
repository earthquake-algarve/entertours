'use server'

import { getOrderbyEmailAndTourId } from "@/db/orders/order"

export async function userOrderExists(email: string, tourId: string) {
    const order = await getOrderbyEmailAndTourId(email, tourId);
    return !!order
}