import { Client, Account, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('68f7bb46002672a20344')
  .setPlatform('dev.me.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)