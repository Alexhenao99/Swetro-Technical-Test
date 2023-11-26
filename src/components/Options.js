import Link from 'next/link';

const Options = () => {
  return (
    <section>
      <h1> Options </h1>
        <ul>
          <li>
            <Link href={'/upload-data'}> Inject Data </Link>
          </li>
          <li>
            <Link href={'/form'}> Load Data Manually </Link>
          </li>
        </ul>
    </section>
  )
};

export default Options