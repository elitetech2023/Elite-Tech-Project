import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';




function QRScannerBooking({ navigation }) {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrData, setQRData] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setQRData(data);
        Linking.openURL(data);
    };

    const handleScanAgain = () => {
        setScanned(false);
        setQRData('');
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
    
        <View style={styles.container}>
        {scanned ? (
          <View style={styles.qrDataContainer}>
            {/* <Text style={styles.qrData}>{qrData}</Text> */}
            <Button onPress={handleScanAgain} title="Scan Again" />
          </View>
        ) : (
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        )}    
      </View>
    );
}

export default QRScannerBooking


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrData: {
        fontSize: 20,
        marginBottom: 20,
    },

});