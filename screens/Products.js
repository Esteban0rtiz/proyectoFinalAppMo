import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const json = require("./assets/productos.json");
    setProducts(json);
  }, []);

  const renderProductItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{item.nombre}</Text>
      <Text style={styles.column}>{item.marca}</Text>
      <Text style={styles.column}>{item.descripcion}</Text>
      <Text style={styles.column}>${item.precio}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Productos</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.columnHeader}>Nombre</Text>
        <Text style={styles.columnHeader}>Marca</Text>
        <Text style={styles.columnHeader}>Descripción</Text>
        <Text style={styles.columnHeader}>Precio</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#691010',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#691010',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  columnHeader: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
