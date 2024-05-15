import { affiliateHTML } from '../data/affiliate'

export const getRandomAffiliate = () => {
  const randomIndex = Math.floor(Math.random() * affiliateHTML.length)
  return affiliateHTML[randomIndex]
}
