import { Button, List } from '../../ui';

const rawData = ['Loic', 'toto'];
const trackData = ['Loic', 'toto'];

const BisPage = () => {
  return (
    <>
      <List>{rawData}</List>
      <List type="TrackCard" title="Mes tracks favorites">
        {trackData}
      </List>
      <Button>Hey</Button>
      <div>
        <Button ok>Ok</Button>
        <Button warn>Warn</Button>
        <Button danger>Danger</Button>
        <Button color="blue">Custom</Button>
      </div>
    </>
  );
};

export default BisPage;
