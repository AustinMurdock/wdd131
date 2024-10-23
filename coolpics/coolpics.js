
const menuButton = document.querySelector("#menu-button");
const menuList = document.querySelector("#menu-list");
const gallery = document.querySelector(".gallery");

function toggleMenu(event) {
    menuList.classList.toggle("hide");
}

function handleResize(event) {
    if (window.innerWidth >= 1000) {
        menuList.classList.remove("hide");
    }
    else {
        menuList.classList.add("hide");
    }
}

function viewerTemplate(imgPath, imgAltText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imgPath}" alt="${imgAltText}">
        </div>
        `;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const element = event.target;
    // get the src attribute from that element and 'split' it on the "-"
    let fullElement = element.src.split("-")[0];
    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    fullElement += "-full.jpeg";
    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullElement, event.target.alt));
    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.body.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer(event) {
    // console.log("closeViewer triggered");
    // document.body.removeChild(document.querySelector(".viewer"));
    document.querySelector(".viewer").remove();
}

handleResize();

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", viewHandler);
