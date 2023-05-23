export class AuthToken {
  constructor(readonly value: string) {
    this.ensureJwtTokenValid(value);
  }

  private ensureJwtTokenValid(value: string) {
    if (!value) {
      throw `This token [${value}] is not valid`;
    }
  }
}
