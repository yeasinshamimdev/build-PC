import ChooseCard from "@/components/Common/ChooseCard";
import RootLayout from "@/components/Layouts/RootLayout";
import { Button, notification } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const processorData = useSelector((state) => state.buildPC.processor);
  const motherboardData = useSelector((state) => state.buildPC.motherboard);
  const ramData = useSelector((state) => state.buildPC.ram);
  const gpuData = useSelector((state) => state.buildPC.gpu);
  const powerSupplyData = useSelector((state) => state.buildPC.powerSupply);
  const ssdData = useSelector((state) => state.buildPC.ssd);
  const monitorData = useSelector((state) => state.buildPC.monitor);
  const keyboardData = useSelector((state) => state.buildPC.keyboard);
  const mouseData = useSelector((state) => state.buildPC.mouse);
  const casingData = useSelector((state) => state.buildPC.casing);

  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Congratulations',
      description:`You have successfully built the PC`});
  };

  let disabledBtn = true;
  if (processorData && motherboardData && ramData && gpuData && powerSupplyData && ssdData && keyboardData && casingData && monitorData && mouseData){
    disabledBtn = false;
  }

   const handleComplete = () => {
    openNotificationWithIcon('success')
    setTimeout(() => {
      router.push("/pc-builder/choose/complete")
    }, 2000);
  }

  return (
    <div className='min-h-screen text-black mx-auto max-w-[1280px]'>
      <Head>
        <title>Build PC</title>
        <meta property="og:title" content="build my dream pc" key="build-pc"  />
      </Head>
      <div className="border border-blue-200 shadow rounded-md mt-8 lg:mt-16 px-4 lg:px-10 mb-12">
        <h1 className="text-3xl font-bold text-center mb-10">Build Your Dream PC</h1>
        {contextHolder}
        { processorData ? <ChooseCard value={processorData} index={0} /> : <ChooseCard value={processorData} index={0} />}
        { motherboardData ? <ChooseCard value={motherboardData} index={1} /> : <ChooseCard value={motherboardData} index={1} />}
        { ramData ? <ChooseCard value={ramData} index={2} /> : <ChooseCard value={ramData} index={2} />}
        { gpuData ? <ChooseCard value={gpuData} index={3} /> : <ChooseCard value={gpuData} index={3} />}
        { powerSupplyData? <ChooseCard value={powerSupplyData} index={4} /> : <ChooseCard value={powerSupplyData} index={4} />}
        { ssdData? <ChooseCard value={ssdData} index={5} /> : <ChooseCard value={ssdData} index={5} />}
        { monitorData? <ChooseCard value={monitorData} index={6} /> : <ChooseCard value={monitorData} index={6} />}
        { keyboardData? <ChooseCard value={keyboardData} index={7} /> : <ChooseCard value={keyboardData} index={7} />}
        { mouseData? <ChooseCard value={mouseData} index={8} /> : <ChooseCard value={mouseData} index={8} />}
        { casingData? <ChooseCard value={casingData} index={9} /> : <ChooseCard value={casingData} index={9} />}
        <div className="flex justify-end py-4">
          <Button onClick={handleComplete} className="btn btn-primary text-white disabled:text-white" 
          disabled={disabledBtn} 
          >
            Complete Build 
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout >
    { page}
  </RootLayout>
}