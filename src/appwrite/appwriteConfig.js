import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("662a064c1c3f5d1914c7");

export const database = new Databases(client, "662a06dd62d4dab2e0c8");

export const account = new Account(client);
