import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

export default async function registerForPushNotificationsAsync() {

    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)

    if (status !== 'granted'){
        return
    }

    let token = await Notifications.getExpoPushTokenAsync();

    firebase.database().ref(`/countries/-Kwncx5b_dcJe1AaQcBa/clients/-Kx7lzkZYubhhPhuPsA8`).update({ token: token })
}


