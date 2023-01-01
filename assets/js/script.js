console.log("connected");

const piz = document.querySelector(".piz");
const past = document.querySelector(".past");
const start = document.querySelector(".start");
const tabs1 = document.querySelector("#tabs-1");
const tabs2 = document.querySelector("#tabs-2");
const tabs3 = document.querySelector("#tabs-3");

past.innerHTML = "Pasta";

function tabsDisappear(tabs) {
  tabs.style.padding = "0";
  tabs.style.margin = "0 auto 0 auto";
  tabs.style.maxWidth = "0";
  tabs.style.maxHeight = "0";
  tabs.style.overflow = "hidden";
}

function tabsAppear(tabs) {
  tabs.style.padding = "0 1rem";
  tabs.style.margin = "0 auto 5rem auto";
  tabs.style.maxWidth = "100rem";
  tabs.style.maxHeight = "150rem";
  tabs.style.display = "block";

}

piz.addEventListener("click", () => {
  tabsAppear(tabs1);
  tabsDisappear(tabs2);
  tabsDisappear(tabs3);
  
});

past.addEventListener("click", () => {
    tabsAppear(tabs2);
  tabsDisappear(tabs1);
  tabsDisappear(tabs3);
  
});

start.addEventListener("click", () => {
    tabsAppear(tabs3);
  tabsDisappear(tabs1);
  tabsDisappear(tabs2);
  
});
