export class User {
  constructor(
    public email: string,
    public login: string,
    public password: string,
    public name: string,
    public id?: number
  ) {}
}
