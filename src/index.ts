import {usersArray} from './users';
import {usersInfoArray} from './userInfo';
import {IUser, IUserPosition} from './interfaces';


function getUsersJobPositions(usersArray : IUser[]) : IUserPosition[] {
    const newUsersArray : IUserPosition[] = [];

    usersArray.forEach(userFirstArr => {
        const userSecondArr = usersInfoArray.find(second => second.userid === userFirstArr.userid)
        if(userSecondArr) {
            let user : IUserPosition = {
                name: userFirstArr.name,
                position: userSecondArr.organization.position,
                age: userSecondArr.age,
                gender: userFirstArr.gender
            };
            newUsersArray.push(user);
        };
    });
    return newUsersArray;
};

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);