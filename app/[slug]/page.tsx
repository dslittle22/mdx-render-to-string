import { MDXRemote } from "next-mdx-remote/rsc";
export default function Page() {
  return;
}

export async function generateStaticParams() {
  const ReactDomServer = (await import("react-dom/server")).default;
  const element = await (<MDXRemote source={`#hi`} />);
  const staticMarkup = ReactDomServer.renderToStaticMarkup(element);
  console.log(staticMarkup);

  return [{ slug: "route" }];
}
