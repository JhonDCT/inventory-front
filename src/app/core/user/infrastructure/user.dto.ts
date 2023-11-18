import { User } from "../domain/user";
import { UserDocumentNumber } from "../domain/user-document-number";
import { UserTelephone } from "../domain/user-telephone";

export interface UserDto {
    name: string;
    lastName: string;
    username: string;
    documentNumber: string;
    telephone: string;
}

export class UserMapper extends User {
    constructor(dto: UserDto) {
        super(dto.name, dto.lastName, dto.username, new UserDocumentNumber(dto.documentNumber), new UserTelephone(dto.telephone));
    }
}