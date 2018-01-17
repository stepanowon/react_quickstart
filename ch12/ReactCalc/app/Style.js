import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    rootContainer: {  flex: 1  },
    displayContainer: { flex: 2, backgroundColor: '#193441' },
    inputContainer: { flex: 8, backgroundColor: '#3E606F' },
    inputButton: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
        borderWidth: 0.5, borderColor: '#91AA9D'
    },
    inputButtonText: { fontSize: 22, fontWeight: 'bold',
        color: 'white' },
    inputRow: { flex: 1, flexDirection: 'row' },
    displayText: {  color: 'white', fontSize: 38,
        fontWeight: 'bold', textAlign: 'right',
        padding: 20 },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;
