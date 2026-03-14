const iddosvideosciganos = ["5r3qf5t88s8l", "6pr22m1o8acu", "8085btt2fydl","c9h671zeljjm", "sjk88cb1oa97", "e8htk7vuzydv", "amavgot0tyju", "oidoz9h7f2ry", "33pzwmzdwpip",];

const container = document.getElementById('buttons-container');

iddosvideosciganos.forEach((iddosvideoscigano, index) => {
    const butaodocu = document.createElement("button");
    butaodocu.id = `cudobutao-${index + 1}`;
    butaodocu.innerText =  `${index + 1}`;
    butaodocu.classList.add('raura');

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

function naoclickaxx3 () {
    window.location.href ="index.html";
}
