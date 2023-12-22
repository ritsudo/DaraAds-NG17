import { Category } from './category';
import { User } from './user';

export class MainPageAdvertisement {
    id: number;
    title: string;
    cover: string;
    price: number;
    owner: string;
    createdDate: Date;

    constructor (
        id: number,
        title: string,
        cover: string,
        price: number,
        owner: string,
        createdDate: Date
    ) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.price = price;
        this.owner = owner;
        this.createdDate = createdDate;
    }
}

/*
export interface Advertisement {
    id: number;
    title: string;
    description: string;
    cover: string;
    images: any;
    status: string;
    price: number;
    category: Category;
    owner: User;
    createdDate: Date;
    location: string;
    geoLat: number;
    geoLon: number;
}
*/