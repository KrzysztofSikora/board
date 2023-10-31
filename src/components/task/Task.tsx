import React from 'react';

const TaskComponent = () =>  {

    /**
     * Firma transportowa posiada obecnie na stanie 3 pojazdy:1.
     *  cięzarówka o maksymalnej ładowności 1000kg - 3 sztuki
     *
     * Firma transportowa ma za zadanie dostarczać codziennie X paczek,
     *  informacje o paczkach znajdują się w stałej o nazwie "packages".
     *
     * Każda paczka ma nadany numer oraz wagę, a także adres docelowy.
     *
     * Twoim zadaniem jest napisanie struktury i zaimplementowanie kodu,
     *  który umożliwi "rozrzucenie" paczek pomiędzy samochody.
     *
     * Nie skupiaj się na implementacji samego algorytmu
     *  (nie dodaliśmy tutaj wielkości paczek - abyś nie implementował/a rozwiązania problemu plecakowego,
     * lub też komiwojażera).
     *
     * Chcemy abyś przedstawił/a nam możliwie najlepszy kod w skończonym czasie,
     *  który spełnia w/w warunki.
     *
     * Pamiętaj, że firma jest "prężnie rozwijana"
     *  i niedługo na stanie może mieć wiele pojazdów innych niż ciężarówka.
     *
     * Firma może też transportować różnego rodzaju paczki
     *  (np. może być dodatkowo wprowadzenie paczki gabarytowej, albo kruchej, etc.).
     */

    const packages: Package[] = [
        {id: "abc", weight: 100, address: "Zawiszy 6, Warszawa 01-001"},
        {id: "abc2", weight: 200, address: "Zawiszy 4, Warszawa 01-001"},
        {id: "abc3", weight: 300, address: "Zawiszy 3, Warszawa 01-001"},
        {id: "abc4", weight: 400, address: "Zawiszy 7, Warszawa 01-001"},
        {id: "abc5", weight: 500, address: "Zawiszy 8, Warszawa 01-001"}
    ]
    interface Package {
        id: string;
        weight: number;
        address: string;
    }

    interface Truck {
        id: number;
        packages: Package[];
        maxLoad: number;
        ids: string[];
    }

    class Truck implements Truck {
        id: number;
        packages: Package[];
        maxLoad: number;
        packs: Package[]
        constructor (id: number, packages: Package[], maxLoad: number) {
            this.id = id;
            this.maxLoad = maxLoad;
            this.packages = []
            this.packs = []

             packages.forEach((pack: Package) => {
                const red = (totalWeight: number, pack: Package): number => totalWeight + pack.weight

                const totalWeight =  this.packages.reduce(red, 0)
                console.log(totalWeight)
                if (totalWeight < maxLoad)
                this.packages.push(pack)
                
            })



        }

        newPacks = () => {
            return this.packs
         }

    }

    const ford = new Truck(1, packages, 1000)
    // const iveco = new Truck(1, packages, 1000)
    // const ducato = new Truck(1, packages, 1000)
    // const truck: Truck[] = [
    //     {id: 1, packages: [], maxLoad: 1000},
    //     {id: 2, packages: [], maxLoad: 1000},
    //     {id: 3, packages: [], maxLoad: 1000},
    // ]


    console.log("All packages", packages)

    console.log('ford', ford)
    console.log("All packages after remove", packages)
    return (
        <div>
            component do testu
        </div>
    );
}

export default TaskComponent;