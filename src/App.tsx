import { Header as HeaderOne } from '../src/Components/Headers/HeaderOne';
import { Hero as HeroOne } from '../src/Components/Heros/HeroOne';

import candleImage from './images/candleTwo.jpg';

function App() {
  return (
    <div>
      <div>
        <p>Headers</p>
        <HeaderOne />
      </div>
      <div className="relative w-full">
        <p>Heros</p>
        <HeroOne
          title={'RESULTS DRIVEN'}
          text={'DIGITAL MARKETING AGENCY'}
          buttonText={'GET MY FREE PROPOSAL >>'}
          backgroundImage={candleImage}
        />
      </div>
    </div>
  );
}

export default App;
