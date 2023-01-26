import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container_active: {
    flexDirection: 'column',
    backgroundColor: '#7da357',
    borderRadius: 10,
    height: 40,
    width: '95%',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  container_passive: {
    flexDirection: 'column',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    height: 40,
    width: '95%',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  container_text_active: {
    flex: 1,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
  container_text_passive: {
    flex: 1,
    color: 'gray',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
});
