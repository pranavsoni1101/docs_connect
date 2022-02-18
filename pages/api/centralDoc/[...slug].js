import clientPromise from '../../../lib/mongodb';

const handler = async (req, res) => {

  const query = req.query.slug;
  const city = capitalisation(query[0]);
  const speciality = capitalisation(query[1]);
  const client = await clientPromise;
  const db     = client.db("docsconnect");
  const data   = await db.collection("centralDocs").find({city: city, speciality: speciality}).toArray();


  res.json(data);
}

export default handler;

const capitalisation = (word) => {
  const str = word;
  const capitalised_str = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalised_str;
}