import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

// En RN los componentes siempre siguen siendo o un componente o una vista entera.
const Counter = () => {

    // Para el valor que se va a mostrar
    const [value, setValue] = useState(0);

    // Para la cantidad de veces que se hizo tap sobre un boton
    const [tap, setTap] = useState(0);

    // Funciones para incrementar y restar 1
    const increment = () => {
        setValue(prevValue => prevValue + 1);
        // Aumentamos en uno el tap
        setTap(prevValue => prevValue + 1);
    }

    const decrement = () => {
        setValue(prevValue => prevValue - 1);
        setTap(prevValue => prevValue + 1);
    }

    // Ahora mostramos la vista:

    return (
        <View style={styles.container}>
            <Text
                style={styles.result}>{value}
            </Text>
            <Text style={styles.tap}>Taps: {tap}</Text>

            <View style={styles.buttons}>
                <Button title="Restar" onPress={decrement} />
                <Button title="Incrementar" onPress={increment} />
            </View>
        </View>
    )
}

// Flex muestra la info uno despues de otro (puede ser fila o columna), el estilo por default es ser una columna.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    result: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: -20,
    },
    tap: {
        fontSize: 20,
        padding: 20,
        color: 'gray',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    }
});

export default Counter;