import { Primitives } from "../../domain/shared/primitives";
import { UserDocumentNumber } from "./user-document-number";
import { UserId } from "./user-id";
import { UserTelephone } from "./user-telephone";
 
export class User {
  constructor(
    readonly id: UserId,
    readonly name: string,
    readonly lastName: string,
    readonly username: string,
    readonly documentNumber: UserDocumentNumber,
    readonly telephone: UserTelephone
  ) {}

  public static create({
    id,
    name,
    lastName,
    username,
    documentNumber,
    telephone,
  }: Primitives<User>): User {
    return new User(
      new UserId(id),
      name,
      lastName,
      username,
      new UserDocumentNumber(documentNumber),
      new UserTelephone(telephone)
    );
  }

  idValue(): number {
    return this.id.value;
  }

  toPrimitives(): Primitives<User> {
    return {
      id: this.id.value,
      name: this.name,
      lastName: this.lastName,
      username: this.username,
      documentNumber: this.documentNumber.value,
      telephone: this.telephone.value,
    };
  }
}
