export interface Name1 {


    getRandomName(randName: string[]):void
}

export class MyNameFirst implements Name1 {

    getRandomName(randName: string[]) {

        const index =
            Math.floor(Math.random() * randName.length);


        return randName[index];
    }


}