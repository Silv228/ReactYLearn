import { checkUser } from "../App"

describe('searchClient', () => {
    it('должен что-то искать', async () => {
        const expectedResult = {
            login: 'Y_LAB@gmail.com',
            password: '123456'
        }

        const json = jest.fn(() => Promise.resolve(expectedResult))
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json,
            })
        )

        const searchResult = await checkUser({ login: 'sdf', password: '123' })
        expect(searchResult).toEqual(expectedResult)
    })
})


// const mockFetch = jest.fn().mockReturnValue(
//     Promise.resolve({
//         json: async () => ({
//             login: 'Y_LAB@gmail.com',
//             password: '123456',
//             id: 1
//         })
//     })
// )

// test('LogIn', async () => {

// })