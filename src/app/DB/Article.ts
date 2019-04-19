export class Article {
  id: number;
  title: string;
  content: string;
  author: string;
  constructor(t: string, c: string, a: string, i: number) {
    this.id = i;
    this.title = t;
    this.content = c;
    this.author = a;
  }
}

