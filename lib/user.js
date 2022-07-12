import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import clientPromise from "../lib/mongodb";

export async function createUser({ email, password }) {

  // Connecting to the db
    const client =  await clientPromise;
    const db     = client.db("docsconnect");
    const collection = db.collection("userDetails");
    const users = await collection.find({}).toArray();

  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    email,
    hash,
    salt,
  }

  // if(req.method === "POST") {
  //   const data   = req.body;
    // const result = await collection.insertOne(data);
  //   console.log("user result: ",data);
  // }

  // users.push(user);

  return { email, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ email }) {
  // This is an in memory store for users, there is no data persistence without a proper DB
  return users.find((user) => user['email'] === email)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}
