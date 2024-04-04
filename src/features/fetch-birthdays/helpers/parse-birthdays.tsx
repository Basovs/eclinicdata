import { BirthdaysResponse } from "../types"

export const parseBirthdays = ({ births = [] }: BirthdaysResponse) => {
  const parsedBirthdays = births.map((birthday) => {
    return {
      image: birthday.pages[0].thumbnail?.source || "",
      name: birthday.text.split(",")[0],
      year: birthday.year,
      text: birthday.text.split(",")[1],
    }
  })

  const sortedByYear = parsedBirthdays.sort((a, b) => b.year - a.year)

  return sortedByYear
}
