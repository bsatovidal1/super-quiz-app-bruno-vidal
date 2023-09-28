import { ContainerProgressbar, ProgressbarStyle } from './style';

export const Progressbar = ({ ...rest }) => {
  // const containerStyles = {
  //   height: 20,
  //   width: '100%',
  //   backgroundColor: '#e0e0de',
  //   borderRadius: 50,
  // };

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold',
  // };

  return (
    <ContainerProgressbar>
      <ProgressbarStyle {...rest} />
    </ContainerProgressbar>
  );
};

// Progressbar.propTypes = {
//   progress: PropTypes.number.isRequired,
// };
