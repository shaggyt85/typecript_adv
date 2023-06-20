const prices: (number | string)[] = [1, 3, 2, 5 ,7, 'as']
prices.push(2)
prices.push('as')


let user: [string, number, boolean]
user =['shaggy', 38, true]

user = ['nico', 25, false]

const [username, age] = user
console.log(username, age)


