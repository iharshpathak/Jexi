// creating custom marker elements
 const createMarkerElement = (src, size = 40) => {
  const el = document.createElement("div");
  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "contain";
  el.style.backgroundImage = `url('${src}')`;
  return el;
};

export default createMarkerElement