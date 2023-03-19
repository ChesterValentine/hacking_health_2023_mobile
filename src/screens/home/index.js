import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Select2 from 'react-native-select-two';
import { useNavigation } from '@react-navigation/native';
import {get_pays} from '../../api/pays_api';



export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    get_pays().then((result) => {
      setCountries(result.data.map((p) => {
        return {id: p.id, name: p.nom}
      }));
    });
  })
  return (
    
<View style={styles.container}>
      <Text style={styles.title}>Diag Voyage</Text>
      <Text style={styles.content}>Notre équipe vous souhaite la bienvenue, quelles informations voulez-vous connaitre ?</Text>
      <Select2
        cancelButtonText="Retour"
        selectButtonText="Valider"
        searchPlaceHolderText="Recherchez un pays"
        listEmptyTitle="Aucun résultat"
        isSelectSingle
        style={{ borderRadius: 5 }}
        colorTheme="blue"
        popupTitle="Recherche"
        title="Recherchez une information"
        data={countries}
        selectedItem={selectedItem}
        onSelect={(data) => {
          console.log(data);
        }}
        onRemoveItem={(data) => {
          console.log(data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 500,

  },
  content: {
    marginTop: 20,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: 'black',
  }
});