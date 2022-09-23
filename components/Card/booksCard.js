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
              <Text>Tümü</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack className="border px-4 pl-4 rounded-md">
              <Text>Favoriler</Text>
            </HStack>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <article className="row-span-3">
              <div className="relative">
                <div className="mt-20 w-50 h-86">
                  <NextImage
                    src={NutukImage}
                    title="Mustafa Kemal Atatürk tarafından yazılan Nutuk."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Nutuk
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Mustafa Kemal Atatürk
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="İlker Başbuğ tarafından yazılan Atatürk'ün Cumhurbaşkanlığı döneminde geçirdiği herşey."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      20. Yüzyılın En Büyük Lideri Atatürk
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      İlker Başbuğ
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Hermann Hesse tarafından yazılan felsefi/roman."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      Siddhartha
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Hermann Hesse
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Franz Kafka tarafından yazılan roman."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      Dönüşüm
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Franz Kafka
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Oliver Bowden tarafından yazılan roman"
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      Assassin's Creed: Rönesans
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Oliver Bowden
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Andrzej Sapkowski tarafından yazılan roman."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      The Witcher - Son Dilek
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Andrzej Sapkowski
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Mustafa Kemal Atatürk tarafından yazılan Nutuk."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href="https://www.amazon.com.tr/Nutuk-Foto%C4%9Fraflarla-Mustafa-Kemal-Atat%C3%BCrk/dp/9944888346"
                    >
                      Nutuk
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Mustafa Kemal Atatürk
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="İlker Başbuğ tarafından yazılan Atatürk'ün Cumhurbaşkanlığı döneminde geçirdiği herşey."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      20. Yüzyılın En Büyük Lideri Atatürk
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      İlker Başbuğ
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
                    title="Franz Kafka tarafından yazılan roman."
                    quality={100}
                    className="md:transform-none object-cover rounded-lg brightness-50 transition-all duration-700 hover:scale-105 hover:brightness-125"
                  />
                  <div className="text-base text-gray-600 dark:text-gray-400 font-semibold transition-colors mt-2 space-y-1">
                    <a
                      className="rounded-md cursor-help pl-2 pr-2"
                      target="_blank"
                      href=""
                    >
                      Dönüşüm
                    </a>
                    <p className="text-sm rounded-sm pl-2 pr-2">
                      Franz Kafka
                    </p>
                    <p className="text-sm text-indigo-900 dark:text-indigo-100 rounded-sm pl-2 pr-2">
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
