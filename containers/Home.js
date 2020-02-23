import React from 'react';
import { View, ImageBackground, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, Demo: []}
  }

  componentDidMount(){
    console.log("my name is defne");
        return fetch('https://sheltered-scrubland-73923.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
          
        this.setState({
          isLoading: false,
          Demo: responseJson,
        }, function(){
          console.log(responseJson)
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  onLeft() {
    console.log("swiped left");
    //this.swiper.swipeLeft();
  }

  onRight() {
    console.log("swiped right");
    //this.swiper.swipeLeft();
  }

  render() {
    console.log("rendering defne");
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, alignItems: "center", justifyContent: "center"}}>
          <ActivityIndicator/>
        </View>
      )
    }
//const Home = () => {
  return (
    <SafeAreaView style={styles.safeView}>
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      
      <ScrollView style={styles.scrollView} ref="scrollArea">
      {/*<View style={styles.containerHome}>*/}
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => {console.log("sona vardik")}}
          ref={swiper => (this.swiper = swiper)}
          >
                      {/*
            onSwipeStart={() => {this.refs.scrollArea.scrollEnabled=false;}}
            onSwipeEnd={() => {this.refs.scrollArea.scrollEnabled=true;}}
          */}
          {this.state.Demo.map((item, index) => (
            <Card key={index} onSwipedLeft={this.onLeft} onSwipedRight={this.onRight}>
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions={true}
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  );
};
}

export default Home;
