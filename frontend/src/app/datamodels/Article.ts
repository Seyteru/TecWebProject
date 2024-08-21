export class Article{

    private articleId: number | null | undefined;
    private title: string | null | undefined;
    private subtitle: string | null | undefined;
    private body: string | null | undefined;
    private creationDate: Date | null | undefined;
    private lastModified: Date | null | undefined;
    private tag: string[] | null | undefined;

    constructor(articleId: number | null | undefined, title: string | null | undefined, subtitle: string | null | undefined, body: string | null | undefined, creationDate: Date | null | undefined, lastModified: Date | null | undefined, tag: string[] | null | undefined){
        this.articleId = articleId;
        this.title = title;
        this.subtitle = subtitle;
        this.body = body;
        this.creationDate = creationDate;
        this.lastModified = lastModified;
        this.tag = tag;
    }  

    getArticleId(): number | null | undefined{
        return this.articleId;
    }

    getTitle(): string | null | undefined{
        return this.title;
    }

    getSubtitle(): string | null | undefined{
        return this.subtitle;
    }

    getBody(): string | null | undefined{
        return this.body;
    }

    getCreationDate(): Date | null | undefined{
        return this.creationDate;
    }

    getLastModified(): Date | null | undefined{
        return this.lastModified;
    }

    getTag(): string[] | null | undefined{
        return this.tag;
    }
    
}