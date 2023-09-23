import Document, { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react"; // Import useState

class MyDocument extends Document {
  render() {
    // Define a state variable to manage the popup's visibility
    const [showPopup, setShowPopup] = useState(false);

    const atOptions = {
      key: 'deb194919e9b256d89abb7d5c7aa350a',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };

    // Function to toggle the popup
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    return (
      <Html lang="en">
        <Head>
          {/* ...Your existing head content... */}

          {/* JavaScript code to handle the popup */}
          <script dangerouslySetInnerHTML={{ __html: `
            // Show the popup when the button is clicked
            function showPopup() {
              var popup = document.getElementById('popup');
              popup.style.display = 'block';
            }

            // Close the popup when the close button is clicked
            function closePopup() {
              var popup = document.getElementById('popup');
              popup.style.display = 'none';
            }

            // Close the popup when the background overlay is clicked
            function closePopupOnOverlayClick(event) {
              var popup = document.getElementById('popup');
              if (event.target === popup) {
                popup.style.display = 'none';
              }
            }

            // Add click event listeners
            var showPopupButton = document.getElementById('showPopupButton');
            showPopupButton.addEventListener('click', showPopup);

            var closePopupButton = document.getElementById('closePopup');
            closePopupButton.addEventListener('click', closePopup);

            var popupOverlay = document.getElementById('popup');
            popupOverlay.addEventListener('click', closePopupOnOverlayClick);
          ` }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Privacy Policy Popup */}
          <div className={`popup ${showPopup ? 'show' : ''}`} id="popup">
            <div className="popup-content">
              <span className="close" id="closePopup" onClick={togglePopup}>&times;</span>
              <p>
                By using this website, you agree to our <a href="https://www.termsfeed.com/live/6c24d6a5-fc70-4b4c-b4f0-edf8107e45bf" target="_blank">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;