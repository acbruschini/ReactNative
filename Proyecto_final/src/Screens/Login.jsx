import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useLoginMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Features/User/userSlice";
import { insertSession } from "../SQL_lite/queries";
import { setUserLocalId } from "../Features/Cart/cartSlice";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const [trigger, result] = useLoginMutation();

  const dispatch =  useDispatch()

  const onSubmit = () => {
    const isValidVariableEmail = isValidEmail(email);
    const isCorrectPassword = isAtLeastSixCharacters(password);

    if (isValidVariableEmail && isCorrectPassword) {
      trigger({ email, password, returnSecureToken: true });
    }

    if (!isValidVariableEmail) setErrorEmail("Email is not correct");
    else setErrorEmail("");
    if (!isCorrectPassword)
      setErrorPassword("Password must be at least 6 characters");
    else setErrorPassword("");
  };

useEffect(() => {
  (async ()=> {
    try {
      if(result.isSuccess) {
        const resp = await insertSession({email: result.data.email, idToken: result.data.idToken, localId: result.data.localId})
        console.log("Session iniciada");
        console.log(resp);
        dispatch(setUser({email: result.data.email, idToken: result.data.idToken, localId: result.data.localId, profileImage: ""}))
        dispatch(setUserLocalId(result.data.localId))
      }
    } catch (error) {
      console.log(error.message)
    }
  })()
}, [result])


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm
          label={"email"}
          onChange={(email) => {
            setEmail(email);
          }}
          error={errorEmail}
        />
        <InputForm
          label={"password"}
          onChange={(password) => {
            setPassword(password);
          }}
          error={errorPassword}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.sub}>Not have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    //fontFamily: 'Josefin'
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
