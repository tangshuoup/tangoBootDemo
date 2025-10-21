import './public-path';
import { runApp } from '@music163/tango-boot';
import routes from './routes';
import './stores';
import './services';
const { name } = require("../package.json");

function render(props) {
  const { container } = props;
  runApp({
    boot: {
      mountElement: container ? container.querySelector('#root') : document.querySelector('#root'),
      qiankun: {
        appName: name
      },
    },
    router: {
      type: 'browser',
      config: routes,
      basename: `/${name}`
    },
  });
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export function bootstrap() {
  console.log('tango app bootstrap');
}

export function mount(props) {
  console.log('tango app from main framework', props);
  render(props);
}

export function unmount() {
  console.log('tango app unmount');
}