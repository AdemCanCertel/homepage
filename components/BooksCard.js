import NextImage from "next/image";
import NutukImage from '../photos/Nutuk.jpeg'
import AtaturkImage from '../photos/Ataturk.jpeg'
import FareImage from '../photos/Farelerveİnsanlar.jpeg'
import SiddharthaImage from '../photos/Siddhartha.jpeg'
import DonusumImage from '../photos/Donusum.jpeg'
import WitcherImage from '../photos/Witcher.jpeg'
import RonesansImage from '../photos/Ronesans.jpeg'

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
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346">Nutuk</a>
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
                        src={AtaturkImage}
                        alt="İlker Başbuğ'un kaleme aldığı 20. Yüzyılın en büyük lideri Atatürk."
                        quality={100}
                        layout="responsive"
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/20-Y%C3%BCzy%C4%B1l%C4%B1n-B%C3%BCy%C3%BCk-Lideri-Atat%C3%BCrk/dp/9751415292">Atatürk</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-24 text-sm rounded-sm">İlker Başbuğ</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-20 text-sm rounded-sm">Okuyorum</p>
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
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/Fareler-ve-%C4%B0nsanlar-John-Steinbeck/dp/9755705856/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=PU2NHI0YR82E&keywords=Fareler+ve+%C4%B0nsanlar&qid=1662220149&s=books&sprefix=fareler+ve+i%CC%87nsanla%2Cstripbooks%2C119&sr=1-1">Fareler ve İnsanlar</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-28 text-sm rounded-sm">John Steinbeck</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={SiddharthaImage}
                        alt="Hermann Hesse yazmış olduğu felsefe/roman kitabı."
                        quality={100}
                        layout="responsive"
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/Siddhartha-Hermann-Hesse/dp/9750719395/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GE2WG12SNQYL&keywords=Siddhartha&qid=1662220169&s=books&smid=A1UNQM1SR2CHM&sprefix=siddharth%2Cstripbooks%2C215&sr=1-1">Siddhartha</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-32 text-sm rounded-sm">Hermann Hesse</p>
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
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/D%C3%B6n%C3%BC%C5%9F%C3%BCm-Franz-Kafka/dp/6053609323/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=62HX63HZEHJE&keywords=D%C3%B6n%C3%BC%C5%9F%C3%BCm&qid=1662220291&s=books&smid=A1UNQM1SR2CHM&sprefix=d%C3%B6n%C3%BC%C5%9F%C3%BC%2Cstripbooks%2C120&sr=1-1">Dönüşüm</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-28 text-sm rounded-sm">Franz Kafka</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={WitcherImage}
                        alt="Andrzej Sapkowski yazmış olduğu Roman kitabı."
                        quality={100}
                        layout="responsive"
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/Son-Dilek-Andrzej-Sapkowski/dp/605299018X/ref=sr_1_1?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PARPIOAULU9Q&keywords=the+witcher+son+dilek&qid=1662220334&s=books&smid=A1UNQM1SR2CHM&sprefix=the+wticher+son+dilek%2Cstripbooks%2C111&sr=1-1">The Witcher Son Dilek</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-36 text-sm rounded-sm">Andrzej Sapkowski</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
            <article className="row-span-3">
                <div className="relative">
                    <div className="mt-20 w-50 h-86">
                       <NextImage
                        src={RonesansImage}
                        alt="Oliver Bowden yazmış olduğu Roman kitabı."
                        quality={100}
                        layout="responsive"
                        className="object-cover	rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                       />
                        <div className="mt-2 space-y-1 text-zinc-600 dark:text-zinc-200 text-base transition-colors font-semibold">
                           <a className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help" target="_blank" href="https://www.amazon.com.tr/Assassins-Creed-R%C3%B6nesans-Suikast%C3%A7%C4%B1n%C4%B1n-%C4%B0nanc%C4%B1/dp/9944828378/ref=sr_1_9?__mk_tr_TR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1SN86F8ZYWR7E&keywords=Assasins+creed&qid=1662220385&s=books&smid=A1UNQM1SR2CHM&sprefix=assasins+cree%2Cstripbooks%2C123&sr=1-9">Assasin'S Creed Rönesans</a>
                           <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-28 text-sm rounded-sm">Oliver Bowden</p>
                           <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">Bitirdim</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}