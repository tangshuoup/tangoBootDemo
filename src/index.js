import './public-path';
import { runApp } from '@music163/tango-boot';
import routes from './routes';
import './stores';
import './services';
const { name } = require("../package.json");

const { bootstrap, mount, unmount } = runApp({
  boot: {
    mountElement: document.querySelector('#root'),
    qiankun: {
      appName: name
    },
  },
  router: {
    type: 'browser',
    config: routes,
    basename: `/${name}/`
  },
});

export { bootstrap, mount, unmount };


// function render(props) {
//   const { container, setLoading } = props;
//   runApp({
//     boot: {
//       mountElement: container ? container.querySelector('#root') : document.querySelector('#root'),
//       qiankun: {
//         appName: name
//       },
//     },
//     router: {
//       type: 'browser',
//       config: routes,
//       basename: `/${name}`
//     },
//   });
//   setLoading?.(false)
// }

// if (!window.__POWERED_BY_QIANKUN__) {
//   render({});
// }

// export async function bootstrap() {
//   console.log('tango app bootstrap');
// }

// export async function mount(props) {
//   console.log('tango app from main framework', props);
//   render(props);
// }

// export async function unmount() {
//   console.log('tango app unmount');
// }