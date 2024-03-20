import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import 'bulma/css/bulma.css';

function App() { 
  return (
  <div>
    <section className="hero is-primary">
      <div className="hero-body">
        <h2 className="title">Personal Digital Assistant</h2>
      </div>
    </section>

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard name="Siri" user="@Siri42" imageSrc={SiriImage} desc="Siri was made by Apple" />
          </div>
          <div className="column is-4">
            <ProfileCard name="Alexa" user="@alexa99" imageSrc={AlexaImage} desc="Alexa was created by Amazon"/>
          </div>
          <div className="column is-4">
            <ProfileCard name="Cortana" user="@cortana78" imageSrc={CortanaImage} desc="Cortana was made by Microsoft to combat Siri"/>
          </div>
        </div>  
      </section> 

    </div>
  </div>
  );
}

export default App;
