import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tienda de Ropa</Text>
            <Text style={styles.descripcion}>Nuestro negocio tiene como objetivo vender ropa de todo tipo y que sea llamativa para la gente y que nuestros clientes tambien se sientan muy satisfechos con el servicio que le damos</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />
            <View style={styles.contenedorimagenes}>
                <Image
                    source={{ uri: "https://www.kantar.com/latin-america/-/media/project/kantar/latin-america/inspiracion/6-ropa_ok.jpg?h=600&w=900&hash=E7D6506DC20483C8E59FE2BBDE2A2A38" }}
                    style={styles.img1}
                />
                <Image
                    source={{ uri: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Los-colores-que-utilizamos-en-la-ropa-dicen-como-somos.jpg.webp?itok=k3GFCGkN" }}
                    style={styles.img1}
                />
            </View>
            <View style={styles.contenedorimagenes}>
                <Image
                    source={{ uri: "https://www.eltiempo.com/files/image_640_428/uploads/2022/11/11/636e6cc9d3809.jpeg" }}
                    style={styles.img1}
                />
                <Image
                    source={{ uri: "https://pqs.pe/wp-content/uploads/2021/02/emprendimientos-mercardo-textil-ropa.jpeg" }}
                    style={styles.img1}
                />
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.3)" />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#000',
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    descripcion: {
        backgroundColor: '#000',
        color: 'white',
        fontSize: 30,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
    img1: {
        width: 200,
        height: 150
    },
    contenedorimagenes: {
        flexDirection: 'row'
    },

});