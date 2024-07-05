// * fake data's
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: "test@123.com",
    phone:"9929929922",
    active:"In-Active",
    status:"Active",

  };
}

export function createRandomMovers() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: "test@123.com",
    phone:"9929929922",
    moverType:"Individual",
    taxId:"-",
    active:"In-Active",
    status:"Active",
    approveStatus:"Approved",
    cancelledMoves:0,

  };
}

export function createRandomMoves(){
  return{
    userName:"Naresh Katta",
    pickUpAddress:"Address",
    dropOffAddress:"Address",
    date:"1-10-2025",
    status:"Scheduled"
  }
}

export function createRandomStores(){
  return{
    stateName:"New York",
    active:"In-Active",
    status:"Scheduled"
  }
}

export function createRandomFlagged() {
  return {
    userName: "Dhanush Nanda",
    moverName: "Dhanush Nanda",
    whoFlagged: "customer",
  };
}

export function createRandomTransaction() {
  return {
    userName: "Dhanush Nanda",
    moverName: "Dhanush Nanda",
    moveId:"804832sdasd21dssdee",
    amount:400,
  };
}

export function createRandomPromoCodes() {
  return {
    promoCode: "804832sdasd21dssdee",
    startDate: "21/2/2024",
    endDate: "12/4/2025",
    applicableFor: "for all",
  };
}
export function createRandomHomeCards() {
  return {
    title: "Title",
    subTitle: "Sub Title",
    actionLabel: "action",
    applicableFor: "for all",
  };
}
export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 300,
});
export const HOMECARD = faker.helpers.multiple(createRandomHomeCards, {
  count: 300,
});

export const TRANSACTION = faker.helpers.multiple(createRandomTransaction, {
  count: 300,
});

export const MOVERS= faker.helpers.multiple(createRandomMovers,{count:300});

export const MOVES= faker.helpers.multiple(createRandomMoves,{count:300});

export const STORE = faker.helpers.multiple(createRandomStores,{count:300});

export const FLAGGED = faker.helpers.multiple(createRandomFlagged, { count: 300 });

export const PROMOCODES = faker.helpers.multiple(createRandomPromoCodes, { count: 300 });