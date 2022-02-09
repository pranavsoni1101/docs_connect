import Head from 'next/head'
import clientPromise from '../lib/mongodb'

const Home = ({movies}) => {
  return(
    <>
      {movies? <h1>Recieved data</h1> : <h1>Didnt recieve data</h1>}
      <div>
        {movies && movies.map(movie => {
          {console.log(movie.title)}
          <p>{movie.title}</p>
        })}

      </div>

    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db =  client.db("sample_mflix");
    const data = await db.collection("movies").find({}).limit(20).toArray();
    const movies = JSON.parse(JSON.stringify(data))

    return {
      props: { movies },
    }
  } catch (e) {
    console.error(e)
  }
}


export default Home