import React from "react";
import { IonChip, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoFacebook, searchOutline, chatbubbleOutline } from 'ionicons/icons';
import style from "./HeaderPage.module.css"

function HeaderPage() {
    return (
        <IonHeader>
            <IonToolbar>
                <div style={{ display: 'flex' }}>
                    <div className={style.block_icon_custom}>
                        <IonIcon className={style.icon_custom} icon={logoFacebook} />
                    </div>
                    <div className={style.left_header_custom}>
                        <div className={style.searh_box_custom}>
                            <strong>
                                <IonIcon className={style.search_icon_custom} icon={searchOutline} />
                            </strong>
                        </div>
                        <div className={style.searh_box_custom}>
                            <strong><IonIcon className={style.search_icon_custom} icon={chatbubbleOutline} /></strong>
                        </div>
                    </div>
                </div>

            </IonToolbar>
        </IonHeader>
    )
}
export default HeaderPage;