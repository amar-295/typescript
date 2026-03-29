// type narrowing in typescript

function getRemote(mode: string | number) {
    if (typeof mode === 'string') {
        return `Switching remote ${mode} ...`
    }
    return `Remote mode: ${mode}`
}

// truthiness

function serveDrink (drink?: string) {
    if (drink) {
        return `Serving ${drink}`;
    }
    return `Serving default drink - Water`;
}

// exhaustive check

function orderDrink (size: 'small' | 'medium' | 'large' | number) {
    if (size === "small") {
        return `Small chilled lemonade...`
    }
    if (size === "medium" || size === "large") {
        return `Make extra drink`
    }

    return `Drink order #${size}`
}

class KulhadChai {
    serve() {
        return `Serving Kuladh Chai`
    }
}

class CuttingChai {
    serve() {
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}

// Making my own types

type DrinkOrder = {
    type: string
    sugar: number
}

function isDrinkOrder(obj: any): obj is DrinkOrder {
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string" &&     
        typeof obj.sugar === "number"    
    )
}

function serveOrder(item: DrinkOrder | string){
    if (isDrinkOrder(item)) {
        return `Serving ${item.type} drink with ${item.sugar} sugar`
    }
    return `Serving custom drink: ${item}`
}

type MasalaChai = {type: "masala"; spiceLevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order: Chai) {
    switch (order.type) {
        case "elaichi":
            return  `Elaichi chai`
            break;

        case "masala":
            return  `masala chai`
            break;

        case "ginger":
            return  `ginger chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        // 
    }
}

// function isStringArray(arr: unknown): arr is string[] {
    
// }