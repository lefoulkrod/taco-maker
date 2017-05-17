import { Taco } from "./Taco";
import { Filling } from "./Filling";

export class TacoMaker {
    public MakeTaco(taco: Taco, fillings: Filling[]) {
        for (let filling of fillings) {
            taco.AddFilling(filling);
        }
    }
}