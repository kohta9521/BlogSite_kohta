import { bannerHTML } from '../data/banner'

export const getRandomBanner = () => {
  const randomIndex = Math.floor(Math.random() * bannerHTML.length)
  return bannerHTML[randomIndex]
}
