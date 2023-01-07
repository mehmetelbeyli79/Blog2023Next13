import { allPosts } from "contentlayer/generated";
import parse from "html-react-parser";
import { format, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import Link from "next/link";

function PostDetay({ params }) {
  const url = "Blog/Yazilar/" + params.Yazilar[1];
  const post1 = allPosts.filter((p) => p.url === url);
  return (
    <div className="flex flex-col my-16 w-full items-center">
      {post1
        ? post1.map((veri, index) => {
            return (
              <div className="flex-col lg:w-3/5 mx-3 lg:mx-0" key={index}>
                <h2 className="mb-3 text-3xl">{veri.title || null}</h2>
                <h2 className="mb-3 text-lg text-slate-400">
                  {veri.subtitle || null}
                </h2>
                <h2 className="mb-3 text-lg text-slate-300">
                  {format(parseISO(veri.date), "d LLLL yyyy", {
                    locale: tr,
                  })}
                </h2>
                <p className="leading-8 tracking-normal prose lg:prose-xl text-justify">
                  {parse(veri.body.html)}
                </p>
              </div>
            );
          })
        : ""}
      <Link
        href="/Blog"
        className="text-start text-red-900 mb-5 bg-red-200 p-2 rounded-md mt-6"
      >
        Geri Dön
      </Link>
    </div>
  );
}

export default PostDetay;
