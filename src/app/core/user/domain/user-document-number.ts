export class UserDocumentNumber {
  constructor(readonly value: string) {
    this.isValid(value);
  }

  private isValid(value: string) {
    if (!value || value.length !== 8) {
      throw `This document number [${value}] is not valid`;
    }
  }
}
