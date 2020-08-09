import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm:{
    marginBottom: 24,
  },
  label:{
    color: '#d4c2ff',
  },
  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock:{
    width: '48%',
  },
  input:{
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  filterButton:{
    width: 50,
    height: 50,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  filterButtonText:{
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton:{
    backgroundColor: '#04d361',
    height: 56,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText:{
    color: '#fff',
    fontSize: 16,
  },
})

export default styles;