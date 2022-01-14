import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
 
  ImageBackground,
} from 'react-native';

import LoginImage from '../assets/img15.png';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/logo2.png';
import img from '../assets/img10.png';
import anxiety from '../assets/img11.png';
import allergies from '../assets/img12.png';
import sunburn from '../assets/img13.png';
import menstruation from '../assets/img14.png';
import kalpana from '../assets/img16.png';
import sumit from '../assets/img17.png';
import yashvant from '../assets/img18.png';
import jasmine from '../assets/img19.png';
import social from '../assets/img015.png';
import hremoval from '../assets/img20.png';
import instagram from '../assets/instagram.png';

import Evillcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {Card} from 'react-native-shadow-cards';

const images = [{LoginImage}, {LoginImage}, {LoginImage}];

const Home = () => {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <>

    <View style={styles.screen}>
      
      <View style={styles.header}>
        <View>
          <Entypo name="menu" color="grey" size={40} />
          <View style={{width:width/3.8}}>
            <TouchableOpacity style={{flexDirection: 'row',justifyContent:'space-evenly'}}>
              <Evillcons name="location" size={24} color="#485ba7" />

              <Text style={{fontWeight: '600', color: 'black'}}>Noida</Text>
              <AntDesign name="down" size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={logo}
          style={{width: 50, height: 41, resizeMode: 'contain'}}></Image>
        {/* <TouchableOpacity>
          <AntDesign name="user" color="#ffff" size={26} />
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center', paddingHorizontal: 10}}>
            <View style={{width: 348, height: 160, margin: 10}}>
              <ImageBackground
                source={img}
                style={{width: '100%', height: 150, resizeMode: 'cover',justifyContent:'center'}}
              >
                <View style={{width:'40%',alignItems:'center'}}>
                <Text style={{color:'#ffff',fontSize:16,marginLeft:'10%',padding:4,fontWeight:'700'}}>Health is wealth</Text>
                <Text style={{color:'#ffff',fontSize:8,marginLeft:'12%',padding:2}}>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.</Text>
                    </View>
              </ImageBackground>
            </View>

            <Card
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                borderRadius: 7,
                width: 300,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <AntDesign name="search1" size={24} color="grey" />
              <TextInput></TextInput>
              <View style={{flexDirection: 'row'}}>
                <Feather name="mic" size={20} color="#485ba7" />

                <Evillcons name="location" size={25} color="#485ba7" />
              </View>
            </Card>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Card
                style={{
                  alignItems: 'center',
                  width: width / 3,
                  height: 160,
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={anxiety}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    margin: 5,
                  }}></Image>
                <Text style={{fontWeight: '600', color: '#485ba7'}}>
                  Anxiety
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 8, color: 'black'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#25aade',
                    width: 70,
                    margin: 15,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                </TouchableOpacity>
              </Card>

              <Card
                style={{
                  alignItems: 'center',
                  width: width / 3,
                  height: 160,
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={allergies}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    margin: 5,
                  }}></Image>
                <Text style={{fontWeight: '600', color: '#485ba7'}}>
                  Allergies
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 8, color: 'black'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#25aade',
                    width: 70,
                    margin: 15,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Card
                style={{
                  alignItems: 'center',
                  width: width / 3,
                  height: 160,
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={sunburn}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    margin: 5,
                  }}></Image>
                <Text style={{fontWeight: '600', color: '#485ba7'}}>
                  Sunburn
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 8, color: 'black'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#25aade',
                    width: 70,
                    margin: 15,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  alignItems: 'center',
                  width: width / 3,
                  height: 160,
                  padding: 10,
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Image
                  source={menstruation}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    margin: 5,
                  }}></Image>
                <Text style={{fontWeight: '600', color: '#485ba7'}}>
                  Menstruation
                </Text>
                <Text
                  style={{textAlign: 'center', fontSize: 8, color: 'black'}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#25aade',
                    width: 70,
                    margin: 15,
                    height: 20,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                </TouchableOpacity>
              </Card>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 30,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
              }}>
              <Text style={{color: '#fff'}}>Load More</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              height: 270,
              backgroundColor: '#485ba7',
              padding: 20,
            }}>
            <Text style={{color: '#ffff'}}>Articles from Health Experts</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    alignItems: 'center',
                    width: width / 2,
                    backgroundColor: '#ffff',
                    height: 180,
                    padding: 5,
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={LoginImage}
                    style={{
                      width: width,
                      height: 110,
                      resizeMode: 'contain',
                    }}></Image>
                    <View style={{padding:5,alignSelf:'flex-start'}}>
                  <Text style={{color: '#4090ff',fontWeight:'500',fontSize:12}}>Health Tips</Text>
                  <Text style={{fontSize: 8}}> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</Text>
                  <Text
                    style={{fontSize: 13, color: 'black', fontWeight: '600'}}>
                    Dr. Vashi
                  </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    width: width / 2,
                    backgroundColor: '#ffff',
                    height: 180,
                    padding: 5,
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={LoginImage}
                    style={{
                      width: width,
                      height: 110,
                      resizeMode: 'contain',
                    }}></Image>
                      <View style={{padding:5,alignSelf:'flex-start'}}>
                  <Text style={{color: '#4090ff',fontWeight:'500',fontSize:12}}>Health Tips</Text>
                  <Text style={{fontSize: 8}}> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</Text>
                  <Text
                    style={{fontSize: 13, color: 'black', fontWeight: '600'}}>
                    Dr. Vashi
                  </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    width: width / 2,
                    backgroundColor: '#ffff',
                    height: 180,
                    padding: 5,
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={LoginImage}
                    style={{
                      width: width,
                      height: 110,
                      resizeMode: 'contain',
                    }}></Image>
                       <View style={{padding:5,alignSelf:'flex-start'}}>
                  <Text style={{color: '#4090ff',fontWeight:'500',fontSize:12}}>Health Tips</Text>
                  <Text style={{fontSize: 8}}> Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</Text>
                  <Text
                    style={{fontSize: 13, color: 'black', fontWeight: '600'}}>
                    Dr. Vashi
                  </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{paddingHorizontal: 15}}>
            <View
              style={{
                marginVertical: 20,
                borderRadius: 30,
                width: width / 1.1,
                height: 200,
                backgroundColor: '#e9eef7',
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <View style={{width: width / 2.6}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>
                      Community Forum
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#25aade',
                      width: width / 3,
                      height: 30,
                      marginVertical: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#fff'}}>
                      Submit Your Questions
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                    source={social}
                    style={{
                      width: width / 2.6,
                      height: 190,
                      resizeMode: 'contain',
                    }}></Image>
                </View>
              </View>
            </View>

            <Text
              style={{
                marginLeft: 25,
                color: 'black',
                fontSize: 18,
                alignSelf: 'flex-start',
                fontWeight: '600',
              }}>
              Our Testimonials
            </Text>
            <View style={{width: width / 2}}>
              <Text style={{marginLeft: 25, fontSize: 8, color: 'black'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'center',
                  width: width / 2.5,
                  height: 250,
                  padding: 5,
                }}>
                <Image
                  source={kalpana}
                  style={{
                    width:'100%',
                    height: 180,
                    resizeMode: 'contain',
                  }}></Image>
                <View style={{padding: 6}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: 'black',
                      fontSize: 12,
                      alignSelf: 'flex-start',
                    }}>
                    Kalpana Singh
                  </Text>
                  <Text style={{fontSize: 8, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: width / 2.5,
                  height: 250,
                  padding: 5,
                }}>
                <Image
                  source={sumit}
                  style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'contain',
                  }}></Image>
                <View style={{padding: 6}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: 'black',
                      fontSize: 12,
                      alignSelf: 'flex-start',
                    }}>
                    Sumit Sharma
                  </Text>
                  <Text style={{fontSize: 8, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'center',
                  width: width / 2.5,
                  height: 250,
                  padding: 5,
                }}>
                <Image
                  source={yashvant}
                  style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'contain',
                  }}></Image>
                <View style={{padding: 6}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: 'black',
                      fontSize: 12,
                      alignSelf: 'flex-start',
                    }}>
                    Yashvant Verma
                  </Text>
                  <Text style={{fontSize: 8, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  width: width / 2.5,
                  height: 250,
                  padding: 5,
                }}>
                <Image
                  source={jasmine}
                  style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'contain',
                  }}></Image>
                <View style={{padding: 6}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: 'black',
                      fontSize: 12,
                      alignSelf: 'flex-start',
                    }}>
                    Jasmine
                  </Text>
                  <Text style={{fontSize: 8, color: 'black'}}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: width,
              height: 240,
              backgroundColor: '#485ba7',
              padding: 20,
            }}>
            <Text
              style={{
                marginLeft: 18,
                color: '#ffff',
                fontSize: 14,
                alignSelf: 'flex-start',
                fontWeight: '600',
              }}>
              Products
            </Text>
            <Text
              style={{
                marginLeft: 18,
                color: '#ffff',
                fontSize: 8,
                alignSelf: 'flex-start',
                fontWeight: '600',
              }}>
              Lorem Ipsum.
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    alignItems: 'center',
                    width: 260,
                    backgroundColor: '#ffff',
                    height: 130,
                    padding: 5,
                    margin: 10,
                    
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Image
                      source={hremoval}
                      style={{
                        width: 100,
                        height: 110,
                        resizeMode: 'contain',
                      }}></Image>
                  </View>
                  <View>
                    <Text
                      style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
                      Hair Remover Creme
                    </Text>
                    <Text>Lorem Ipsum .</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    width: 260,
                    backgroundColor: '#ffff',
                    height: 130,
                    padding: 5,
                    margin: 10,
                  
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Image
                      source={hremoval}
                      style={{
                        width: 100,
                        height: 110,
                        resizeMode: 'contain',
                      }}></Image>
                  </View>
                  <View>
                    <Text
                      style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
                      Hair Remover Creme
                    </Text>
                    <Text>Lorem Ipsum .</Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    width: 260,
                    backgroundColor: '#ffff',
                    height: 130,
                    padding: 5,
                    margin: 10,
                  
                    flexDirection: 'row',
                  }}>
                  <View>
                    <Image
                      source={hremoval}
                      style={{
                        width: 100,
                        height: 110,
                        resizeMode: 'contain',
                      }}></Image>
                  </View>
                  <View>
                    <Text
                      style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
                      Hair Remover Creme
                    </Text>
                    <Text>Lorem Ipsum .</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              width: width,
              height: 170,
              backgroundColor: '#e9eef7',
              padding: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width / 2,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity>
                <Entypo name="linkedin-with-circle" size={36} color="#0e76a8" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="facebook-with-circle" size={36} color="#1877F2" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={instagram}
                  style={{width: 40, height: 40}}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="twitter-with-circle" size={36} color="#00abee" />
              </TouchableOpacity>
            </View>
            <Text
              style={{fontSize: 10, textAlign: 'center', marginVertical: 20}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#ffff',
  },

  header: {
    width: '90%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 30,
    color: '#888',
    margin: 4,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: '#fff',
    margin: 4,
  },
});
