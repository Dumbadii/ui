import { DropDownMenu } from "./DropDownMenu";
import { CarouselImage } from "./CarouselImage";
import "./style.css";
import image1 from "./forest1.jpg";
import image2 from "./forest2.jpeg";
import image3 from "./forest3.jpg";

const images = [image1, image2, image3];
const dropDownMenuContainer = document.querySelector("#div-dropdownmenu");
const dropDownMenuContainer1 = document.querySelector("#div-dropdownmenu1");
const carouselImage = document.querySelector(".carouselImage");
const dropDownMenu = new DropDownMenu(dropDownMenuContainer, [
  { key: 0, value: "item0" },
  { key: 1, value: "item1" },
]);

const dropDownMenu1 = new DropDownMenu(dropDownMenuContainer1, [
  { key: 0, value: "item0" },
  { key: 1, value: "item1" },
]);
console.log(dropDownMenu.getItem());

const ci = new CarouselImage(carouselImage, images, 1);
