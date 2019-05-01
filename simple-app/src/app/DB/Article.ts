export class Article {
  id: number;
  title: string;
  content: string;
  author: string;
  constructor( i: number, t: string, c: string, a: string) {
    this.id = i;
    this.title = t;
    this.content = c;
    this.author = a;
  }
}

