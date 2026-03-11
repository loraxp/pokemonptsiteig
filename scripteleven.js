const iddosvideosciganos = ["5r3qf5t88s8l", "6pr22m1o8acu",];

const container = document.getElementById('buttons-container');

iddosvideosciganos.forEach((iddosvideoscigano, index) => {
    const butaodocu = document.createElement("button");
    butaodocu.id = `cudobutao-${index + 1}`;
    butaodocu.innerText =  `${index + 1}`;
    butaodocu.classList.add('jaura');

    butaodocu.onclick = function () {
        fujarjideos(iddosvideoscigano);
    };

    container.appendChild(butaodocu);



});

function fujarjideos(id) {
    const tocadordojideo = document.getElementById('videocarlao');
    tocadordojideo.src = `https://myvidplay.com/e/${id}`;
    console.log(`a dar o jideo: ${id}`);
}