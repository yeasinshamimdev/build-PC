import processorIcon from '@/assets/img/cpuIcon.png';
import gpuIcon from '@/assets/img/gpuIcon.png';
import keyboardIcon from '@/assets/img/keyboardIcon.png';
import monitorIcon from '@/assets/img/monitorIcon.png';
import motherboardIcon from '@/assets/img/motherboardIcon.png';
import mouseIcon from '@/assets/img/mouseIcon.png';
import powerSupplyIcon from '@/assets/img/powerSupply.png';
import ramIcon from '@/assets/img/ramIcon.png';
import storageIcon from '@/assets/img/ssdIcon.png';

export  const dynamicRoutes = [{
  id: 1,
  route: '/processor',
  img: processorIcon,
  title: "Processor"
}, 
{
  id: 2,
  route:'/motherboard',
  img: motherboardIcon,
  title: "Motherboard"
}, 
{
  id: 3,
  route:'/gpu',
  img: gpuIcon,
  title: "Graphics Card"
}, 
{
  id: 4,
  route:'/power-supply-unit',
  img: powerSupplyIcon,
  title: "Power Supply Unit"
}, 
{
  id: 5,
  route:'/keyboard',
  img: keyboardIcon,
  title: "Keyboard"
}, 
{
  id: 6,
  route:'/monitor',
  img: monitorIcon,
  title: "Monitor"
}, 
{
  id: 7,
  route:'/mouse',
  img: mouseIcon,
  title: "Mouse"
}, 
{
  id: 8,
  route:'/ram',
  img: ramIcon,
  title: "RAM"
}, 
{
  id: 9,
  route:'/storage',
  img: storageIcon,
  title: "Storage"
}];