import clientPromise from '../../../lib/mongodb';

const handler = async (req, res) => {

  const query = req.query.slug;
  const village = capitalisation(query);
  const client = await clientPromise;
  const db     = client.db("docsconnect");
  const data   = await db.collection("peripheryDocs").find({village: village}).toArray();

  res.json(data);
}

export default handler;

const capitalisation = (word) => {
    const words = word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return words;
}