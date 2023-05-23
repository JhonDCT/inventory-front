export class UserId {
  constructor(readonly value: number) {
    this.isValid(value);
  }

  private isValid(value: number) {
    if (!Boolean(value)) {
      throw `This user id [${value}] is not valid`;
    }
  }
}
