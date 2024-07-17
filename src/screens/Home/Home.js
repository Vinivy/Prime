import { TouchableOpacity, Text, StyleSheet, Image, View, FlatList, ScrollView } from 'react-native';
//Imagens
import AmazonLogo from "../../assets/amazon_logo.png";
import PrimeVideoLogo from "../../assets/prime_video.png";
import MovieTheWheel from "../../../assets/movies/the_wheel_of_time.png";

//componentes
import { MovieCard } from "../../components/MovieCards/MovieCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import  { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from '../../utils/moviesWatch';
export const Home = () => {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={PrimeVideoLogo} style={styles.primeLogoImg} />
            <Image source={AmazonLogo} style={styles.amazonLogoImg} />
          </View>
          <View style={styles.category}>
            <TouchableOpacity>
              <Text style={styles.TextoRool}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.TextoRool}>Tv Show</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.TextoRool}>Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.TextoRool}>Kids</Text>
            </TouchableOpacity>
          </View>
          {/*Aqui vamos usar o ScrollView para adicionar o scroll na tela*/}
          <ScrollView>
            <TouchableOpacity style={styles.ImageThamble}>
              <Image source={MovieTheWheel}  />
            </TouchableOpacity>
            
            <Text style={styles.Watching} >Continue Watching</Text>
            <FlatList 
            data={MOVIESWATCHING}
            //Uma chave que ira pegar um iten da listagem que tem um id
            keyExtractor={(item) => item}
            //aqui aonde ira renderizar os cards
            renderItem={({item}) => <MovieCard movieURL={item.moviesURL} />}
            //para deixar os conteudos na horizontal usamos
            horizontal
            //esterelização
            contentContainerStyle={styles.contentList}
            //automaticamente, quando os conteudos passam do limite da tela, ele a ira adicionar o scroll na horizontal, para tirar essa opção vamos usar esse atributo
            showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.Watching}>Crime Movies</Text>
            <FlatList 
            data={MOVIESCRIME}
            keyExtractor={(item) => item}
            renderItem={({item}) => <MovieCard movieURL={item.moviesURL}/> }
            horizontal
            />

            <Text style={styles.Watching}>Watch in your linguage</Text>
            <FlatList
            data={MOVIESWATCH}
            keyExtractor={(item) => item}
            renderItem={({item}) => <MovieCard movieURL={item.moviesURL} />}
            horizontal
            />
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#232F3E',
      alignItems: 'flex-start',
    },

    header : {
      width: '100%',
      padding: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },

    amazonLogoImg: { 
      marginLeft: 30,
      marginTop: -36,
    },

    primeLogoImg: {
      marginTop: -30,
    },

    category: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',

      marginTop: -50,
      marginBottom: 19,
    },

    TextoRool: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#9C9C9C',
    },

    ImageThamble : {
      width: '100%',
      alignItems: 'center',
    },

    Watching : {
      fontWeight: '700',
      fontSize: 18,
      color: '#ffff',
      padding: 15,
    },
});
