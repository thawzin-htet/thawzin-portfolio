// import Link from "next/link";

// import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

// const socials = [
//     { icons: <FaGithub />, path: "" },
//     { icons: <FaLinkedin />, path:"" },
//     { icons: <FaFacebook />, path: "" },
//     { icons: <FaEnvelope />, path: "mailto:htett0144@gmail.com" },
// ];

// const Social = ({containerStyles, iconStyles}) => {
//   return (
//     <div className={containerStyles}>
//         {socials.map((item, index) => {
//             return (
//                 <Link key={index} href={item.path} className={iconStyles}>{item.icons}
//                 </Link>
//             );
//         })}
//     </div>
//   );
// };

// export default Social;

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/thawzin-htet" },
  { icons: <FaLinkedin />, path: "https://linkedin.com/in/thawzinhtet" },
  { icons: <FaFacebook />, path: "https://facebook.com/itsmethaw/" },
  { icons: <FaEnvelope />, path: "mailto://htett0144@gmail.com" },
  
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        // Download CV link - auto download
        if (item.download) {
          return (
            <a
              key={index}
              href={item.path}
              download
              className={iconStyles}
            >
              {item.icons}
            </a>
          );
        }

        // External links (mailto, https)
        if (item.path.startsWith("mailto:") || item.path.startsWith("http")) {
          return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyles}
            >
              {item.icons}
            </a>
          );
        }

        // Internal links (if any)
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
