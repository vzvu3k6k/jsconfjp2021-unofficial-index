import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import talks from "../../_talks/data.json";

export default function Talk({ talk }) {
  const router = useRouter();
  if (!router.isFallback && !talk?.id) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <nav>
        <Link href="/">Top</Link>
      </nav>
      <main>
        <h1>{talk.title}</h1>
        {talk.hasPermalink && (
          <a href={`https://jsconf.jp/2021/talk/${talk.id}`}>トークページ</a>
        )}
        <br />
        <iframe
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${talk.videoId}?start=${talk.videoStartsAt}`}
          frameBorder="0"
        />
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const videoIds = {
    a: "fC4oZJmvfI0",
    b: "5H3Sswp5qYg",
    c: "Rmvt9Gt0VMk",
  };
  const talk = talks.find((t) => t.id === params.id);
  return {
    props: {
      talk: {
        ...talk,
        videoId: videoIds[talk.track],
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: talks.map((t) => {
      return {
        params: {
          id: t.id,
        },
      };
    }),
    fallback: false,
  };
}
