// store/users.ts
import { atom } from 'nanostores'
export interface User{
    id:number,
email: string,
role: string,
Rating: { id: number, playerId: number, review: string }[] 
}

export const $users = atom<User|null>(null)

export function setUser(user: User) {
  $users.set(user);
}

export const $token = atom<string>("")

export function setToken(token: string) {
  $token.set(token);
}