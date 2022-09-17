import NextImage from "next/image";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BsFillBookFill } from "react-icons/Bs";
import { MdFavorite } from "react-icons/Md";
import NutukImage from "../../static/photos/Nutuk.jpeg";
import AtaturkImage from "../../static/photos/Ataturk.jpeg";
import SiddharthaImage from "../../static/photos/Siddhartha.jpeg";
import DonusumImage from "../../static/photos/Donusum.jpeg";
import WitcherImage from "../../static/photos/Witcher.jpeg";
import RonesansImage from "../../static/photos/Ronesans.jpeg";

export default function BooksCard() {
  return (
    <section className="">
      <Tabs className="mt-5">
        <TabList className="space-x-5">
          <Tab>
            <HStack className="border px-4 pl-4 rounded-md">
              <BsFillBookFill className="dark:text-[#8e8e93] text-[#aeaeb2]" />
              <Text>Tümü</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack className="border px-4 pl-4 rounded-md">
              <MdFavorite className="dark:text-[#8e8e93] text-[#aeaeb2]" />
              <Text>Favoriler</Text>
            </HStack>
          </Tab>
        </TabList>
        <TabPanels className="grid md:grid-cols-3 grid-cols-1 lg:grid-col-4 gap-x-2 gap-y-2">
          <TabPanel px={0}>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={NutukImage}
                    title="Mustafa Kemal Atatürk'ün yazmış olduğu Nutuk"
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Nutuk
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Mustafa Kemal Atatürk
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={AtaturkImage}
                    title="İlker Başbuğ'un kaleme aldığı 20. Yüzyılın en büyük lideri Atatürk."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Atatürk
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      İlker Başbuğ
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Okuyorum
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={SiddharthaImage}
                    title="Hermann Hesse yazmış olduğu felsefe/roman kitabı."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Siddhartha
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Hermann Hesse
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={DonusumImage}
                    title="Franz Kafka yazmış olduğu Roman kitabı."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Dönüşüm
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Franz Kafka
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={WitcherImage}
                    title="Andrzej Sapkowski yazmış olduğu Roman kitabı."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      The Witcher Son Dilek
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Andrzej Sapkowski
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={RonesansImage}
                    title="Oliver Bowden yazmış olduğu Roman kitabı."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Assasin'S Creed Rönesans
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Oliver Bowden
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </TabPanel>
          <TabPanel>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={NutukImage}
                    title="Mustafa Kemal Atatürk'ün yazmış olduğu Nutuk"
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Nutuk
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Mustafa Kemal Atatürk
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={AtaturkImage}
                    title="İlker Başbuğ'un kaleme aldığı 20. Yüzyılın en büyük lideri Atatürk."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Atatürk
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      İlker Başbuğ
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Okuyorum
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={DonusumImage}
                    title="Franz Kafka yazmış olduğu Roman kitabı."
                    quality={100}
                    className="scale-75 translate-y-2 skew-y-2 md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="mt-2 space-y-1 text-zinc-600 transition-colors dark:text-zinc-200 font-semibold text-base">
                    <a
                      className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 rounded-sm cursor-help"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Dönüşüm
                    </a>
                    <p className="bg-[#eeedec] dark:bg-[#373737] pl-2 pr-2 w-[163px] text-sm rounded-sm">
                      Franz Kafka
                    </p>
                    <p className="bg-[#28456c] dark:bg-[#28456c] text-white pl-2 pr-2 w-16 text-sm rounded-sm">
                      Bitirdim
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </section>
  );
}
