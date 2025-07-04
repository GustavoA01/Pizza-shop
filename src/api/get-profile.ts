import { api } from "../lib/axios"

type GetProfileResponse = {
  id: string
  name: string
  email: string
  phone: string | null
  role: "manager" | "customer"
  createdAt: Date | null
  updatedAt: Date | null
}

export const getProfile = async () => {
  const response = await api.get<GetProfileResponse>("/me")

  return response.data
}
