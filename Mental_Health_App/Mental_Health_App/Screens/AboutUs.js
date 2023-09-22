import React from 'react'
import { View, Image, Text, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native'


function AboutUs() {
   return (

      
         <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'smokewhite', marginTop: 40 }}>

            <View style={{ alignItems: 'center', }}>
               <Image source={require('../assets/image_1.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 99 }} />

               <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 10 }}>
                  Centre for Psychological Services & Career Development (PsyCaD)
               </Text>

               <Text style={{ paddingTop: 10, paddingBottom: 10, alignItems: 'center', paddingHorizontal: 10 }}>
                  PsyCaD offers a broad spectrum of psychological and educational
                  services to UJ students and staff,
                  as well as the wider community. PsyCaD’s services aim to enhance
                  the psychological fitness of
                  clients to manage personal life challenges, increase productivity,
                  and to optimize their performance
               </Text>

               <Text style={{ paddingBottom: 15, paddingHorizontal: 13 }}>This includes dealing with trauma
                  and stress. PsyCaD is accredited by the Health Professions
                  Council of South Africa (HPCSA) as a site for the training of Intern
                  Psychologists and Student
                  Psychometrists. PsyCaD’s professional staff
                  are Counselling, Clinical and/or Educational Psychologists, and
                  Psychometrists registered with
                  the HPCSA.
               </Text>
            </View>

            <View style={{ alignItems: 'center', }}>
               <Image source={require('../assets/image_2.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 99 }}
               />
               <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20 }}>
                  What do we do ?
               </Text>
               <Text style={{ fontWeight: "bold", fontSize: 12, paddingHorizontal: 10 }}>
                  We offer a wide range of services to support your academic journey
               </Text>
               <Text style={{ fontStyle: "italic", paddingBottom: 10 }}>
                  Helping you to be your best through:
               </Text>

               <Image source={require('../assets/Grid-img_1.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />

               <Image source={require('../assets/Grid-img_2.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_3.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_4.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_5.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_6.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_7.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
               <Image source={require('../assets/Grid-img_8.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 400, marginBottom: 15 }}
               />
            </View>

            <View style={{ alignItems: 'center', paddingHorizontal: 10, marginBottom: 20 }}>
               <Text style={{ fontWeight: "bold", fontSize: 15, paddingTop: 10, paddingBottom: 10, }}>
                  The strategic goals of PsyCaD are to:
               </Text>
               <Text>
                  -Assist students, departments, and faculties to achieve excellent student success rates,
                  improved retention, and increased graduate output.
               </Text>
               <Text>
                  -Achieve excellence and stature.
               </Text>
               <Text>
                  -Give support throughout the student life cycle.
               </Text>
               <Text>
                  -Provide a package of career and programme guidance to learners at the school level.
               </Text>
               <Text>
                  -Develop dynamic brand and marketing strategies.
               </Text>
               <Text>
                  -Align all elements and environments (internal and external).
               </Text>
               <Text>
                  -Attract and retain illustrious staff.
               </Text>
               <Text style={{ paddingBottom: 10 }}>
                  -Promote a welcoming and caring environment, manifested in well-kept buildings and facilities
               </Text>
            </View>



            <View style={{ alignItems: 'center' }}>
               <Image source={require('../assets/image_3.jpg')}
                  style={{ width: 340, borderRadius: 10, height: 110 }}
               />
               <View style={{ alignItems: 'center', paddingHorizontal: 10, marginBottom: 20 }}>
                  <Text style={{ paddingTop: 10 }}>
                     We are located at the following places, within the UJ Campuses:
                  </Text>
                  <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
                     APB Impala Court | APK C-Ring 1 + B5 Building | DFC House 2, Louisa Street | SWC Adelaide Tambo Building (Academic Block)
                  </Text>
               </View>

            </View>


            <View style={{ alignItems: 'center' }}>
               <Text style={{ fontWeight: 'bold' }}>Contact Us:</Text>
               <Text>
                  Email:mylife@uj.ac.za
               </Text>
               <Text>
                  Tel: +27 11 559 4555
               </Text>
               <Text style={{ fontWeight: 'bold' }}>Connect with Us:</Text>
            </View>




            <View style={{ flexDirection: "row", paddingTop: 10,marginBottom:20 }}>

               <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => Linking.openURL('https://www.facebook.com/go2uj/')}>
                  <Image source={require('../assets/fb-logo.png')}
                     style={{ width: 50, height: 50, borderRadius: 5 }}
                  /><Text style={{ fontStyle: 'italic', fontSize: 15 }}>FaceBook</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => Linking.openURL('https://www.linkedin.com/company/university-of-johannesburg')}>
                  <Image source={require('../assets/in-logo.png')}
                     style={{ width: 50, height: 50, borderRadius: 5 }}
                  /><Text style={{ fontStyle: 'italic', fontSize: 15 }}>Linkden</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => Linking.openURL('https://www.instagram.com/university_of_johannesburg')}>
                  <Image source={require('../assets/insta-logo.png')}
                     style={{ width: 50, height: 50, borderRadius: 5 }}
                  /><Text style={{ fontStyle: 'italic', fontSize: 15 }}>Instagram</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => Linking.openURL('https://twitter.com/go2uj')}>
                  <Image source={require('../assets/twitter-logo.png')}
                     style={{ width: 50, height: 50, borderRadius: 5 }}
                  /><Text style={{ fontStyle: 'italic', fontSize: 15 }}>Twitter</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => Linking.openURL('https://www.youtube.com/user/filmdivision1')}>
                  <Image source={require('../assets/yt-logo.png')}
                     style={{ width: 50, height: 50, borderRadius: 5 }}
                  />
                  <Text style={{ fontStyle: 'italic', fontSize: 15 }}>
                     YouTube
                  </Text>
               </TouchableOpacity>
            </View>
            </View>
         </ScrollView>


   )
}

export default AboutUs