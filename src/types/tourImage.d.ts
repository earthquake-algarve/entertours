export type TourImage = {
    name: string;
    id: string;
    isActive: boolean;
    locationId: string | null;
    createdAt: Date;
    updatedAt: Date;
    tourId: string | null;
}