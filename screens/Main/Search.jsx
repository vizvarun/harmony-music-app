import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import TitleBlock from "../../components/TitleBlock";
import VideoPost from "../../components/VideoPost";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        {
          id: 0,
          fullName: "Imagine Dragons",
          userName: "@imaginedragons",
          userImage: require("../../assets/imaginedragons.png"),
          uploadTime: "2 hrs ago",
          albumImage: require("../../assets/album5.png"),
          appreciations: 600,
        },
        {
          id: 1,
          fullName: "Tones and I",
          userName: "@tonesandi",
          uploadTime: "3 hrs ago",
          userImage: require("../../assets/tonesAndI.png"),
          albumImage: require("../../assets/dp2.jpg"),
          appreciations: 500,
        },
        {
          id: 2,
          fullName: "Charlie Puth",
          userName: "@puthcharlie",
          userImage: require("../../assets/charlie.png"),
          uploadTime: "5 hrs ago",
          albumImage: require("../../assets/album2.png"),
          appreciations: 800,
        },
        {
          id: 3,
          fullName: "Shawn Mendes",
          userName: "@shawnmusic",
          userImage: require("../../assets/shawn.png"),
          uploadTime: "7 hrs ago",
          albumImage: require("../../assets/album3.png"),
          appreciations: 200,
        },
        {
          id: 4,
          fullName: "DJ Snake",
          userName: "@djsnake",
          userImage: require("../../assets/djsnake.png"),
          uploadTime: "16 hrs ago",
          albumImage: require("../../assets/album.png"),
          appreciations: 550,
        },
        {
          id: 5,
          fullName: "Marshmellow",
          userName: "@mmellow",
          userImage: require("../../assets/marshmellow.png"),
          uploadTime: "a day ago",
          albumImage: require("../../assets/album4.png"),
          appreciations: 450,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <TitleBlock heroText="Search" subText="This is the search page" />
          <View style={styles.mainBlock}>
            <View style={styles.commentBlock}>
              <View
                style={[
                  styles.action,
                  {
                    marginTop: 20,
                  },
                ]}
              >
                <TextInput
                  placeholder="Search here"
                  placeholderTextColor="gray"
                  style={styles.textInput}
                  autoCapitalize="none"
                />
                <Feather
                  name="search"
                  size={18}
                  color="gray"
                  style={{ marginTop: 4, marginHorizontal: 10 }}
                />
              </View>
            </View>
            <View style={styles.trendingPostBlock}>
              {this.state.albums.map((album) => (
                <VideoPost albumImage={album.albumImage} key={album.id} />
              ))}
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  commentBlock: {
    width: width / 1.25,
    marginLeft: width / 10,
    marginTop: 10,
    marginBottom: 35,
  },
  action: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingBottom: 8,
    paddingTop: 4,
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: "gray",
    fontFamily: "OswaldRegular",
  },
});
