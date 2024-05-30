import {Role} from "./Role.enum";

export class User {

  name:string;
  phone: string;
  id: String;
  username: string;
  token: string="";
  role?:Role;
  createTime?:Date;
  password?:string;
  adresse: string;


  constructor(
    name:string,
    phone: string,
    id: string,
    username: string,
    token: string,
    role:Role,
    createTime:Date,
    password:string,
    adresse: string,
  ) {
    this.name = name;
    this.phone = phone;
    this.adresse=adresse;
    this.id=id;
    this.username=username;
    this.token=token;
    this.role=role;
    this.createTime= createTime;
    this.password= password;
  }

}
