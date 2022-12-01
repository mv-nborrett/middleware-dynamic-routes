import Link from "next/link";
import { useRouter } from "next/router";

const Index = ({ value }: any) => {
  const router = useRouter();

  return (
    <section>
      <h1>{value}</h1>
      <p>
        The path is : <strong>{router.query.path}</strong>
      </p>
      <Link href="/another-page">Link to another page</Link>
    </section>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { path: "default", pages: null } },
      { params: { path: "another-page", pages: null } },
    ],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {
      value: "Hello",
    },
  };
}

export default Index;
