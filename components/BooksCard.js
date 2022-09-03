import NextImage from "next/image";
import NutukImage from '../photos/UhDB__300x300.jpeg'
import DonusumImage from '../photos/UhDB.jpeg'
import FareImage from '../photos/UhDB_.jpeg'

export default function BooksCard() {
    return (
        <section className="full-container mt-2 grid gap-2 md:gap-4 md:grid-cols-2">
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={NutukImage}
                        alt="Mustafa Kemal Atatür'ün yazmış olduğu Nutuk"
                        quality={100}
                        layout="responsive"
                        className="rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://tr.wikipedia.org/wiki/Nutuk_(Mustafa_Kemal_Atat%C3%BCrk)">Nutuk</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">Mustafa Kemal Atatürk</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={DonusumImage}
                        alt="Franz Kafka yazmış olduğu Roman kitabı."
                        quality={100}
                        layout="responsive"
                        className="rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://tr.wikipedia.org/wiki/D%C3%B6n%C3%BC%C5%9F%C3%BCm_(%C3%B6yk%C3%BC)">Dönüşüm</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-24 text-sm rounded-sm">Franz Kafka</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={FareImage}
                        alt="John Steinbeck yazmış olduğu Roman kitabı."
                        quality={100}
                        layout="responsive"
                        className="rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://tr.wikipedia.org/wiki/Fareler_ve_%C4%B0nsanlar">Fareler ve İnsanlar</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-28 text-sm rounded-sm">John Steinbeck</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}