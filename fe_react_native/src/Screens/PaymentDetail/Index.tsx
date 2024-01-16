import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from "../../themes/Metrixs";

const PaymentDetail = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/LogoAction/diamond-svgrepo-com.png")}
          />
          <Text style={styles.textimage}>500</Text>
        </View>
      </View>
      <Text style={styles.textheader}>Detail Pemesan</Text>
      <View style={styles.invoice}>
        <Text>Nama</Text>
        <Text style={styles.textname}>Dian Herdiana</Text>

        <Text>Email</Text>
        <Text style={styles.textname}>dian@mail.com</Text>

        <Text>Item</Text>
        <Text style={styles.textname}>500 diamonds</Text>
      </View>
      <View style={styles.checkoutcontainer}>
        <View>
          <Text style={styles.item}>500 Diamonds</Text>
          <Text style={styles.price}>Rp. 300.000</Text>
        </View>

        <View>
         <TouchableOpacity
         style={styles.chekoutbutton}
         >
          <Text style={styles.checkouttext}>Bayar</Text>
         </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    // justifyContent:"center"
  },
  main: {
    backgroundColor: "white",
    flex: 1,
  },
  card: {
    marginVertical: verticalScale(50),
    width: horizontalScale(200),
    height: verticalScale(100),
    borderRadius: moderateScale(10),
    backgroundColor: "#D3D3D3",
    padding: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: "contain",
  },
  textimage: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  textheader: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    textAlign: "center",
  },
  textname: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginBottom: verticalScale(10),
  },
  invoice: {
    marginVertical: verticalScale(20),
    width: horizontalScale(200),
    height: verticalScale(100),
    borderRadius: moderateScale(10),
    backgroundColor: "white",
    padding: moderateScale(20),
    textAlign: "left",
  },
  checkoutcontainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(70),
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: moderateScale(20),
    elevation:20,
    flexDirection: "row",
    justifyContent: "space-between",
 
  },
  price: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  item: {
    fontSize: moderateScale(12),
  },
  chekoutbutton:{
    width: horizontalScale(100),
    height: verticalScale(40),
    backgroundColor: "#318CE7",
    borderRadius: moderateScale(7),
    justifyContent: "center",
    alignItems: "center",
  },
  checkouttext:{
    color: "white",
    fontSize: moderateScale(15),
    fontWeight: "bold",
  }
});
