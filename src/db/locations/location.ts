'use server'

import db from "../db"

export async function getLocations(){
    const locations = await db.location.findMany();

    return locations;
}

export async function getLocationById(id: string){
    const location = await db.location.findUnique({
        where: { id: id }
    })
    
    return location;
}