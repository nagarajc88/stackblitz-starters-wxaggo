import { User } from "./user.model";

export interface UserResponse {
    status: string;
    data: {
      user: User;
    };
}