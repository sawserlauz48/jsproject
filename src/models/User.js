class User {
  name;
  lastName;
  email;
  password;
  business;
  id;
  constructor(name, lastName, email, password, business, id) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.business = business;
    this.id = id;
  }
}

export default User;
