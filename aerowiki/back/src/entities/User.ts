import { uuid } from 'uuidv4'

export class User {
   
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  public unb_id: number;
  public area: string;
  public role: string;
  public rg: number;
  public cpf: number;


  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}