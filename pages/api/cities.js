import clientPromise from '../../lib/mongodb';

const handler = async (req, res) => {

  const client = await clientPromise;
  const db     = client.db("docsconnect");
  const data   = await db.collection("cities").find({}).toArray();


  res.json(data);
}

export default handler;