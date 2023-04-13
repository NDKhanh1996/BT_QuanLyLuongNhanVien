import {Node} from "./node";

export class Staff {
    head: Node | null;
    tail: Node | null;
    size: number;
    name: string;

    constructor(name: string) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.name = name;
    }

    insertFirst(month: number, money: number): void {
        let node = new Node(month, money);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(month: number, money: number): void {
        if (!this.head) {
            this.insertFirst(month, money);
        } else {
            let node = new Node(month, money);
            if (this.tail !== null) {
                this.tail.next = node;
            }
            this.tail = node;
            this.size++;
        }
    }

    showList(): { month: number, money: number }[] {
        let listData: { month: number, money: number }[] = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    }

    sumMoney(): number {
        let sum: number = 0;
        this.showList().forEach(i => {
            sum += i.money;
        })
        return sum;
    }

    maxMoney(): number {
        let max: number = 0;
        this.showList().forEach(i => {
            if (i.money > max){
                max = i.money;
            }
        })
        return max;
    }
}