import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

import { Social } from "./types";
import Qiita from "../public/favicon.png";

const socials: Social[] = [
  {
    service: "X",
    url: "https://twitter.com/",
    logo: <FaXTwitter />,
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/",
    logo: <FaInstagram />,
  },
  {
    service: "GitHub",
    url: "https://github.com/",
    logo: <FaGithub />,
  },
  {
    service: "Zenn",
    url: "https://zenn.dev/",
    logo: <SiZenn />,
  },
  {
    service: "Qiita",
    url: "https://qiita.com/",
    logo: <Qiita />,
  },
  {
    service: "AtCoder",
    url: "https://atcoder.jp/users/",
    logo: null,
  },
];

export { socials };
