export class Article{

    id: number | null | undefined;
    title: string | null | undefined;
    subtitle: string | null | undefined;
    body: string | null | undefined;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();
    tags: string[] | null | undefined;
    userId: number | null | undefined;

    constructor(){} 
    
}