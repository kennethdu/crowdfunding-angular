export class User {
  constructor(public name: string) {}

  static findUser(userName: string, userList: User[]) {
    let foundUser: User = userList.find(user => {
      if (user.name === userName) return true;
      else return false;
    });
    return foundUser;
  }
}