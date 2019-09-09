export class Product {

    constructor(
        public id: string = "",
        public title: string = "",
        public price: number = 0,
        public description: string = "",
        public amount: number = 0,
        public category: string = ""
    ) {
    }
}