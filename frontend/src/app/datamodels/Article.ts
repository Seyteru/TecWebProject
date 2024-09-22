export class Article{

    id: number | null | undefined;
    title: string | null | undefined;
    subtitle: string | null | undefined;
    body: string | null | undefined;
    createdAt: string = '';
    updatedAt: string = '';
    tags: string[] | null | undefined;
    userId: number | null | undefined;

    constructor(){} 
    
}