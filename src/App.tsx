import { Header as HeaderOne } from '../src/Components/Headers/HeaderOne';
import { Hero as HeroOne } from '../src/Components/Heros/HeroOne';
import { Footer } from './Components/Footers/FooterOne';
import { HeroVideo } from './Components/Heros/HeroVideo';

import candleImage from './images/candleTwo.jpg';

function App() {
  return (
    <div>
      <div>
        <p>Headers</p>
        <HeaderOne />
      </div>
      <div className="relative">
        <p>Heros</p>
        <HeroOne
          title={'RESULTS DRIVEN'}
          text={'DIGITAL MARKETING AGENCY'}
          buttonText={'GET MY FREE PROPOSAL >>'}
          backgroundImage={candleImage}
        />
        <HeroVideo
          youtubeId="xpVvBpgZvFE"
          title="TNT RACING"
          text="Something something, we gotta go fast something"
        />
      </div>
      <div>
        Footers
        <Footer />
      </div>
    </div>
  );
}

export default App;
