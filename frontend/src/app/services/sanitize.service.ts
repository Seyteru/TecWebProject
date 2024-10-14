import { Injectable } from '@angular/core';
import DOMPurify from 'dompurify';

@Injectable({
  providedIn: 'root'
})
export class SanitizeService {

  constructor() {}

  sanitizeMarkdownBody(articles: any[]): any[]{
    return articles.map(article => {
      const sanitizedMarkdown = DOMPurify.sanitize(article.body, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li'],
        ALLOWED_ATTR: ['href']
      });
      return {
        ...article,
        body: sanitizedMarkdown
      };
    });
  }
  
}
