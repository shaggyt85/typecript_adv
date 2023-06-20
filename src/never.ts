const  withoutEnd = () => {
  while (true) {
    console.log("withoutEnd");
  }
}

const  fail = (message: string) => {
  throw new Error(message);
}


const example = (input: unknown) => {
  if (typeof input === "string") {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';

  } else {
    return fail("Invalid input");
  }
}

console.log(example("hola"));
console.log(example([1,2,3]));
