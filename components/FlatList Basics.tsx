import react from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})
const FlatListBasics = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={[
                {key: 'Davi'},
                {key: 'Leo'},
                {key: 'Vitor'},
                {key: 'Maria'},
                {key: 'Ana'},
                {key: 'Luis'},
                {key: 'Talita'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};

export default FlatListBasics;