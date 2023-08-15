import notFound from "@/assets/img/notFound.png";
import Head from "next/head";
import Image from "next/image";

const NotFoundPage = () => {

  return (
    <div style={{ textAlign: "center", background: "#f2f4f8" }}>
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="This is news portal of yeasin shamim by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={notFound}
        width={700}
        alt="error_image"
        height={400}
        style={{ display: "flex", margin: "50px auto" }}
        className="w-1/2 h-1/3"
      />
      {/* gridTemplateColumns: 'repeat(auto-fit, minmax(400px, auto))', */}
    </div>
  );
};

export default NotFoundPage;

