/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export interface HomeResponse {
  metadata: {
    code: number
    message: string
  }
  response: string
}

interface HomeProps {
  url: string
  token?: string
  body: {
    title: string
  }
}

export const home = async ({ url, token, body }: HomeProps) => {
  try {
    const { data } = await axios.post<HomeResponse>(
      process.env.NEXT_PUBLIC_API_URL + url,
      {
        title: body.title
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer${token}`
        }
      }
    )
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
