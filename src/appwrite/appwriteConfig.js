import { Client, Databases, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.PROJECT_ID);

export const database = new Databases(client, process.env.DATABASE_ID);

export const account = new Account(client);
