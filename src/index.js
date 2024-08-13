import { DropDownMenu } from "./ui";
import "./style.css";

const dropDownMenuContainer = document.querySelector("#div-dropdownmenu");
const dropDownMenuContainer1 = document.querySelector("#div-dropdownmenu1");
const dropDownMenu = new DropDownMenu(dropDownMenuContainer, [
  { key: 0, value: "item0" },
  { key: 1, value: "item1" },
]);

const dropDownMenu1 = new DropDownMenu(dropDownMenuContainer1, [
  { key: 0, value: "item0" },
  { key: 1, value: "item1" },
]);
console.log(dropDownMenu.getItem());
