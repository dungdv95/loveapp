import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonAvatar, IonIcon, IonicSwiper, IonLabel, IonChip, IonCard,
  IonCardContent
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import HeaderPage from '../components/header/HeaderPage';
import style from './HomePage.module.css';
import avatar from '../img/avatar.jpg'
import { images, film, videocam, happy, peopleCircle, tv, ellipse, heart } from 'ionicons/icons';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

/***********2017*************/

/***********2018*************/

function HomePage() {
  const [dataSwiper, setDataSwiper] = useState([
    { id: 1, icon: film, text: 'Thước phim' },
    { id: 2, icon: tv, text: 'Phòng họp mặt' },
    { id: 3, icon: happy, text: 'Trạng thái' },
    { id: 4, icon: peopleCircle, text: 'Nhóm' },
    { id: 5, icon: videocam, text: 'Phát trực tiếp' },
  ])

  const [data2017, setData2017] = useState([
    { id: 1, avatar: '', imgmain: '', like: 100, cmt: 20, share: 3 }
  ])

  return (
    <IonPage>
      <HeaderPage />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonAvatar className={style.avatar_custom}>
                <img src={avatar} />
                <IonIcon className={style.ic_avatar_custom} icon={ellipse} />
              </IonAvatar>
            </IonCol>
            <IonCol className={style.inp_custom}>
              <div>
                <input placeholder='Bạn đang nghĩ quần què gì thế' className={style.input_custom} type='text' />
              </div>
            </IonCol>
            <IonCol className={style.icon_img_custom}>
              <IonIcon className={style.ic_custom} icon={images} />
            </IonCol>
          </IonRow>
        </IonGrid>
        <div>
          <Swiper slidesPerView={5}>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2017</IonLabel>
              </IonChip>
            </SwiperSlide>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2018</IonLabel>
              </IonChip>
            </SwiperSlide>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2019</IonLabel>
              </IonChip>
            </SwiperSlide>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2020</IonLabel>
              </IonChip>
            </SwiperSlide>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2021</IonLabel>
              </IonChip>
            </SwiperSlide>
            <SwiperSlide>
              <IonChip outline color="primary">
                {/* <ion-icon name="pin"></ion-icon> */}
                <IonLabel>2022</IonLabel>
              </IonChip>
            </SwiperSlide>
          </Swiper>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
