const container = document.querySelector(".custom-container");
let pages = container.children;
const pageIndicators = document.querySelectorAll(".page-indicator div");
console.log(pages);
console.log(pageIndicators);

function elementInViewport(element) {

    var bounding = element.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

        return true;
    } else {
        return false;
    }
}

function pageNumber() {
    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        if (elementInViewport(element)) {
            return index;
        }
    }
}

setInterval(function() {
    const currentPageIndex = pageNumber();
    if (currentPageIndex != null) {
        const currentPageIndicator = pageIndicators[currentPageIndex];
        currentPageIndicator.classList.remove("circle1");
        currentPageIndicator.classList.add("circle");
        for (let index = 0; index < pageIndicators.length; index++) {
            const element = pageIndicators[index];
            if (index == currentPageIndex) {
                element.classList.remove("circle1");
                element.classList.add("circle");
            } else {
                element.classList.remove("circle");
                element.classList.add("circle1");
            }
        }
    }
}, 10)





//Code that controls the behaviour of the nav-indicator

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  if(el)
  {
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');
    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
  }
  // console.log(el);

  
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});


window.addEventListener('resize', (event) => {items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handleIndicator(e.target)});
    item.classList.contains('is-active') && handleIndicator(item);
  });});




// pageNumber()
setInterval(() => {
  var ind = pageNumber();
  if(ind >= 0)
  {
    handleIndicator(items[ind]);
    if (window.history.pushState) {
      var urlHash = items[ind].getAttribute('href');
      window.history.pushState(null, null, urlHash);
    }
  }
}, 100)



console.log(' .  :.    ...:::.  ....:.        .       :::. .:               ...  ...    :       ...    \r\n   .:       . ....::.   ..               ::   .....            ..   ..     .       ..     \r\n. .:.               .:  ...        ..   ..     . .....         .    ..    .......         \r\n..:.       ..       :.  ..::.      ......              ...  ...:.   .  ...... .::        .\r\n.. ..      .       ..   .. ... ..:....:.                .:.    .:.........     .-.      :.\r\n     .....        .. ..:.    .:  ..:::.                .::.        ..  ..       .:      : \r\n.......:..       .:.::.. .    ..  ... ....   ............... .       ....        .:...... \r\n    ....:....   .:..      .  ...  .     ...:::  ..           ..         .:.      ..   ....\r\n          ....::.          .: .       :+++-*@@#*-....         .         .:.     :.        \r\n            ::.            .....    -#@@@@%@@@@@%#*#*:        .        .:      :.         \r\n            .                ... .:+@@@@@@@@@@@@@@@@@@#-.     .       .:.    ...    ...   \r\n          ..... .....       ....-%@@@@@@@@@@@@@@@@@@@@@@+-:   .     ..:.:....:      ...   \r\n... ...  ......    ..     ....+%@@@@@@@@@@@@@@@@@@@@@@@@@@@@+..........    ::      ..     \r\n .. .               ..    ..:*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=....          ..      ....  .\r\n.:  .               ..   ..-#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=.            .    .    .   \r\n:   .                . ....+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-            .    ..   ..  \r\n....:               .::.. .=#@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@-  ..     ................\r\n   ...........    .::  ...-@@@@@@@@@@@@@@##++==-===*#%%@@@@@@@@@=   .     ..              \r\n       ....:...  .-..  ..:=*@@@@@@@@@%%#*+===---==---++###@@@@@@%.     .. .               \r\n...........-:...::........=%@@@@@@@@%%%#*+==------::::-=++%@@@@@@=...:::. .               \r\n...........-::-:..........*@@@@@@@@@@@%%%@@%#+---+#%@@%#*#*@@@@@@=  ......:            . .\r\n..........::-:............=@@@@@@@@%%%%%%%%@@@#==#@@@%#*+-=*@@@@@=        .           .   \r\n..........-:........::::::-@@@@@@@%@@@@@@++@@@#--*%%@@#*%%+=@@@@@:        .          .   .\r\n....:.::::..........:::----#@@@@@%#***#%%##%@@*::==+##++=---%@%%-.     ....  ...    ..   .\r\n....:....:::-::.....:...:::#@@@@@#*+-::::-+%@%+::--:----:.::*@+%:.   . .  .......  ..    .\r\n-..:...........::---:...:::#@@@@@#*+-:::-*#*#*=:.:::--::...:#@%#:     .            ...    \r\n.-::...............::..::::-%@@@@%##*=+#%@@@@@%++%%+=##+-::-#%#+.    .               .:   \r\n.:=::....::........:..::--:.-%@@@@%%%%@@@@@@@@%%#**++#@@*===**=:...::               .:...:\r\n..................::.....:-::-+**@%%%##@@@@@%##**++*#*%%+===-:      .: .          ..::....\r\n..................:......:::-:...#%%%%*##%###++=------+===:          ..         ..        \r\n...::::..........:.........::--...+%%%%%##*+**+==--:--===:..          :.                 .\r\n.:...:::.........:....::::::...... -@@@@%#*===-::..:-=++- ....        .:    .    .        \r\n:.......::......:...::::::.....  ..:%@@@@@%%#*++++=+***+-  ....       ..  ..... .......   \r\n.........:-:..:-:...:::........... .%%@@@@@@@@@@@@%*++==-      .      .    .          : . \r\n......:......:=:::...:............ :%%%%%@@@@%%#*+=---==-      .   ....    .         ..   \r\n.....::.......:--:............     =%%%##%%%@#===--::----     ..     .               :   .\r\n....:........:===-:::......  ..:-+#%%%%#####%%*=--:::----:-..   ...  .               :..  \r\n............--::......::.  :-=%%%%%%%%%#**##*++=----------=#:.  ....     ...        .     \r\n.::........-:---..     ::-++++####%%####**###++===--------=#-=:.. .        ..  ..         \r\n.::::....-:..---...::-=======+=*****+++**+++*++===----:::-*--=----:.       .    .         \r\n.....:.:-....:-=================++===--===---====--:::::-+-------====--:...     .         \r\n......-:..:-==========----====-==-:::::::::..::--::::::-=----------=======-:.    .....    \r\n......::-=========--===-----=======-:.::......::::..:--------------==========-.       .   \r\n----:.-======---------===----========----:::.:::::-------------::----===========-:   .    \r\n...:-++=====-----------==========--=======+========------------:-----=============-  .    \r\n');

