import Link from "next/link";
import { Button } from "@chakra-ui/react";

import { Extension } from "../providers";
import { getSortedPostsData } from "../utils/posts";

import Layout from "../components/layout";
import Date from "../components/date";
import { Post } from "../types/types";
import utilStyles from "../styles/utils.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: Array<Post> }) {
  function handleExtensionClick() {
    const extension = new Extension();
    extension.login();
  }

  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: { id: string, date: string, title: string}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Button onClick={handleExtensionClick}>Login with extension</Button>
    </Layout>
  );
}
