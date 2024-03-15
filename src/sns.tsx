import GitHub from "./assets/GitHub.svg";
import Instagram from "./assets/Instagram.svg";
import Qiita from "./assets/Qiita.png";
import X from "./assets/X.png";
import Zenn from "./assets/Zenn.svg";
import { Social } from "./types";

const socials: Social[] = [
  {
    service: "X",
    url: "https://twitter.com/",
    logo: X,
    color: "#0f1419",
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/",
    logo: Instagram,
    color: "#E1306C",
  },
  {
    service: "GitHub",
    url: "https://github.com/",
    logo: GitHub,
    color: "#171515",
  },
  {
    service: "Zenn",
    url: "https://zenn.dev/",
    logo: Zenn,
    color: "#3EA8FF",
  },
  {
    service: "Qiita",
    url: "https://qiita.com/",
    logo: Qiita,
    color: "#67CB1B",
  },
  {
    service: "AtCoder",
    url: "https://atcoder.jp/users/",
    logo: null,
    color: "#494649",
  },
];

export { socials };
