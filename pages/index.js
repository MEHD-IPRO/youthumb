const getYouTubeThumbnail = (url) => {
  let regExp = /.(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]).*/;
  let match = url.match(regExp);

  if (match && match[1].length === 11) {
    const videoURL = match[1];
    const thumbnailBaseUrl = "http://img.youtube.com/vi/";

    const options = [
      { resolution: "HD (1280x720)", code: "maxresdefault" },
      { resolution: "SD (640x480)", code: "sddefault" },
      { resolution: "Normal (480x360)", code: "hqdefault" },
      { resolution: "Medium (320x180)", code: "mqdefault" },
      { resolution: "Low (120x90)", code: "default" },
    ];

    const thumbnailOptions = options.map((option) => ({
      resolution: option.resolution,
      url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
    }));

    setThumbnailOptions(thumbnailOptions);
    setVideoURL("");
  } else {
    setThumbnailOptions([]);
  }
};

const downloadImage = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "thumbnail.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

document.querySelector(".btn-blue").addEventListener("click", () => {
  getYouTubeThumbnail(document.querySelector("input").value);
});

const thumbnailOptions = document.querySelectorAll(".thumbnail-option");

thumbnailOptions.forEach((option, index) => {
  option.querySelector("button").addEventListener("click", () => {
    const imageUrl = option.querySelector("img").src;
    downloadImage(imageUrl);
  });
});