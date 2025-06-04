'use server'

import db from "../db"

export async function getUserById(id: string | undefined) {
    if (!id) {
        throw new Error("User ID is required");
    }
    const user = await db.user.findUnique({
        where: { id: id },
        include: {
            company: true, // Include company details if needed
        },
    });
    if (!user) {
        throw new Error(`User with ID ${id} not found`);
    }
    return user;
}

export async function getUsers() {
    const users = await db.user.findMany();

    return users;
}