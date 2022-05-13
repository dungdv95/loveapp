import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import HeaderPage from '../components/header/HeaderPage';
import style from './HomePage.module.css';

function HomePage() {
  return (
    <IonPage>
      <HeaderPage />
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
