import { MDXRemote } from "next-mdx-remote/rsc";

function page() {
  return <div>page</div>;
}

export default page;

export async function generateStaticParams() {
  await generateRssFeed();

  return [{ slug: "route" }];
  // return posts.map(({ frontmatter }) => ({
  //   slug: frontmatter.slug,
  // }));
}

async function generateRssFeed() {
  const ReactDomServer = (await import("react-dom/server")).default;
  const element = await (<MDXRemote source={`#hi`} />);
  //   const element = <div>hi</div>;
  const staticMarkup = ReactDomServer.renderToStaticMarkup(element);
  console.log(staticMarkup);
}
