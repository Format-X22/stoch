import Server from './Server';
import Stock from './Stock';
import Loop from './Loop';

const stock = new Stock();
const loop = new Loop(stock);
const server = new Server(loop);

loop.start().catch(error => console.log('Error on start loop!', error));
