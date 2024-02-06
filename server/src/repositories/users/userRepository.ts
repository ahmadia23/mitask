import { Repository } from "typeorm";
import { AppDataSource } from "../../config/db";
import { User } from "../../models/users/User";

export class UserRepository {
  private userModelInstance: Repository<User>;

  constructor() {
    this.userModelInstance = AppDataSource.getRepository(User);
  }

  public async createUser(user: User): Promise<User | void> {
    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(User)
        .values(user)
        .execute();
    } catch (error) {
      console.error(error);
    }
  }

  public async findUser(userId: User["id"]): Promise<User | void> {
    try {
      await this.userModelInstance
        .createQueryBuilder("user")
        .where("user.id = :id", { id: userId })
        .getOne();
    } catch (error) {
      console.error(error);
    }
  }
}
