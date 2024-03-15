import GitHub from "./assets/GitHub.svg";
import Instagram from "./assets/Instagram.svg";
import Qiita from "./assets/Qiita.png";
import X from "./assets/X.svg";
import Zenn from "./assets/Zenn.svg";
import { Social } from "./types";

const socials: Social[] = [
  {
    service: "X",
    url: "https://twitter.com/",
    logo: X,
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/",
    logo: Instagram,
  },
  {
    service: "GitHub",
    url: "https://github.com/",
    logo: GitHub,
  },
  {
    service: "Zenn",
    url: "https://zenn.dev/",
    logo: Zenn,
  },
  {
    service: "Qiita",
    url: "https://qiita.com/",
    logo: Qiita,
  },
  {
    service: "AtCoder",
    url: "https://atcoder.jp/users/",
    logo: null,
  },
];

export { socials };
