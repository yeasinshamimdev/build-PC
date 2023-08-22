import Head from "next/head";
import { useRouter } from "next/router";

export default function Complete() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/")
  }, 3000);

  return (
    <>
    <Head>
      <title>Congratulation</title>
    </Head>
    <div className="md:mb-4 mb-16 lg:px-0 shadow-xl rounded-lg md:shadow-none min-h-screen" >
      <h2 className={`text-4xl font-bold m-0 text-center mt-10`}>Congratulation</h2>
      <h2 className={`text-2xl font-bold m-0 text-center mt-10`}>Your PC build has been complete!</h2>
    </div>
    </>
  )
}
