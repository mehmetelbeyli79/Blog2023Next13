import Link from "next/link";
import { parseISO, formatDistanceToNowStrict } from "date-fns";
import { tr } from "date-fns/locale";
async function Siteler() {
  const veriler = await getData();
  const veri = veriler.items;
  return (
    <div className="flex flex-col justify-center items-center my-16">
      <h2 className="text-2xl mb-8">Link Havuzum</h2>
      <h2 className="text-lg mb-8">Son Eklenen 10 Yer İmi</h2>
      <div className="w-full md:w-3/5 p-2 md:p-0">
        {veri.map((v, index) => {
          return (
            <Link href={v.link} target="_blank" key={index}>
              <div className="flex mb-2" key={index}>
                <img src={v.cover} className="w-32 h-32" />
                <div className="flex flex-col ml-4">
                  <p className="font-medium mb-2">{v.title}</p>
                  <p className="font-light mb-2">
                    {v.excerpt.substring(0, 150).concat("...")}
                  </p>
                  <p className="font-light">Etiketler:{v.tags[0]}</p>
                  <p className="font-light">
                    •{" "}
                    {formatDistanceToNowStrict(parseISO(v.created), {
                      addSuffix: true,
                      locale: tr,
                    })}
                  </p>
                </div>
              </div>
              <hr className="mb-6" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Siteler;

/** İstatistikler Youtube API tarafından çekiliyor. */

async function getData() {
  try {
    const res = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/0?perpage=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`,
        },
      }
    );
    const data =
      await res.json(); /* Axios promise'den hep hata verdi.getstaticprops ile çalışmıyor... */
    return data;
  } catch (err) {
    console.log(err);
  }
}
