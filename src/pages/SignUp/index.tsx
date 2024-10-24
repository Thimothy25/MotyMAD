import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import {BackButton} from '../../assets/icon';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <BackButton style={styles.back} />

        <PageHeader label="Sign Up" />
      </View>
      <Gap height={24} />
      <View style={styles.contentWrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <View style={styles.addPhoto}>
              <TouchableOpacity>
                <Text style={styles.addPhotoLabel}>Add Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically center
    paddingHorizontal: 24,
    paddingTop: 16, // Optional padding
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  back: {
    marginRight: 10,
  },
});
