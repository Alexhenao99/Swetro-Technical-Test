import Link from 'next/link';

const UploadDataPage = () => {
  return (
    <div>
      <h1>Cargar datos</h1>
      <section>
        <ul>
          <li>
            <Link href={'/data-analyzer'}>Inject 1.000 data</Link>
          </li>
          <li>
            <Link href={'/'}>Inject data from excel</Link>
          </li>
        </ul>
      </section>
    </div>
  )
};

export default UploadDataPage
