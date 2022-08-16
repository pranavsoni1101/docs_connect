import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import clientPromise from "../lib/mongodb";

export async function createUser(req, res, {docname, mobile, email, city, password, qualification, specialization}) {
  // console.log("This is the data from createuset: ", docname, mobile, email, password, qualification, specialization);
  // Connecting to the db
    const client =  await clientPromise;
    const db     = client.db("docsconnect");
    const collection = db.collection("userDetails");
    const users = await collection.find({}).toArray();

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    docname, 
    mobile,
    city, 
    qualification,
    specialization,
    email,
    hash,
    salt,
  }

  if(req.method === "POST") {
    const result = await collection.insertOne(user);
    
  }

  return { email, createdAt: Date.now() }
}

export async function findUser({ email }) {
  const client =  await clientPromise;
  const db     = client.db("docsconnect");
  const collection = db.collection("userDetails");
  const users = await collection.find({}).toArray();
  return users.find((user) => user['email'] === email)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  const client =  await clientPromise;
  const db     = client.db("docsconnect");
  const collection = db.collection("userDetails");
  const users = await collection.find({}).toArray();
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}
