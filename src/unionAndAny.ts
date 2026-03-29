// union types in Typescript

let repo: number | string = 15

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = 'success'

let device: 'phone' | 'tab' | 'laptop' | 'PC' = 'laptop'

device = 'phone'

// real world example 

const orders = ['12', '32', '22', '23', '21']

let currentOrder: string | undefined;

for (let order of orders) {
    if(order === '22') {
        currentOrder = order
        break
    }
}

console.log(currentOrder);
