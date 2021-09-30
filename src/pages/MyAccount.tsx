import React, { useEffect, useState } from "react";

//Components
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Services
import { getMilePrice } from "../services/apis";

//Types
import { ICompany } from "../types/types";

export default function MyAccount() {
  //Companies
  const [companies, setCompanies] = useState<ICompany[]>([]);

  //Loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getMilePrice("tudo-azul").then((res: ICompany) =>
    setCompanies((prevState) => [...prevState, res])
    );
  }, []);

  useEffect(() => {
    companies !== [] && companies[0] && setIsLoaded(true)
  }, [companies])

  return (
    <SafeAreaView>
      <Text>My Account!</Text>
      {isLoaded ? (
        <>
          <Text>Carregado!</Text>
          <Text>{companies[0].company}</Text>
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </SafeAreaView>
  );
}
