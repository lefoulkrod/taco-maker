import { Filling } from "./Filling";

export class Taco {
    private fillings: Filling[] = [];
    
    public AddFilling(filling: Filling): void {
        this.fillings.push(filling);
    }
}