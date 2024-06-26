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

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 300,
});
