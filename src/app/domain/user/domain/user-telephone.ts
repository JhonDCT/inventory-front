export class UserTelephone {
  constructor(readonly value: string) {
    this.isValid(value);
  }

  private isValid(value: string) {
    if (!value || value.length !== 9 || value[0] !== "9") {
      throw `This telephone [${value}] is not valid`;
    }
  }
}
