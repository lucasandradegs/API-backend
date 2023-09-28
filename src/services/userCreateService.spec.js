const UserCreateService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require("../utils/AppError")

describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepositoryInMemory)
    })

    it("user should be created", async () => {
        const user = {
            name: "Jest",
            email: "jest@email",
            password: "123"
        }

        const userCreated = await userCreateService.execute(user)

        expect(userCreated).toHaveProperty("id")
    })

    it("user shouldn't be created with email already exists", async() => {
        const user1 = {
            name: "User Test 1",
            email: "user@test",
            password: "123"
        }

        const user2 = {
            name: "User Test 2",
            email: "user@test",
            password: "123"
        }
        
        await userCreateService.execute(user1)
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Endereço de e-mail já cadastrado"))
    })
})