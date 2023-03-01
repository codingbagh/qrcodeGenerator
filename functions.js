import qrcode from "qrcode";

export const barcodeMaker = (element) => {
  qrcode.toCanvas(canvas, "Hello Botech", function (error) {
    if (error) console.error(error);
    console.log("success!");
  });
};

export const download = async (element, canvas) => {
  var download = element;
  var image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
};


