import { Primitives } from "../../domain/shared/primitives";
import { UserDocumentNumber } from "./user-document-number";
import { UserTelephone } from "./user-telephone";

export class User {
  constructor(
    readonly name: string,
    readonly lastName: string,
    readonly username: string,
    readonly documentNumber: UserDocumentNumber,
    readonly telephone: UserTelephone
  ) { }

  public static create({
    name,
    lastName,
    username,
    documentNumber,
    telephone,
  }: Primitives<User>): User {
    return new User(
      name,
      lastName,
      username,
      new UserDocumentNumber(documentNumber),
      new UserTelephone(telephone)
    );
  }

  fullNameValue(): string {
    return `${this.name} ${this.lastName}`;
  }

  toPrimitives(): Primitives<User> {
    return {
      name: this.name,
      lastName: this.lastName,
      username: this.username,
      documentNumber: this.documentNumber.value,
      telephone: this.telephone.value,
    };
  }
}
