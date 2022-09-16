import { View, Text, Button } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { firebase } from "../../firebase.js";
import NavBar from "../components/Navbar.js";

const HomeScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const courseRef = firebase.firestore().collection("courses");

  useEffect(() => {
    async function getDataCourses() {
      courseRef.onSnapshot((querySnapshot) => {
        const allCourses = [];
        querySnapshot.forEach((doc) => {
          const { name, date } = doc.data();
          allCourses.push({
            id: doc.id,
            name,
            date,
          });
        });
        setCourses(allCourses);
      });
    }

    getDataCourses();

    async function getUpComingCourseUsers() {
      // const test = await courseRef
      //   .orderByChild("date")
      //   .get()
      //   .catch((err) => {
      //     console.log("err");
      //   });
      // console.log(test);
    }
    getUpComingCourseUsers();
  }, []);

  function inschrijven(documentId) {
    const userData = {
      name: "Piet",
    };
    const curCourseRef = courseRef.doc(documentId);
    curCourseRef
      .update({
        users: firebase.firestore.FieldValue.arrayUnion(userData.name),
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View>
      <NavBar navigation={navigation} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: 20,
        }}
      >
        {courses.map((course, index) => (
          <View
            key={index}
            style={{
              width: "43%",
              padding: 28,
              margin: 12,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
              backgroundColor: "white",
              borderRadius: 20,
              display: "flex",
              columnGap: "30px",
              // borderColor: "#50C878",
              // borderWidth: 2,
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 2 }}>{course.name}</Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.4)", marginBottom: 20 }}>
              {course.date.toDate().toDateString()}
            </Text>
            <Text
              style={{ textDecorationLine: "underline" }}
              onPress={() => {
                inschrijven(course.id);
              }}
            >
              Inschrijven
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 17,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Inschrijvingen komende cursus:
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Moet in een toekomistige versie uit een db worden gehaald */}
        <Text>Piet</Text>
        <Text>Willem</Text>
        <Text>Anne</Text>
        <Text>Daan</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
