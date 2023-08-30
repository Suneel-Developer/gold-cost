import React from "react";
import Link from "next/link";

const LetsStartPage = () => {
  return (
    <div className="bg-mobile_color h-screen w-full p-4 text-center">
      <h1 className="text-xl font-bold">Mobile Page Content</h1>
      {/* Button to navigate to signup page */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="412"
        height="112"
        viewBox="0 0 412 112"
        fill="none"
      >
        <path
          d="M411.814 50.2366C405.083 57.8331 396.998 64.1634 388.397 69.573C379.795 74.9826 370.617 79.4714 361.267 83.4423C342.481 91.2401 322.803 96.736 302.953 101.023C263.137 109.31 222.256 112.13 181.634 110.663C171.479 110.231 161.323 109.426 151.225 108.418C141.128 107.325 131.03 105.944 121.018 104.246C101.024 100.649 81.0868 95.9591 62.0993 88.5066C52.6056 84.7947 43.3132 80.5361 34.5675 75.2416C25.908 69.9183 17.5075 63.8181 10.9194 55.8764C7.6685 51.9343 4.76283 47.6182 2.89285 42.7841C0.994103 38.0075 0.0447349 32.8569 0.303655 27.7351C0.562576 22.6132 2.02979 17.6065 4.27377 13.0602C6.60405 8.51381 9.65356 4.42786 12.9908 0.629639C9.73986 4.51418 6.80543 8.68645 4.619 13.2328C2.51886 17.8367 1.19549 22.7859 1.08042 27.7926C0.735191 37.8924 5.42453 47.5319 12.0701 54.9269C18.6007 62.5521 26.9149 68.4508 35.5456 73.6014C44.2338 78.6945 53.4974 82.7804 62.9336 86.3197C100.909 100.16 141.444 105.915 181.749 107.613C222.141 109.339 262.763 106.491 302.464 98.7502C322.286 94.7794 341.906 89.5424 360.692 82.0899C370.071 78.378 379.306 74.1194 387.994 68.9688C396.682 63.7894 404.881 57.718 411.786 50.2942L411.814 50.2366Z"
          fill="white"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="572" height="207" viewBox="0 0 572 207" fill="none">
  <path d="M285.876 206.449C443.539 206.449 571.35 160.303 571.35 103.379C571.35 46.4556 443.539 0.309692 285.876 0.309692C128.213 0.309692 0.401855 46.4556 0.401855 103.379C0.401855 160.303 128.213 206.449 285.876 206.449Z" fill="url(#paint0_radial_1_1102)"/>
  <defs>
    <radialGradient id="paint0_radial_1_1102" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(287.112 102.454) scale(286.713 102.942)">
      <stop stop-color="white"/>
      <stop offset="0.07" stop-color="#E8DED7" stop-opacity="0.85"/>
      <stop offset="0.16" stop-color="#CAB5A5" stop-opacity="0.65"/>
      <stop offset="0.26" stop-color="#B09079" stop-opacity="0.48"/>
      <stop offset="0.37" stop-color="#9A7153" stop-opacity="0.33"/>
      <stop offset="0.47" stop-color="#885835" stop-opacity="0.21"/>
      <stop offset="0.58" stop-color="#7A441D" stop-opacity="0.12"/>
      <stop offset="0.7" stop-color="#70360D" stop-opacity="0.05"/>
      <stop offset="0.83" stop-color="#6A2E03" stop-opacity="0.01"/>
      <stop offset="1" stop-color="#692C00" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
      <Link href="/signup" className="bg-blue-500 text-white p-2 m-2 rounded">
        Go to Signup
      </Link>
    </div>
  );
};

export default LetsStartPage;
