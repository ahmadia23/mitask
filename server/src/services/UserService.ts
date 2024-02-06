import { User } from "../models/users/User";
import { UserRepository } from "../repositories/users/userRepository";

export class UserService {
  public userRepository;

  constructor(userRepo: UserRepository) {
    this.userRepository = userRepo;
  }

  async createUser(user: User): Promise<User | void> {
    return await this.userRepository.createUser(user);
  }

  async getUserById(id: User["id"]): Promise<User | void> {
    return await this.userRepository.findUser(id);
  }
}
