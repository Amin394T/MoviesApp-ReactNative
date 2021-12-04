import React from "react"
import { StyleSheet, View, Text, Image } from 'react-native'
import { getFilmImage } from "../API/tmdbAPI"

class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
            <View style={styles.MainContainer}>
                <Image style={styles.Image} source={{ uri: getFilmImage(film.poster_path) }}/>
                <View style={styles.ContentContainer}>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.TitleText}>{film.title}</Text>
                        <Text style={styles.Vote}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.DescriptionContainer}>
                        <Text style={styles.Description} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.DateContainer}>
                        <Text style={styles.Date}>{film.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        height: 190,
        flexDirection: "row"
    },
    Image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: "gray"
    },
    ContentContainer: {
        flex: 1,
        margin: 5
    },
    TitleContainer: {
        flex: 3,
        flexDirection: "row"
    },
    TitleText: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 2,
        flexWrap: "wrap",
        paddingRight: 5
    },
    Vote: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#666666",
        flex: 1,
        textAlign: "right",
        paddingRight: 10
    },
    DescriptionContainer: {
        flex: 7,
    },
    Description: {
        fontStyle: "italic",
        color: "#666666",
        textAlign: "justify",
        paddingRight: 10
    },
    DateContainer: {
        flex: 1,
    },
    Date: {
        textAlign: "right",
        fontSize: 14,
        paddingRight: 10
    }
})

export default FilmItem