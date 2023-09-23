// Initialize variables
let videoURL = "";
let thumbnailOptions = [];

// Function to extract video ID from YouTube URL
function getYouTubeVideoId(url) {
  let match = url.match(/.(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]).*/);
  return match && match[1].length === 11 ? match[1] : null;
}

// Function to fetch thumbnail options
function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url);
  if (videoId) {
    const thumbnailBaseUrl = "http://img.youtube.com/vi/";
    const options = [
      { resolution: "HD (1280x720)", code: "maxresdefault" },
      { resolution: "SD (640x480)", code: "sddefault" },
      { resolution: "Normal (480x360)", code: "hqdefault" },
      { resolution: "Medium (320x180)", code: "mqdefault" },
      { resolution: "Low (120x90)", code: "default" },
    ];

    thumbnailOptions = options.map((option) => ({
      resolution: option.resolution,
      url: `${thumbnailBaseUrl}${videoId}/${option.code}.jpg`,
    }));
  } else {
    thumbnailOptions = [];
  }
}

// Function to download an image
function downloadImage(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "thumbnail.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Event listener for clicking the "Download Thumbnails" button
document.querySelector(".btn-blue").addEventListener("click", () => {
  const input = document.querySelector("input");
  videoURL = input.value;
  getYouTubeThumbnail(videoURL);
});

// Event listeners for clicking the "Download Image" buttons
const thumbnailButtons = document.querySelectorAll(".btn-blue");
thumbnailButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const imageUrl = thumbnailOptions[index].url;
    downloadImage(imageUrl);
  });
});