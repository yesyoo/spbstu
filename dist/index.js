"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray) {
    const newUsersArray = [];
    usersArray.forEach(userFirstArr => {
        const userSecondArr = userInfo_1.usersInfoArray.find(second => second.userid === userFirstArr.userid);
        if (userSecondArr) {
            let user = {
                name: userFirstArr.name,
                position: userSecondArr.organization.position,
                age: userSecondArr.age,
                gender: userFirstArr.gender
            };
            newUsersArray.push(user);
        }
        ;
    });
    return newUsersArray;
}
;
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
