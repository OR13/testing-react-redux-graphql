

import fetch from 'isomorphic-fetch'
global.fetch = fetch

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10 * 1000;

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

