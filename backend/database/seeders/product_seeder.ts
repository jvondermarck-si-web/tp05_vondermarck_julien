import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Product from '../../app/models/product.js'

export default class extends BaseSeeder {
  async run() {
    // first delete all records in the table
    await Product.query().delete()

    // Write your database queries inside the run method
    await Product.createMany([
      {
        categoryId: 1,
        image: 'assets/img/products/caputo.png',
        title: "Caputo® - Farina TIP0 '00' Pizzeria",
        info: '1 kg - Il Mulino di Napoli',
        price: 12,
        isBestSeller: true,
        isFavorite: true,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/olive_oil.png',
        title: 'De Cecco Olio di Oliva',
        info: '1L - Extra Virgin',
        price: 22.95,
        isBestSeller: true,
        isFavorite: false,
      },
      {
        categoryId: 3,
        image: 'assets/img/products/tshirt_girl.png',
        title: "T-Shirt 'Everybody Loves Italian Girls'",
        info: 'Sizes from S to XL',
        price: 19.99,
        isBestSeller: true,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/kimbo.png',
        title: 'Kimbo® Espresso Crema Intensa',
        info: '1kg - Caffè di Napoli',
        price: 4.99,
        isBestSeller: true,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/mascarpone.png',
        title: 'Galbani® Mascarpone',
        info: '250mg - Best for Tiramisù',
        price: 2.99,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/bacio_latte.png',
        title: 'Baci® Latte Vellutato Scatola Bijou',
        info: '200g - quotes by famous poets inside!',
        price: 12.49,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 3,
        image: 'assets/img/products/scarf.png',
        title: 'Sciarpa rossa',
        info: '70% wool / 30% acrylic',
        price: 99.99,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/gocciole.png',
        title: 'Gocciole Pavesi® Cioccolato',
        info: '500g - Biscotti al Cioccolato',
        price: 3.96,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/saracene.png',
        title: 'Balocco Saracene',
        info: '700g - Biscotti Frollini',
        price: 5.5,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 1,
        image: 'assets/img/products/taralli_scaldatelli.webp',
        title: 'Taralli Scaldatelli alle olive',
        info: '400g - Vino bianco e Olio Extra Vergine',
        price: 4.5,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 2,
        image: 'assets/img/products/moka.png',
        title: 'Moka Bialetti®',
        info: '3 tazze - Made in Italy',
        price: 89.99,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 3,
        image: 'assets/img/products/apron.png',
        title: 'Grembiule da cuoco',
        info: "I don't need a recipe, I'm Italian!",
        price: 23.99,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 3,
        image: 'assets/img/products/codogno.png',
        title: 'Biscotto Codogno',
        info: '500g - Premiata Pasticceria Flli Cornali',
        price: 16.0,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 2,
        image: 'assets/img/products/ooni.png',
        title: 'Ooni Koda 16',
        info: 'Gas-powered outdoor pizza oven',
        price: 641.0,
        isBestSeller: false,
        isFavorite: false,
      },
      {
        categoryId: 4,
        image: 'assets/img/products/corso_cucina.webp',
        title: 'Milano nel piatto',
        info: 'Corso di cucina - Scuola di cucina',
        price: 90.0,
        isBestSeller: false,
        isFavorite: false,
      },
    ])
  }
}
