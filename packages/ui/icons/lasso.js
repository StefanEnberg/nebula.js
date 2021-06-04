import SvgIcon from './SvgIcon';

const lasso = (props) => ({
  ...props,
  shapes: [
    {
      type: 'path',
      attrs: {
        d: 'M15.9488039,5.20769129 C16.0487326,6.70662306 15.3492311,8.30548361 14.050157,9.30477145 C12.651154,10.5039169 10.8524359,10.8037032 8.85386017,10.4039881 L7.3549284,10.0042729 L5.75606786,9.70448659 C5.75606786,9.90434416 5.65613907,10.0042729 5.4562815,10.2041305 C5.05656637,10.6038456 4.55692244,10.8037032 4.05727852,10.8037032 C3.75749217,10.8037032 3.45770582,10.7037744 3.15791946,10.6038456 C3.05799068,10.903632 3.15791946,11.2034184 3.45770582,11.7030623 C5.05656637,14.0014243 3.85742095,15.9000712 3.75749217,16 L2.2585604,15.3004985 C2.2585604,15.2005697 2.95806189,14.0014243 1.95877405,12.6024213 C1.6589877,12.0028486 1.15934378,11.0035608 1.55905891,10.0042729 C1.6589877,9.80441537 1.75891648,9.6045578 1.95877405,9.40470024 C1.6589877,8.90505631 1.55905891,8.30548361 1.85884527,7.7059109 C1.55905891,7.40612455 1.25927256,7.1063382 1.15934378,6.70662306 C0.859557424,5.90719279 0.959486209,4.5081898 1.6589877,3.30904439 C1.95877405,2.6095429 2.55834676,2.0099702 3.15791946,1.51032628 C3.95734974,0.91075357 4.95663758,0.610967217 6.15578299,0.311180864 C9.05371774,-0.388320626 11.9516525,0.111323295 13.9502282,1.61025506 C15.1493736,2.50961412 15.8488751,3.80868831 15.9488039,5.20769129 Z M13.0508691,8.10562604 C13.8502994,7.40612455 14.3499433,6.40683671 14.3499433,5.30762008 C14.2500145,4.20840345 13.550513,3.40897318 12.9509403,2.90932926 C12.1515101,2.40968533 11.252151,2.0099702 10.1529344,1.81011263 C8.95378895,1.61025506 7.75464354,1.71018384 6.45556935,1.91004141 C4.75678001,2.30975655 3.65756338,3.00925804 3.05799068,4.10847467 C2.55834676,5.00783373 2.65827554,5.90719279 2.75820433,6.20697914 C2.75820433,6.30690792 2.85813311,6.40683671 3.05799068,6.40683671 C3.15791946,6.40683671 3.25784825,6.40683671 3.35777703,6.40683671 C3.45770582,6.40683671 3.45770582,6.40683671 3.45770582,6.40683671 L3.5576346,6.40683671 L3.65756338,6.40683671 C4.65685123,6.40683671 5.4562815,6.90648063 5.85599664,7.80583969 L5.85599664,8.00569726 C6.35564056,8.10562604 7.05514205,8.30548361 7.75464354,8.50534118 L9.25357531,8.90505631 C10.0530056,9.0049851 10.7525071,9.0049851 11.4520086,8.80512753 C12.0515813,8.70519875 12.5512252,8.40541239 13.0508691,8.10562604 Z',
      },
    },
  ],
});

export default (props) => SvgIcon(lasso(props));
export { lasso };
