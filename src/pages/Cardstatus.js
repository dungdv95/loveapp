import React from "react";

function Cardstatus(props) {
    return (
        <IonCard>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size={2}>
                            <IonAvatar className={style.card_avatar}>
                                <img src={avatar} />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size={10}>
                            <div><strong>Nhàn Nguyễn</strong></div>
                            <IonIcon className={style.card_icon_color} icon={heart} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    )
}
export default Cardstatus;