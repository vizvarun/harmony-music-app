import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import TitleBlock from "../../components/TitleBlock";
import Stories from "../../components/Stories";
import PostBlock from "../../components/PostBlock";
const { width, height } = Dimensions.get("window");

class HomePage extends Component {
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

  handleAppreciations = (id, active) => {
    console.log("Key", id, active);
    const elementIndex = this.state.albums.findIndex(
      (element) => element.id == id
    );
    let newAlbum = [...this.state.albums];
    newAlbum[elementIndex] = {
      ...newAlbum[elementIndex],
      appreciations: active
        ? newAlbum[elementIndex].appreciations + 1
        : newAlbum[elementIndex].appreciations - 1,
    };
    this.setState({ albums: newAlbum });
  };

  render() {
    return (
      <>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <TitleBlock
            heroText="Timeline"
            subText="Hey there you just learned props"
          />
          <View style={styles.mainBlock}>
            <Stories />
            {this.state.albums.map((album) => (
              <PostBlock
                fullName={album.fullName}
                userName={album.userName}
                userImage={album.userImage}
                uploadTime={album.uploadTime}
                albumImage={album.albumImage}
                appreciations={album.appreciations}
                key={album.id}
                id={album.id}
                appreHandler={this.handleAppreciations}
              />
            ))}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headTextBlock: {
    marginHorizontal: 16,
    marginVertical: 14,
  },
  headBlock: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heroText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#424242",
  },
  subText: {
    fontSize: 14,
    color: "#c4c4c4",
  },
  displayImage: {
    width: width / 5,
    height: height / 15,
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: width / 20,
  },
  mainBlock: {},
  stories: {
    flexDirection: "row",
    maxHeight: height / 8,
  },
});
