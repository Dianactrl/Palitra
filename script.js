const filterContainer = document.getElementById('brand-filters');
const renderContainer = document.getElementById('palette-render');


function initFilters() {
    colorsData.forEach((data, index) => {
        const btn = document.createElement('button');
        btn.classList.add('brand-btn');
        if (index === 0) btn.classList.add('active'); 
        btn.innerText = data.brand;
        btn.onclick = () => {
            document.querySelectorAll('.brand-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPalette(data.brand);
        };
        filterContainer.appendChild(btn);
    });
}


function renderPalette(brandName) {
  renderContainer.innerHTML = '';
    const selectedBrand = colorsData.find(b => b.brand === brandName);

    selectedBrand.collections.forEach(col => {
        const title = document.createElement('h2');
        title.classList.add('collection-title');
        title.innerText = col.name;
        renderContainer.appendChild(title);

        const grid = document.createElement('div');
        grid.classList.add('color-grid');

        col.items.forEach(item => {
            
            const cleanName = item.split('.')[0].replaceAll("-", " ");
            
         
            let imgPath = "";
            if (selectedBrand.brand === "Grandex") {
                imgPath = `img/Grandex/${item}`; 
            } else if (selectedBrand.brand === "Hanex") {
                imgPath = `img/Hanex/${item}`;
            } else if (selectedBrand.brand === "Staron") {
                imgPath = `img/Staron/${item}`;
                } else if (selectedBrand.brand === "Durasein") {
           
                  imgPath = `img/Durasein/${item}`;
                  } else if (selectedBrand.brand === "Neomarm") {
                   imgPath = `img/Neomarm/${item}`;
                   
                   } else if (selectedBrand.brand === "Pluton") {
             
                   imgPath = `img/Pluton/Pluton-${item}`;
                    }
                   
            
            

            const card = document.createElement('div');
            card.classList.add('color-card');
            card.innerHTML = `
                <img src="${imgPath}" alt="${cleanName}" loading="lazy" 
                     onclick="openModal('${imgPath}', '${cleanName}')">
                <p>${cleanName}</p>
            `;
            grid.appendChild(card);
        });
        renderContainer.appendChild(grid);
    });
}

function openModal(imgSrc, title) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('modal-caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerText = title;
}

const scrollBtn = document.getElementById("scrollToTop");


window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};


scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


initFilters();
renderPalette(colorsData[0].brand);