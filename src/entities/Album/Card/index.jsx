import TrackMini from '../../Track/Mini';
import SCard from './style';

const AlbumCard = () => {
  return (
    <SCard>
      I iz a Album Card
      <ul>
        <li>
          <TrackMini />
        </li>
        <li>
          <TrackMini />
        </li>
        <li>
          <TrackMini />
        </li>
        <li>
          <TrackMini />
        </li>
        <li>
          <TrackMini />
        </li>
      </ul>
    </SCard>
  );
};
export default AlbumCard;
