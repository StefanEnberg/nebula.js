import SvgIcon from './SvgIcon';

const search = (props) => ({
  ...props,
  shapes: [
    {
      type: 'path',
      attrs: {
        d: 'M15.7873809,13.80959 C16.1870614,14.209868 15.9872212,15.1104934 15.4876205,15.5107714 C15.08794,15.9110493 14.1886588,16.2112578 13.7889782,15.8109798 L11.0911347,13.1091035 L10.9912145,12.5086866 L10.2917736,11.8082001 C9.19265216,12.5086866 7.89369045,13.0090341 6.49480859,13.0090341 C2.89768383,13.0090341 0,10.1070188 0,6.50451703 C0,2.90201529 2.89768383,0 6.49480859,0 C10.0919334,0 12.9896172,2.90201529 12.9896172,6.50451703 C12.9896172,7.90548992 12.4900165,9.20639333 11.7905756,10.3071577 L12.4900165,11.0076442 L13.0895373,11.1077137 L15.7873809,13.80959 Z M11.2909749,6.50451703 C11.2909749,5.20361362 10.7913743,4.00277971 9.89209309,3.00208478 C8.9928119,2.10145935 7.79377031,1.60111188 6.49480859,1.60111188 C5.19584688,1.60111188 3.99680529,2.10145935 2.99760397,3.00208478 C2.09832278,4.00277971 1.59872212,5.20361362 1.59872212,6.50451703 C1.59872212,7.80542043 2.09832278,9.00625434 2.99760397,9.90687978 C3.89688516,10.8075052 5.09592674,11.3078527 6.49480859,11.3078527 C7.79377031,11.4079222 8.9928119,10.9075747 9.89209309,9.90687978 C10.7913743,9.00625434 11.2909749,7.80542043 11.2909749,6.50451703 Z',
      },
    },
  ],
});
export default (props) => SvgIcon(search(props));
export { search as remove };
