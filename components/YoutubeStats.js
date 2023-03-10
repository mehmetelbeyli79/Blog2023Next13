import { noktaGosterim } from "../lib/metinFunc";
import Image from "next/image";
import Link from "next/link";
export default function YoutubeStats({ stats }) {
  const data = stats.items[0].statistics;

  return (
    <div className="lg:flex-col ">
      <div className="flex justify-center mx-3 md:mx-0">
        <p className="lg:w-3/6 px-4 leading-9 text-justify sm:p-6 text-xl md:text-2xl font-medium bg-slate-200 rounded-sm">
          Yazılım ve Teknoloji alanında ürettiğim eğitim videolarının
          istatistikleri ve tüm videoların listesi aşağıdadır. Kanala abone ve
          üye olarak destek olabilir ve kanalın ayrıcalıkların
          yararlanabilirsiniz. Ayrıca destek olmak için ↲<br />
          <Link
            href="https://www.buymeacoffee.com/SosyalBilisim"
            rel="noreferrer"
            className="coffee p-2 rounded-md my-2 block text-center flex justify-center items-center"
            target="_blank"
          >
            <Image src="/coffee.png" height={50} width={50} /> Buy me Coffees
          </Link>
        </p>
      </div>
      <h2 className="text-center mt-10 text-3xl">Kanal İstatikleri</h2>
      <div className="mt-5 lg:flex justify-center">
        <div className="px-4 lg:w-1/6 my-3 lg:my-0 py-5 mx-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">Abone Sayısı</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">
            {noktaGosterim(data.subscriberCount)}
          </dd>
        </div>

        <div className="px-4 lg:w-1/6 my-3 lg:my-0 py-5 mx-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">
            Toplam Gösterim
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">
            {noktaGosterim(data.viewCount)}
          </dd>
        </div>

        <div className="px-4 lg:w-1/6 my-3 lg:my-0 py-5 mx-5  bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">Video Sayısı</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">
            {noktaGosterim(data.videoCount)}
          </dd>
        </div>
      </div>
    </div>
  );
}
