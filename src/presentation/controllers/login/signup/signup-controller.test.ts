import * as signup_controller from "@/presentation/controllers/login/signup/signup-controller"

// @ponicode
describe("handle", () => {
    let inst: any

    beforeEach(() => {
        inst = new signup_controller.SignUpController({}, {}, {})
    })

    test("0", async () => {
        await inst.handle({ body: true, headers: 429, params: 1000, accountId: "Checking Account" })
    })

    test("1", async () => {
        await inst.handle({ body: false, headers: 400, params: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", accountId: "Credit Card Account" })
    })

    test("2", async () => {
        await inst.handle({ body: false, headers: 400, params: "www.google.com", accountId: "Investment Account" })
    })

    test("3", async () => {
        await inst.handle({ body: false, headers: 400, params: 10, accountId: "Checking Account" })
    })

    test("4", async () => {
        await inst.handle({ body: "Edmond", headers: true, params: "http://www.example.com/route/123?foo=bar", accountId: "Investment Account" })
    })

    test("5", async () => {
        await inst.handle({ body: false, headers: -Infinity, params: -Infinity, accountId: "" })
    })
})
