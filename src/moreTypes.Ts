// forcefull type assertion

let response: any = "42"

let numbericLength: number = (response as string).length


// another example
type Book = {
    name: string;
};

let bookString = '{"name": "who moved my book"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement

// unknown and any example 

let value: any;

value = "string";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "string";
newValue = [1, 2, 3];
newValue = 2.5;

// guard check
if (typeof newValue === "string") {
    newValue.toUpperCase();
}

// try catch example
try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}

const data: unknown = "chai aur code"
const strData: string = data as string

// never type example

type Role = "admin" | "user"

function redirectBasedOnRole(role:Role): void {
        if(role === "admin"){
            console.log("Redirecting to admin dashboard");
            return
        }
        if(role === "user"){
            console.log("Redirecting to user dashboard");
            return
        }
        role;
}

// never returning function
function neverReturn():never{
    while(true){}
}