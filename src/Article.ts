

export class Article {
    private articleId: string;
    private name: string;
    private price: number;
    private quantity: number;

    constructor(articleId: string, name: string, price: number, quantity: number) {
        this.articleId = articleId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public toString(): string {
        return `${this.name} (${this.articleId}) coute ${this.price} euros et il en reste ${this.quantity}`
    }

    public getId(): string {
        return this.articleId;
    }
}