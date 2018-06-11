import { createAFile } from "./createAFile"

describe("api call for manage a file", () => {
  it("should create a file", () => {
    const expected = {
      name: "imageKraken",
      destination: "dir_r4V13RVeHFFVvOLctpPe",
      file: {
        tmp_name: "/tmp/phpBne534",
        error: 0,
        name: "gitKraken-git-base.png",
        type: "image/png",
        size: 75380
      }
    }
    const name = "imageKraken"
    const destination = "dir_r4V13RVeHFFVvOLctpPe"
    const file = "/home/wilder/Images/gitKraken-git-base.png"
    expect(createAFile(name, destination, file)).toEqual(expected)
  })
})
