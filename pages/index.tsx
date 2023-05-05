import React, { Fragment, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { Outfit } from "next/font/google"

import { Tab } from "@headlessui/react"

import { BsArrowUpRight } from "react-icons/bs"
import { MdClose, MdMenu } from "react-icons/md"
import { HiOutlineChat, HiOutlineUser } from "react-icons/hi"

const outfit = Outfit({ subsets: ["latin"] })

const menuData: {
  id: number
  title: string
  link: string
}[] = [
  {
    id: 1,
    title: "Home",
    link: "#home"
  },
  {
    id: 2,
    title: "Demo",
    link: "/"
  },
  {
    id: 3,
    title: "Pricing",
    link: "#pricing"
  },
  {
    id: 4,
    title: "FAQ",
    link: "#faq"
  }
]

const pricingData: {
  id: number
  title: string
  isPopular: boolean
  monthlyPrice: string
  annualyPrice: string
  features: {
    id: number
    desc: string
  }[]
}[] = [
  {
    id: 1,
    title: "Basic",
    isPopular: false,
    monthlyPrice: "$14",
    annualyPrice: "$140",
    features: [
      {
        id: 1,
        desc: "3 Chatbots"
      },
      {
        id: 2,
        desc: "1 Data source per bot"
      },
      {
        id: 3,
        desc: "300,000 storage tokens per month (what is a storage token?)"
      },
      {
        id: 4,
        desc: "2,000,000 message tokens per month (what is a message token?)"
      },
      {
        id: 5,
        desc: "Web UI and widget theming"
      }
    ]
  },
  {
    id: 2,
    title: "Standard",
    isPopular: true,
    monthlyPrice: "$49",
    annualyPrice: "$490",
    features: [
      {
        id: 1,
        desc: "6 Chatbots"
      },
      {
        id: 2,
        desc: "3 Data sources per bot"
      },
      {
        id: 3,
        desc: "3,000,000 storage tokens per month (what is a storage token?)"
      },
      {
        id: 4,
        desc: "10,000,000 message tokens per month (what is a message token?)"
      },
      {
        id: 5,
        desc: "Web UI and widget theming"
      },
      {
        id: 6,
        desc: "White labelling"
      },
      {
        id: 7,
        desc: "GPT-4"
      },
      {
        id: 8,
        desc: "Slack integration"
      }
    ]
  },
  {
    id: 3,
    title: "Pro",
    isPopular: false,
    monthlyPrice: "$99",
    annualyPrice: "$990",
    features: [
      {
        id: 1,
        desc: "50 Chatbots"
      },
      {
        id: 2,
        desc: "10 Data sources per bot"
      },
      {
        id: 3,
        desc: "10,000,000 storage tokens per month (what is a storage token?)"
      },
      {
        id: 4,
        desc: "20,000,000 message tokens per month (what is a message token?)"
      },
      {
        id: 5,
        desc: "Web UI and widget theming"
      },
      {
        id: 6,
        desc: "White labelling"
      },
      {
        id: 7,
        desc: "GPT-4"
      },
      {
        id: 8,
        desc: "Slack integrations"
      }
    ]
  }
]

const faqData: {
  id: number
  question: string
  answer: string
}[] = [
  {
    id: 1,
    question: "What is a storage token?",
    answer:
      "Storage tokens are used when you synchronise your data from a data source such as Notion with your bot. 1000 storage tokens roughly equals about 750 words. Each time you synchronise a data source it will use more storage tokens."
  },
  {
    id: 2,
    question: "What is a message token?",
    answer:
      "Message tokens are used each time you send a message to a bot and receive a response. Each message uses between 1000-4000 message tokens depending on the questions and the bots response. This means 200,000 message tokens roughly equates to 100 messages."
  },
  {
    id: 3,
    question: "Where can I get help",
    answer:
      "You can get help by visiting our Chat Thing Knowledge Base or by joining our Discord Community"
  }
]

export default function Home() {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [selectedPricingIndex, setSelectedPricingIndex] = useState<number>(0)
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(
    null
  )
  const [isOpenChatBox, setIsOpenChatBox] = useState<boolean>(false)

  const ref = useRef<HTMLInputElement>(null)

  const toggleAccordion = (index: number) => {
    if (selectedAccordion === index) {
      return setSelectedAccordion(null)
    }

    setSelectedAccordion(index)
  }

  return (
    <main
      className={`bg-gray-900 text-gray-50 overflow-hidden relative ${outfit.className}`}
    >
      <Head>
        <title>Chat Bot Webapp</title>
      </Head>

      {/* Start Header */}
      <header className="fixed bg-gray-900 top-0 left-0 w-full z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-semibold">
          <div className="text-2xl h-14 grid place-content-center">
            Chat Bot
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-8">
              {menuData.map((data) => (
                <li key={data.id}>
                  <Link href={data.link} scroll={false}>
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex  gap-4">
            <Link href="/">Sign Up</Link>
            <Link href="/">Sign In</Link>
          </div>
          <button className="lg:hidden" onClick={() => setIsOpenSidebar(true)}>
            <MdMenu size={32} />
          </button>
        </nav>
      </header>
      {/* End Header */}

      {/* Start Sidebar */}
      <aside
        className={`absolute top-0 ${
          isOpenSidebar ? "right-0 opacity-100" : "right-[-400px] opacity-0-0"
        }  min-h-screen sm:max-w-sm w-[320px] bg-gray-900 p-6 pt-24 ring-1 ring-white/10 z-20 transition-all duration-500 ease-in-out`}
      >
        <button onClick={() => setIsOpenSidebar(false)}>
          <MdClose size={32} className="absolute top-10 right-8" />
        </button>
        <ul
          className={`grid gap-4 ${
            isOpenSidebar ? "scale-x-100" : "scale-x-0"
          } transition-all duration-500 ease-in-out`}
        >
          {menuData.map((data) => (
            <li
              key={data.id}
              className="hover:bg-gray-800 rounded-lg font-bold"
            >
              <Link className="block px-3 py-2" href={data.link}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mx-3 my-8 border-t border-gray-600" />
        <ul className="grid gap-4">
          <li className="hover:bg-gray-800 rounded-lg font-bold">
            <Link className="block px-3 py-2" href="/">
              Sign Up
            </Link>
          </li>
          <li className="hover:bg-gray-800 rounded-lg font-bold">
            <Link className="block px-3 py-2" href="/">
              Sign In
            </Link>
          </li>
        </ul>
      </aside>
      {/* End Sidebar */}

      {/* Start Hero Section */}
      <section
        id="home"
        className="relative min-h-screen isolate mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-20 flex flex-col lg:flex-row items-center gap-20 lg:gap-8 justify-between"
      >
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <svg
          viewBox="0 0 1108 632"
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-10rem)] xl:left-[calc(50%-24rem)]"
        >
          <path
            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
            fillOpacity=".2"
            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
          ></path>
          <defs>
            <linearGradient
              id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
              x1="1220.59"
              x2="-85.053"
              y1="432.766"
              y2="638.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4F46E5"></stop>
              <stop offset="1" stop-color="#80CAFF"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center gap-10">
          <div>
            <h1 className="mt-10 text-6xl leading-[1.1] font-bold">
              The Next {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E33147] to-[#75173F]">
                Digital
              </span>{" "}
              {""}
              Assistant
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our Chatbots are trained on our data.
            </p>
          </div>
          <button className="rounded-full w-fit aspect-square bg-gradient-to-r from-[#E33147] to-[#75173F] p-[2px]">
            <div className="bg-gray-900 w-full aspect-square rounded-full">
              <div className="p-6 text-transparent bg-clip-text bg-gradient-to-r from-[#E33147] to-[#75173F] font-semibold text-lg text-left">
                Get{" "}
                <BsArrowUpRight className="text-[#E33147] inline" size={20} />{" "}
                Started
              </div>
            </div>
          </button>
        </div>
        <div>
          <Image
            src="/images/robot.png"
            alt="robot"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </section>
      {/* End Hero Section */}

      <div className="mx-auto max-w-7xl lg:px-8 mb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="col-span-1 px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl w-2/3">
              Connect your data from anywhere
            </h2>
            <p className="mt-4 font-thin leading-6 text-white">
              Connect your bot to you existing data and documents so it can give
              relevant answers to your customers, team, or whoever else might
              find it useful! Currently we support two data sources, but we are
              adding more every day!
            </p>
            <p className="mt-4 font-thin leading-6 text-white">
              <strong>Notion</strong> - Select which Notion pages you want to
              give the bot access to.
            </p>
            <p className="mt-4 font-thin leading-6 text-white">
              <strong>Websites</strong> - Add a list of URLs and Chat Thing will
              scrape the content of the site and make it available to the bot.
            </p>
            <p className="mt-4 font-thin leading-6 text-white">
              <strong>More coming soon. </strong>Google docs, Github, Youtube
              and many more data sources will be added soon!
            </p>
          </div>
          <div className="col-span-1">
            <div className="mx-auto flex max-w-screen-sm">
              <div className="w-full rounded-md bg-gradient-to-b md:bg-gradient-to-r to-[#CD414C] via-[#6D203F] from-[#121826] p-3 md:min-h-[500px]">
                <div className="flex h-full w-full items-center justify-center bg-[#111827] back rounded-md">
                  <Image
                    className="object-contain"
                    src="/images/data.svg"
                    alt="data"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl lg:px-8 mb-44">
        <div className="grid col-span-1 md:grid-cols-2 gap-8 items-center">
          <div className="col-span-1 row-start-2 md:row-start-1">
            <div className="mx-auto flex max-w-screen-sm">
              <div className="w-full rounded-md bg-gradient-to-t md:bg-gradient-to-r to-[#121826] via-[#7646DC] from-[#4E46DC] p-3 md:min-h-[500px]">
                <div className="flex h-full py-14 w-full items-center justify-center bg-[#111827] back rounded-md">
                  <Image
                    className="object-contain"
                    src="/images/sosmed.svg"
                    alt="sosmed"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-start-1 md:row-start-1 px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl w-2/3">
              Chat with your bot anywhere.
            </h2>
            <p className="mt-4 font-thin leading-6 text-white">
              Embed your chatbot on your site or connect to slack, Whatsapp or
              various other Channels of your choice.
            </p>
            <p className="mt-4 font-thin leading-6 text-white">
              We currently support embedding using an iFrame but more channels
              will be added soon.
            </p>
          </div>
        </div>
      </div>

      {/* Start Pricing Section */}
      <section
        id="pricing"
        className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {" "}
            Available plans{" "}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            {" "}
            We have plans to suit all use cases. If none of these plans suit
            you, please get in contact to discuss a custom plan.{" "}
          </p>
        </div>
        <div>
          <div className="mt-16 flex justify-center">
            <Tab.Group
              selectedIndex={selectedPricingIndex}
              onChange={setSelectedPricingIndex}
            >
              <div className="grid">
                <Tab.List className="w-fit mx-auto grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div
                        className={`${
                          selected ? "bg-indigo-500" : ""
                        }  cursor-pointer rounded-full py-1 px-2.5 focus:outline-none`}
                      >
                        <span>Monthly</span>
                      </div>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div
                        className={`${
                          selected ? "bg-indigo-500" : ""
                        }  cursor-pointer rounded-full py-1 px-2.5 focus:outline-none`}
                      >
                        <span>Annualy</span>
                      </div>
                    )}
                  </Tab>
                </Tab.List>
                <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl text-center">
                  {" "}
                  Get two months free on annual plans!{" "}
                </p>
                <Tab.Panels>
                  {Array.of("monthly", "annualy").map((item) => (
                    <Tab.Panel
                      key={item}
                      className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                      {pricingData.map((data) => (
                        <div
                          key={data.id}
                          className={`${
                            data.isPopular
                              ? "bg-white/5 ring-2 ring-indigo-500"
                              : "ring-1 ring-white/10"
                          } rounded-3xl p-8 xl:p-10`}
                        >
                          <div className="flex items-center justify-between gap-x-4">
                            <h3
                              id="73b6ecd1-f340-43ac-9bfe-078032e0f4de"
                              className="text-lg font-semibold leading-8 text-white"
                            >
                              {data.title}
                            </h3>
                            {data.isPopular && (
                              <p className="rounded-full bg-indigo-500 py-1 px-2.5 text-xs font-semibold leading-5 text-white">
                                Most popular{" "}
                              </p>
                            )}
                          </div>
                          <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white">
                              {selectedPricingIndex === 0
                                ? data.monthlyPrice
                                : data.annualyPrice}
                            </span>
                            <span className="text-sm font-semibold leading-6 text-gray-300">
                              {selectedPricingIndex === 0 ? "/month" : "/year"}
                            </span>
                          </p>
                          <Link
                            href="/"
                            className={`${
                              data.isPopular
                                ? "bg-indigo-500  shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                                : "first-line:bg-white/10 hover:bg-white/20 focus-visible:outline-white"
                            } text-white mt-6 block w-full rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                          >
                            Get started
                          </Link>
                          <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                            {data.features.map((feature) => (
                              <li key={feature.id} className="flex gap-x-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-5 flex-none text-white"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                                <span className="text-left">
                                  {feature.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>

          <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 text-left mt-8 flex gap-4 lg:gap-8 flex-wrap lg:flex-nowrap">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-white">
                Free
              </h3>
              <p className="leading-6 text-gray-300">
                {" "}
                We offer a free tier that should allow you to test out Chat
                Thing for personal use and small projects. No credit card
                required. You can try out Chat Thing with{" "}
                <strong>1 chatbot</strong>, <strong>1 data source</strong>,{" "}
                <strong>100,000 storage tokens</strong>,{" "}
                <strong>80,000 message tokens</strong>.{" "}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Create a free account
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section */}

      {/* Start FAQ Section */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center mt-32 mb-16 grid gap-2"
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-left mb-8">
          Frequently asked questions
        </h2>
        {faqData.map((data, index) => (
          <button
            onClick={() => toggleAccordion(index)}
            key={data.id}
            className="accordion-wrapper text-left border-t border-[#C13D4B] hover:border-primary py-4 px-6 cursor-pointer focus:border-primary"
          >
            <div className="cursor-pointer py-2 flex justify-between items-center">
              <h2 className="font-semibold text-subtitle-dark">
                {data.question}
              </h2>
              <span
                className={`${
                  selectedAccordion === index ? "plusminus active" : "plusminus"
                }`}
              ></span>
            </div>
            <div
              ref={ref}
              style={{
                height:
                  selectedAccordion === index ? ref.current?.scrollHeight : 0
              }}
              className={`text-subtitle pr-4 ${
                selectedAccordion === index
                  ? "accordion-content show bounce-pricing"
                  : "accordion-content"
              }`}
            >
              {data.answer}
            </div>
          </button>
        ))}
      </section>
      {/* End FAQ Section */}

      {/* Start Chat Button */}
      <button
        onClick={() => setIsOpenChatBox(!isOpenChatBox)}
        className="fixed z-50 h-[60px] w-[60px] rounded-full bottom-5 right-5 bg-[rgb(17,24,39)] shadow-[rgba(0,0,0,0.2)_0px_4px_19px] border border-gray-50/10 flex items-center justify-center"
      >
        <HiOutlineChat size={34} />
      </button>
      {/* End Chat Button */}

      {/* Start Chat Box */}
      <div
        className={`${
          isOpenChatBox ? "block" : "hidden"
        } fixed z-50 bottom-[100px] right-[20px] max-w-[400px] max-h-[600px] rounded-lg bg-[rgb(17,24,39)] shadow-[rgba(0,0,0,0.2)_0px_4px_19px] border border-gray-50/10 block w-[calc(100vw-40px)] h-[calc(100vh-120px)] overflow-hidden`}
      >
        <div className="flex flex-col h-full bg-gray-900">
          <div className="flex-grow-1 h-full">
            <div className="h-full w-full bg-gray-900">
              <div className="relative w-full h-full flex flex-col overflow-hidden border-gray-400">
                <div className="overflow-y-auto h-full">
                  <div className="flex w-full bg-gray-800">
                    <div className="w-16 flex-shrink-0 flex justify-center py-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center assistant">
                        <HiOutlineChat size={24} />
                      </div>
                    </div>
                    <div className="p-3 text-gray-300 leading-7">
                      <p>
                        Hi ask me anything about Chat Thing, I am hooked up to
                        the {""}
                        <Link className="text-white underline" href="/">
                          Chat Thing Knowledge Base
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="w-16 flex-shrink-0 flex justify-center py-3">
                      <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <HiOutlineUser size={24} />
                      </div>
                    </div>
                    <div className="p-3">
                      <p>Hi</p>
                    </div>
                  </div>
                  <div className="flex w-full bg-gray-800">
                    <div className="w-16 flex-shrink-0 flex justify-center py-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center assistant">
                        <HiOutlineChat size={24} />
                      </div>
                    </div>
                    <div className="p-3">
                      <p>Hello! How can I assist you today?</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <form className="w-full flex items-center gap-3">
                    <div className="w-full">
                      <div className="relative rounded-md shadow-sm">
                        <input
                          type="text"
                          className="bg-gray-800 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-blue-500 rounded-md font-normal"
                        />
                      </div>
                    </div>
                    <button
                      className="send relative flex items-center font-medium px-3 py-2 text-sm rounded-md border border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 send"
                      type="submit"
                    >
                      <span className="flex items-center"> Send </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Chat Box */}
    </main>
  )
}
