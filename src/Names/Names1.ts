export interface Name1 {

    getRandomName(randName: string[]):void
}

export type Person = {
    name: string,
    age: number
}


export class MyNameFirst implements Name1 {

    getRandomName(randName: string[]) {

        const index =
            Math.floor(Math.random() * randName.length);


        return randName[index];
    }


}

