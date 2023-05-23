import { Primitives } from "../../domain/shared/primitives";
import { User } from "../../user/domain/user";
import { UserDocumentNumber } from "../../user/domain/user-document-number";
import { UserId } from "../../user/domain/user-id";
import { UserTelephone } from "../../user/domain/user-telephone";
import { AuthToken } from "./auth-token";

export class Auth {
  constructor(readonly user: User, readonly token: AuthToken) {}

  public static create({ user, token }: Primitives<Auth>): Auth {
    return new Auth(
      new User(
        new UserId(user.id),
        user.name,
        user.lastName,
        user.username,
        new UserDocumentNumber(user.documentNumber),
        new UserTelephone(user.telephone)
      ),
      new AuthToken(token)
    );
  }

  tokenValue(): string {
    return this.token.value;
  }

  toPrimitives(): Primitives<Auth> {
    return {
      user: {
        id: this.user.id.value,
        username: this.user.username,
        documentNumber: this.user.documentNumber.value,
        lastName: this.user.lastName,
        name: this.user.name,
        telephone: this.user.telephone.value,
      },
      token: this.token.value,
    };
  }
}
