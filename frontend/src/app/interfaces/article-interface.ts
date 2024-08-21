export interface ArticleInterface {
    articleId: number;
    title: string;
    subtitle: string;
    body: Text;
    creationDate: Date;
    lastModified: Date;
    tags: string[];
}
