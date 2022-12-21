import { Article } from "./Article";

export class Program {
    private stock: Map<string, Article>;

    constructor(...stock: Article[]) {
        this.stock = new Map<string, Article>();
        stock.map((article) => {
            this.stock.set(article.getId(), article);
        })
    }

    public findById(id: string): Article | undefined {
        return this.stock.get(id);
    }

    public addArticle(newArticle: Article): void {
        if (!this.stock.has(newArticle.getId())) {
            this.stock.set(newArticle.getId(), newArticle)
        } else {
            console.log("l'identifiant de l'article existe déja");
        }
    }

    public removeById(ArticleId: string): void {
        this.stock.delete(ArticleId);
    }
}