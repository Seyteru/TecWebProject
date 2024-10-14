import { User } from "./User";

export class Article{

    id: number | null | undefined;
    title: string | null | undefined;
    subtitle: string | null | undefined;
    body: string | null | undefined;
    createdAt: string = '';
    updatedAt: string = '';
    tags: string[] = [];
    userId: number | null | undefined;
    user: User | null | undefined;

    constructor(){} 
    
}