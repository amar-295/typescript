type ChaiOrder ={
    type: string; 
    sugar: number; 
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}

type TeaRecipe = {
    water: number;
    milk: Number;
}

// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

interface CupSize {
   size: "small" | "large" 
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok: false}
// class myRes implements Response {
//     ok: boolean = true;
// }

// union type also said Literal type
type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t:TeaType) {
    console.log(t); 
}

// intersection type

type BaseChai = {tealeaves: number}
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra

const cup: MasalaChai = {
    tealeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string
}

const user1: User = {username: "Amarnath"}
const user2: User = {username: "Amarnath", bio: "amar-295.me"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Invoice-IQ",
    version: 1
}