import Casing from "@/assets/img/casingImg.png";
import CPUIcon from "@/assets/img/cpuIcon.png";
import Gpu from "@/assets/img/gpuIcon.png";
import Keyboard from "@/assets/img/keyboardIcon.png";
import Monitor from "@/assets/img/monitorIcon.png";
import MotherboardIcon from "@/assets/img/motherboardIcon.png";
import Mouse from "@/assets/img/mouseIcon.png";
import PowerSupply from "@/assets/img/powerSupply.png";
import Ram from "@/assets/img/ramIcon.png";
import Sdd from "@/assets/img/ssdIcon.png";


export const chooseBuildPC = [
  {
    img: CPUIcon,
    title: "Processor",
    redirectPath: "/pc-builder/choose/processor",
    required: true,
  },
  {
    img: MotherboardIcon,
    title: "Motherboard",
    redirectPath: "/pc-builder/choose/motherboard",
    required: true,
  },
  {
    img: Ram,
    title: "RAM",
    redirectPath: "/pc-builder/choose/ram",
    required: true,
  },
  {
    img: Gpu,
    title: "Graphics Card",
    redirectPath: "/pc-builder/choose/gpu"
  },
  {
    img: Keyboard,
    title: "Keyboard",
    redirectPath: "/pc-builder/choose/keyboard",
  },
  {
    img: Monitor,
    title: "Monitor",
    redirectPath: "/pc-builder/choose/monitor",
  },
  {
    img: Mouse,
    title: "Mouse",
    redirectPath: "/pc-builder/choose/mouse",
  },
  {
    img: PowerSupply,
    title: "Power Supply",
    redirectPath: "/pc-builder/choose/power-supply",
    required: true,
  },
  {
    img: Sdd,
    title: "Storage",
    redirectPath: "/pc-builder/choose/storage",
    required: true,
  },
  {
    img: Casing,
    title: "Casing",
    redirectPath: "/pc-builder/choose/casing",
    required: true,
  }
];