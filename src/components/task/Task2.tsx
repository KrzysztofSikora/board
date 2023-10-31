import React from 'react';

const Task2Component = () =>  {


    const duplicatedArray = ['a', 'b', 'c', 'c', 'a', 'd', 'e'];
    const removeDuplications = (duplicates: string[]): string[] => {
        const newArray: string[] = []
        for (const duplicate of duplicates) {
            if (!newArray.includes(duplicate)) {
                newArray.push(duplicate)
            }
        }
        return newArray;
    }

    const uniqueElements = removeDuplications(duplicatedArray)

    const numbers = [2, 5, 7, 10, 34, 16, 879, 1]

    const onlyPairs = (allNumbers: number[]) => {
        const onlyPairNumber: number[] = [];

        for (const number of allNumbers) {
            if (number % 2 == 0 ) {
                onlyPairNumber.push(number)
            }
        }



        return onlyPairNumber;
    }

    const result = onlyPairs(numbers)



   const fibo: string[] = [];


   // 0, 1, 1, 2, 3, 5, 8, 13 ...
   // 1, 2, 3, 4, 5, 6, 7
    const fibonacci = (n: number) => {
        const fiboArray = [0, 1];
        if ( n == 0 ) {
            return [0];
        }
        if (n  == 1) {
            return [0, 1];
        }
        for (let i= 2; i < n; i++) {
            const nextFib = fiboArray[i-1] + fiboArray[i-2]
            fiboArray.push(nextFib)
        }
        return fiboArray[fiboArray.length-1];
    }

    const element = fibonacci(23)


    interface IUser {
        id: number,
        name: string,
        email: string,
        age: number,
    }
    interface IUsers {
        users: IUser[];
        showList(): IUser[];
        userFindById(id: number): IUser | undefined;
        addNewUser(newUser: IUser): void;
        removeUserById(id: number): void;
        updateUserById(id: number, changes: Partial<User>): void;
    }

    class User implements IUser {
        id: number;
        name: string;
        email: string;
        age: number;

        constructor(id: number, name: string, email: string, age: number) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.age = age;
        }
    }

    class Users implements IUsers {
        users: User[] = [];
        showList() {
            return this.users
        }
        userFindById(id: number): IUser | undefined  {
            const user = this.users.find((element) => element.id == id)
            if (user === undefined) {
                console.log(`User of id: ${id} doesn't exist.`)
            }

            return user
        }

        addNewUser(newUser: User) {
            this.users.push(newUser)
        }

        removeUserById(id: number) {
            let indexToRemove = this.users.findIndex((element) => element.id == id);
            this.users.splice(indexToRemove, 1)
        }

        updateUserById(id: number, changes: Partial<User>) {
            let user = this.users.find((element, index) => element.id === id);
            if (user) {
                Object.assign(user, {id, ...changes})
            }
        }

        constructor(users: User[]) {
            this.users = users;
        }
    }

    const adam = new User(1, 'Adam', 'test@wp.pl', 10)
    const janek = new User(2, 'Janek', 'testtest@wp.pl', 12)
    const ufol = new User(3, 'Ufol', 'testtest@wp.pl', 20)
    const reptilanin = new User(4, 'Reptilianin', 'testtesttest@wp.pl', 25)
    const pawel = new User(5, 'Pawel', 'testtesttesttest@wp.pl', 25)

    const users = new Users([adam, janek, ufol, reptilanin])

    users.showList();
    users.userFindById(1);
    users.updateUserById(1, { name: 'ttt'} );
    users.addNewUser(pawel);
    users.userFindById(1);
    users.removeUserById(3);
    users.showList();



    return (
        <div>
            task 2
        </div>
    );
}

export default Task2Component;