import React from "react"
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsByTitle } from "../API/tmdbAPI"

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { films: [], isLoading: false }
        this.searchInput = ""
    }

    _loadFilms() {
        this.setState({ isLoading: true })
        if (this.searchInput.length > 0) {
            getFilmsByTitle(this.searchInput).then(data => this.setState({
                films: data.results,
                isLoading: false
            }))
        }
    }

    _seachInputChange(text) {
        this.searchInput = text
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.LoadingRing}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render() {
        console.log(this.state.isLoading)
        return (
            <View style={styles.MainContainer}>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._seachInputChange(text)} style={styles.SearchInput} placeholder="Film Title" />
                <Button style={styles.SearchButton} title="Search" onPress={() => this._loadFilms()} />
                <FlatList data={this.state.films} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <FilmItem film={item} />} />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        marginTop: 30,
        flex: 1
    },
    SearchInput: {
        height: 50,
        marginHorizontal: 5,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 8
    },
    SearchButton: {
        maxWidth: 5
    },
    LoadingRing: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search