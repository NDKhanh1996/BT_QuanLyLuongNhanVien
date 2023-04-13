export class Node {
    month: number;
    money: number;
    next: Node | null = null;

    constructor(month: number, money: number) {
        this.month = month;
        this.money = money;
    }

    readData(): { month: number, money: number } {
        return {month: this.month, money: this.money}
    }
}