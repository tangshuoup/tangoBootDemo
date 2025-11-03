import { runApp } from "@mijadesign/tango-boot";
import routes from "./routes";
import "./stores";
import "./services";

const { bootstrap, mount, unmount } = runApp({
  boot: {
    mountId: "#root",
  },
  router: {
    config: routes,
  },
});

export { bootstrap, mount, unmount };
