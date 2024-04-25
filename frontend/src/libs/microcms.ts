import { createClient } from 'microcms-js-sdk'

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
  throw new Error('必要な環境変数 SERVICE_DOMAIN または API_KEY が設定されていません。')
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})
