import clientPromise from '../../../lib/mongodb';

const handler = async (req, res) => {

  const client = await clientPromise;
  const db     = client.db("docsconnect");
  const collection = db.collection("patientDetails")

  const patients   = await collection.find({}).toArray();

  if(req.method === "POST"){
    const data   = req.body;
    const result = await collection.insertOne(data);

    console.log(result);
    // res.status(201).json({message: "Data inserted successfully"})
    }

  res.json(patients);
}

export default handler;