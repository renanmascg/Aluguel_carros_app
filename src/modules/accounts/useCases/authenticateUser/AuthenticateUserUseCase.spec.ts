import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUserCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUsersUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUserCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUsersUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "teste@teste.com",
      password: "1234",
      name: "User Test",
    };

    await createUsersUseCase.execute(user);

    const result = await authenticateUserUserCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate an non existent user", async () => {
    expect(async () => {
      await authenticateUserUserCase.execute({
        email: "false@email.com",
        password: "falsepassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with an incorrect password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "000123",
        email: "teste@teste.com",
        password: "1234",
        name: "User Test",
      };

      await createUsersUseCase.execute(user);

      await authenticateUserUserCase.execute({
        email: user.email,
        password: "false password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
