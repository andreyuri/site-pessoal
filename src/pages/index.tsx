import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Hello World!</h1>

      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  )
}

export default Home;