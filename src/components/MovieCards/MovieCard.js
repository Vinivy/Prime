import { TouchableOpacity, StyleSheet, Image } from "react-native";

export const MovieCard = (props) => {
    return (
        <>
        <TouchableOpacity>
          <Image style={styles.Cardz} source={props.movieURL}/>
        </TouchableOpacity>

        </>
    )
};

const styles = StyleSheet.create({
    Cardz : {
        marginLeft : 20,
    }
});