fetch("./data/cycles/0.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("cycle").textContent = data.cycle;
        document.getElementById("state").textContent = data.state.toUpperCase();
        document.getElementById("integrity").textContent = data.integrity.toUpperCase();
    });