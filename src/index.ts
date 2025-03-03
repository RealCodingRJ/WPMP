import {MyNameFirst, Person} from "./Names/Names1";

let name1:string[] = []

name1.push("John");
name1.push("Paul");
name1.push("Joey");
name1.push("Justin");

const name = new MyNameFirst();

const randName = name.getRandomName(name1);

const myPerson  = {
    name: randName,
    age: 25
} satisfies Person


console.log(myPerson.name)