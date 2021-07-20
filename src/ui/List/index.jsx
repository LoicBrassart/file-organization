import PropTypes from 'prop-types';
import SList from './style';
import TrackCard from '../../entities/Track/Card';

const List = ({ children, type, title }) => {
  return (
    <>
      <SList>
        {title && <h3>{title}</h3>}
        <ul>
          {children.map((item) => {
            let content;
            switch (type) {
              case 'TrackCard':
                content = <TrackCard {...item} />;
                break;
              default:
                content = item;
            }
            return <li key={item}>{content}</li>;
          })}
        </ul>
      </SList>
    </>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
};
List.defaultProps = {
  type: null,
  title: null,
};
export default List;
