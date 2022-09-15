import { View, Text, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../../firebase.js";

const HomeScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const [addUserToCourse, setAddUserToCourse] = useState("");
  const courseRef = firebase.firestore().collection("courses");

  useEffect(() => {
    async function getData() {
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

    getData();
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop: 40,
        }}
      >
        {courses.map((course, index) => (
          <>
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
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 2 }}>
                {course.name}
              </Text>
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
          </>
        ))}
      </View>

      <Button
        title="Random"
        onPress={(doc) => {
          navigation.navigate("RandomScreen");
        }}
      ></Button>
    </View>
  );
};

export default HomeScreen;
