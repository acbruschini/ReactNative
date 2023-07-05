import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item}) => {
    return (
        <Card>
            <Text>{item}</Text>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({})