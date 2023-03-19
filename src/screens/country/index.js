import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native';
import {get_pays_by_id} from '../../api/pays_api';

export default function Country({navigation, route}) {
  const { id } = route.params;
  const [ country, setCountry ] = useState(null)

  useEffect(() => {
    get_pays_by_id(id).then((result) => {
      console.log(result);
      setCountry(result.data);
    })
    console.log(pays);
  }, [])
  return (
    <View>
        <Text>Text</Text>
    </View>
  );
}