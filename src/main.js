import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500
      },
      {
        id: '2',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300
      },
      {
        id: '3',
        img: 'https://www.cdiscount.com/pdt2/2/9/1/1/550x550/app3700980717291/rw/apple-macbook-pro-13-pouces-2-7ghz-intel-core-i7-4.jpg',
        title: 'MacBook Air',
        description: 'Notre portable le plus fin et le plus léger est métamorphosé par la puce Apple M1. Avec des performances de processeur jusqu’à 3,5 fois plus élevées.',
        price: 1129
      },
    ],
    cart: [],
    page: 'Admin'
  },
  methods: {
    addProductToCart(product){
      if (!this.cart.map(i => i.id).includes(product.id)) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item){
      this.cart = this.cart.slice().filter( i => i.id !== item.id );
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page){
      this.page = page;
      this.$emit('update:page', page);
    },
    addProduct(product) {
      /* '' at the end if to convert id to string */
      this.products = [ ...this.products, { ...product, id: this.products.length + 1 + '' } ];
      this.$emit('update:products', this.products);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
