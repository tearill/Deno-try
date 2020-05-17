import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (main)`); // 3 6
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (main)`); // 2
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (main)`); // 4
};
