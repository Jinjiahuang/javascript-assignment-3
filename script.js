var view = document.createElement("div");
view.className = "view";
document.body.appendChild(view);

var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);

var sun = document.createElement("div");
sun.className = "sun";
view.appendChild(sun);

var i = 0;
while (i < 5) {
    var ray = document.createElement("div");
    ray.className = "ray-" + (i + 1);
    sun.appendChild(ray);
    i++;
}

var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain);

var topyo = document.createElement("div");
topyo.className = "mountain-top";
mountain.appendChild(topyo);

var p = 0;
do {
    var cap = document.createElement("div");
    cap.className = "mountain-cap-" + (p + 1);
    topyo.appendChild(cap);
    p++;
} while (p < 3);