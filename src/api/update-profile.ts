import { api } from "../lib/axios";

type UpdateProfileProps ={
  name: string;
  description: string | null
}

export const updateProfile = async ({ name, description }: UpdateProfileProps) => {
  await api.put("/profile", {
    name,
    description,
  });
}