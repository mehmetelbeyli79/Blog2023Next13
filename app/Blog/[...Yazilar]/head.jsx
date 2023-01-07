import { allPosts } from "contentlayer/generated";
export default function Head({params}) {
    const url = "Blog/Yazilar/" + params.Yazilar[1];
    const post1 = allPosts.filter((p) => p.url === url);
    return (    
        <>
        <title>{post1[0].title}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content={post1[0].description} />
        <meta name="keywords" content={post1[0].keywords}/>
        <meta name="author" content="Mehmet Elbeyli"/>
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  }
  