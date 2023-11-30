import { writable } from "svelte/store";


import childrenClothing1 from './assets/images/Clothing and Bedding/ChildrenClothing1.jpg'
import childrenClothing2 from './assets/images/Clothing and Bedding/ChildrenClothing2.jpg'
import HatGloveScarves1 from './assets/images/Clothing and Bedding/HatsGloveScarves1.jpg'
import HatGloveScarves2 from './assets/images/Clothing and Bedding/HatsGloveScarves2.jpg'
import Sleepingbag1 from './assets/images/Clothing and Bedding/SleepingBags1.jpg'
import Sleepingbag2 from './assets/images/Clothing and Bedding/SleepingBags2.webp'
import Mat from './assets/images/Clothing and Bedding/SleepingMatsPads.jpg'
import Tent from './assets/images/Clothing and Bedding/TentSleeping Bags.avif'

import Backpacks1 from './assets/images/Educational Supplies/Backpacks1.jpg'
import Backpacks2 from'./assets/images/Educational Supplies/Backpacks2.webp'
import Crayons from './assets/images/Educational Supplies/Crayons.jpg'
import Erasers from './assets/images/Educational Supplies/Erasers.jpg'
import GeometrySet from './assets/images/Educational Supplies/GeometrySets.jpg'
import GlueSticksTape from './assets/images/Educational Supplies/GlueSticksTape.jpg'
import Markers from './assets/images/Educational Supplies/Markers.jpg'
import PensPencils from './assets/images/Educational Supplies/PensPencils.jpg'
import Rulers from './assets/images/Educational Supplies/Rulers.jpg'
import SchoolNotebooks1 from './assets/images/Educational Supplies/SchoolNotebooks1.jpg'
import SchoolNotebooks2 from './assets/images/Educational Supplies/SchoolNotebooks2.jpg'
import Scissors from './assets/images/Educational Supplies/Scissors.webp'
import uniform1 from './assets/images/Educational Supplies/uniform1.webp'
import uniform2 from './assets/images/Educational Supplies/uniform2.webp'

import BabyFood1 from'./assets/images/Food Items/BabyFood1.webp'
import BabyFood2 from'./assets/images/Food Items/BabyFood2.webp'
import BabyFood3 from'./assets/images/Food Items/BabyFood3.jpg'
import BabyFormula from'./assets/images/Food Items/BabyFormula.jpg'
import CannedFruits from'./assets/images/Food Items/CannedFruits.webp'
import CannedTomatoes from'./assets/images/Food Items/CannedTomatoes.webp'
import Milk from'./assets/images/Food Items/Milk.jpg'
import noodles1 from'./assets/images/Food Items/noodles.jpg'
import noodles2 from'./assets/images/Food Items/noodles.webp'
import Oatmeal from'./assets/images/Food Items/Oatmeal.webp'
import oil from'./assets/images/Food Items/oil.jpg'
import pasta from'./assets/images/Food Items/pasta.jpg'
import Rice from'./assets/images/Food Items/Rice.webp'
import Salt from'./assets/images/Food Items/Salt.jpg'
import Sugar from'./assets/images/Food Items/Sugar.webp'
import Water from'./assets/images/Food Items/Water.jpg'



import Acetaminophen from './assets/images/Health Essentials/Acetaminophen.jpg'
import Antacids from './assets/images/Health Essentials/Antacids.png'
import Antibiotics from './assets/images/Health Essentials/Antibiotics.png'
import Aspirin from './assets/images/Health Essentials/Aspirin.avif'
import BandAids from './assets/images/Health Essentials/Band-Aids.jpeg'
import BloodPressureMonitor from './assets/images/Health Essentials/BloodPressureMonitor.webp'
import crutch from './assets/images/Health Essentials/crutch.webp'
import diapers from './assets/images/Health Essentials/diapers.webp'
import EpiPen from './assets/images/Health Essentials/EpiPen.jpg'
import HandSanitizer from './assets/images/Health Essentials/HandSanitizer.jpg'
import InstantColdPacks from './assets/images/Health Essentials/InstantColdPacks.jpg'
import Insulin from './assets/images/Health Essentials/Insulin.jpg'
import IronSupplements from './assets/images/Health Essentials/IronSupplements.png'
import Multivitamins1 from './assets/images/Health Essentials/Multivitamins1.jpg'
import Multivitamins2 from './assets/images/Health Essentials/Multivitamins2.webp'
import SterileGauzePads from './assets/images/Health Essentials/SterileGauzePads.jpg'
import Omega3 from './assets/images/Health Essentials/Omega3.jpg'
import WheelChair from './assets/images/Health Essentials/WheelChair.jpg'

import newProduct from './assets/images/newProduct.jpg';

export const products = writable([
  
{
    image:childrenClothing1,
    name:"children Clothing",
    id:"2",
    category:"Clothing and Bedding",
    number:2500,
    Available:true

},
{
    image:childrenClothing2,
    name:"children Clothing",
    id:"3",
    category:"Clothing and Bedding",
    number:1500,
    Available:true

},
{
    image:HatGloveScarves1,
    name:"Hat-Glove-Scarves Set",
    id:"4",
    category:"Clothing and Bedding",
    number:2000 ,
    Available:true,
},
{
    image:HatGloveScarves2,
    name:"Hat-Glove-Scarves Set",
    id:"5",
    category:"Clothing and Bedding",
    number:1500,
    Available:false
},

{
    image:Sleepingbag1,
    name:"Sleeping bag",
    id:"7",
    category:"Clothing and Bedding",
    number:2000,
    Available:false
},
{
    image:Sleepingbag2,
    name:"Sleeping bag",
    id:"8",
    category:"Clothing and Bedding",
    number:2000,
    Available:false
},
{
    image:Mat,
    name:"Mat",
    id:"9",
    category:"Clothing and Bedding",
    number:1500,
    Available:true
},
{
    image:Tent,
    name:"Tent",
    id:"10",
    category:"Clothing and Bedding",
    number:4000,
    Available:true
},


{
    image:Backpacks1,
    name:"Backpack",
    id:"11",
    category:"Educational Supplies",
    number:5000,
    Available:false
},
{
    image:Backpacks2,
    name:"Backpack",
    id:"12",
    category:"Educational Supplies",
    number:4000,
    Available:true
},
{
    image:Crayons,
    name:"Crayons",
    id:"14",
    category:"Educational Supplies",
    number:300,
    Available:false
},
{
    image:Erasers,
    name:"Erasers",
    id:"15",
    category:"Educational Supplies",
    number:200,
    Available:true
},
{
    image:GeometrySet,
    name:"Geometry Set",
    id:"16",
    category:"Educational Supplies",
    number:900,
    Available:false
},
{
    image:GlueSticksTape,
    name:"Glue Sticks",
    id:"17",
    category:"Educational Supplies",
    number:250,
    Available:false
},
{
    image:Markers,
    name:"Markers",
    id:"18",
    category:"Educational Supplies",
    number:2500,
    Available:true
},
{
    image:PensPencils,
    name:"Pens",
    id:"19",
    category:"Educational Supplies",
    number:150,
    Available:true
},
{
    image:Rulers,
    name:"Rulers",
    id:"20",
    category:"Educational Supplies",
    number:100,
    Available:true
},
{
    image:SchoolNotebooks1,
    name:"Notebook",
    id:"21",
    category:"Educational Supplies",
    number:300,
    Available:true
},
{
    image:SchoolNotebooks2,
    name:"Notebooks",
    id:"22",
    category:"Educational Supplies",
    number:400,
    Available:true
},
{
    image:Scissors,
    name:"Scissor",
    id:"23",
    category:"Educational Supplies",
    number:300,
    Available:true
},
{
    image:uniform1,
    name:"uniform",
    id:"24",
    category:"Educational Supplies",
    number:2500,
    Available:true
},
{
    image:uniform2,
    name:"uniform",
    id:"25",
    category:"Educational Supplies",
    number:2500,
    Available:false
},


{
    image:BabyFood1,
    name:"Baby Food",
    id:"26",
    category:"Food",
    number:800,
    Available:false
},
{
    image:BabyFood2,
    name:"Baby Food",
    id:"27",
    category:"Food",
    number:800,
    Available:true

},
{
    image:BabyFood3,
    name:"Baby Food",
    id:"28",
    category:"Food",
    number:800,
    Available:true
},
{
    image:BabyFormula,
    name:"Baby Formula",
    id:"29",
    category:"Food",
    number:2200,
    Available:true
},
{
    image:CannedFruits,
    name:"Canned Fruits",
    id:"30",
    category:"Food",
    number:900,
    Available:false
},
{
    image:CannedTomatoes,
    name:"Canned Tomatoes",
    id:"31",
    category:"Food",
    number:900,
    Available:true
},
{
    image:Milk,
    name:"Milk",
    id:"37",
    category:"Food",
    number:750,
    Available:true
},
{
    image:noodles1,
    name:"noodles",
    id:"38",
    category:"Food",
    number:400,
    Available:true
},
{
    image:noodles2,
    name:"noodles",
    id:"39",
    category:"Food",
    number:400,
    Available:false
},
{
    image:Oatmeal,
    name:"Oatmeal",
    id:"40",
    category:"Food",
    number:500,
    Available:true
},
{
    image:oil,
    name:"Cooking oil",
    id:"41",
    category:"Food",
    number:650,
    Available:false
},
{
    image:pasta,
    name:"pasta",
    id:"42",
    category:"Food",
    number:600,
    Available:false
},

{
    image:Rice,
    name:"Rice",
    id:"45",
    category:"Food",
    number:700,
    Available:true
},
{
    image:Salt,
    name:"Salt",
    id:"46",
    category:"Food",
    number:150,
    Available:false
},
{
    image:Sugar,
    name:"Sugar",
    id:"47",
    category:"Food",
    number:550,
    Available:false
},
{
    image:Water,
    name:"Water",
    id:"49",
    category:"Food",
    number:550,
    Available:true
},


{
    image:Acetaminophen,
    name:"Acetaminophen",
    id:"50",
    category:"Health Essentials",
    number:1150,
    Available:true
},
{
    image:Antacids,
    name:"Antacids",
    id:"51",
    category:"Health Essentials",
    number: 950,
    Available:true
},
{
    image:Antibiotics,
    name:"Antibiotics",
    id:"52",
    category:"Health Essentials",
    number:1300,
    Available:true
},
{
    image:Aspirin,
    name:"Aspirin",
    id:"53",
    category:"Health Essentials",
    number:900,
    Available:true
},
{
    image:BandAids,
    name:"BandAids",
    id:"54",
    category:"Health Essentials",
    number:250,
    Available:true
},
{
    image:BloodPressureMonitor,
    name:"Blood Pressure Monitor",
    id:"55",
    category:"Health Essentials",
    number:6500,
    Available:true
},
{
    image:crutch,
    name:"Crutch",
    id:"56",
    category:"Health Essentials",
    number:10000,
    Available:true
},
{
    image:diapers,
    name:"Diapers",
    id:"57",
    category:"Health Essentials",
    number:3000,
    Available:true
},
{
    image:EpiPen,
    name:"EpiPen",
    id:"59",
    category:"Health Essentials",
    number:2200,
    Available:false
},
{
    image:HandSanitizer,
    name:"Hand Sanitizer",
    id:"60",
    category:"Health Essentials",
    number:550,
    Available:false
},
{
    image:InstantColdPacks,
    name:"Instant Cold Packs",
    id:"62",
    category:"Health Essentials",
    number:600,
    Available:false
},
{
    image:Insulin,
    name:"Insulin",
    id:"63",
    category:"Health Essentials",
    number:1500,
    Available:false
},
{
    image:IronSupplements,
    name:"Iron Supplements",
    id:"64",
    category:"Health Essentials",
    number:600,
    Available:false
},
{
    image:Multivitamins1,
    name:"Multivitamins",
    id:"65",
    category:"Health Essentials",
    number:1200,
    Available:false
},
{
    image:Multivitamins2,
    name:"Multivitamins",
    id:"66",
    category:"Health Essentials",
    number:950,
    Available:false
},
{
    image:SterileGauzePads,
    name:"Sterile Gauze Pads",
    id:"67",
    category:"Health Essentials",
    number:750,
    Available:false
},
{
    image:Omega3,
    name:"Omega3",
    id:"68",
    category:"Health Essentials",
    number:1700,
    Available:true
},
{
    image:WheelChair,
    name:"WheelChair",
    id:"69",
    category:"Health Essentials",
    number:15000,
    Available:true
},




]


);

export const remove = ({ detail }) => {
  products.update((_products) => _products.filter((product) => product.id !== detail));
};

export const add = ({ detail }) => {
  products.update((_products) => [
    {
      id: _products.length + 1,
      image: newProduct,
      ...detail,
    },
    ..._products,
  ]);
};
