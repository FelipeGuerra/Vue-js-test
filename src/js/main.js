$(document).ready(function () {
    FastClick.attach(document.body);

    $(document).mouseup(function (e) {
        var container = $(".cart-preview, .wishlist-preview");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
    });
});




var v = new Vue({
    el: 'body',
    data: {
        products:[
            {
                id: 1,
                name: "Logo appliquè sweatshirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "MCQ ALEXANDER MCQUEEN",
                details: "This is where some detailes on Logo appliquè sweatshirt would go.",
                list_price: 210,
                price: 137.50
            },

            {
                id: 2,
                name: "Cockerel print t-shirt",
                image: "img/products/product-cockerel-print-t-shirt.png",
                brand: "OFF-WHITE",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 335,
                price: 335
            },

            {
                id: 3,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 4,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 5,
                name: "Unicorn print T-shirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "PALM ANGELS",
                details: "This is where some detailes on Unicorn print T-shirt would go.",
                list_price: 83,
                price: 83
            },

            {
                id: 6,
                name: "Denim shirt",
                image: "img/products/product-lightning-bolt-print-t-shirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Denim shirt would go.",
                list_price: 160,
                price: 160
            },

            {
                id: 7,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 8,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 9,
                name: "Cockerel print t-shirt",
                image: "img/products/product-cockerel-print-t-shirt.png",
                brand: "OFF-WHITE",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 335,
                price: 335
            },

            {
                id: 10,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 11,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 12,
                name: "Unicorn print T-shirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "PALM ANGELS",
                details: "This is where some detailes on Unicorn print T-shirt would go.",
                list_price: 83,
                price: 83
            },

            {
                id: 13,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 14,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 15,
                name: "Logo appliquè sweatshirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "MCQ ALEXANDER MCQUEEN",
                details: "This is where some detailes on Logo appliquè sweatshirt would go.",
                list_price: 210,
                price: 137.50
            },

            {
                id: 16,
                name: "Denim shirt",
                image: "img/products/product-lightning-bolt-print-t-shirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Denim shirt would go.",
                list_price: 160,
                price: 160
            },

            {
                id: 17,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 18,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 19,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 20,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 21,
                name: "Unicorn print T-shirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "PALM ANGELS",
                details: "This is where some detailes on Unicorn print T-shirt would go.",
                list_price: 83,
                price: 83
            },

            {
                id: 22,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 23,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 24,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 25,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 26,
                name: "Denim shirt",
                image: "img/products/product-lightning-bolt-print-t-shirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Denim shirt would go.",
                list_price: 160,
                price: 160
            },

            {
                id: 27,
                name: "Logo appliquè sweatshirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "MCQ ALEXANDER MCQUEEN",
                details: "This is where some detailes on Logo appliquè sweatshirt would go.",
                list_price: 210,
                price: 137.50
            },

            {
                id: 28,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 29,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 30,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 31,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 32,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 33,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 34,
                name: "Unicorn print T-shirt",
                image: "img/products/ami-print-t-shirt.png",
                brand: "PALM ANGELS",
                details: "This is where some detailes on Unicorn print T-shirt would go.",
                list_price: 83,
                price: 83
            },

            {
                id: 35,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 36,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 37,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 38,
                name: "Cockerel print t-shirt",
                image: "img/products/product-spray-paint-checked-shirt.png",
                brand: "DOLCE & GABBANA",
                details: "This is where some detailes on Cockerel print t-shirt would go.",
                list_price: 245,
                price: 245
            },

            {
                id: 39,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 40,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            },

            {
                id: 41,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 42,
                name: "Gorilla print sweatshirt",
                image: "img/products/product-gorilla-print-sweatshirt.png",
                brand: "MARCELO BURLON COUNTY",
                details: "This is where some detailes on Gorilla print sweatshirt would go.",
                list_price: 270,
                price: 270
            },

            {
                id: 43,
                name: "Ami print T-shirt",
                image: "img/products/product-logo-applique-sweatshirt.png",
                brand: "AMI ALEXANDRE MATTIUSSI ",
                details: "This is where some detailes on Ami print T-shirt would go.",
                list_price: 72,
                price: 72
            },

            {
                id: 44,
                name: "Lightning bolt print T-shirt",
                image: "img/products/product-denim-shirt.png",
                brand: "NEIL BARRETT",
                details: "This is where some detailes on Lightning bolt print T-shirt would go.",
                list_price: 175,
                price: 175
            }
        ],
        cart_items: [],
        wishlist_items: [],
        searchKey: '',
        currentPage: 0,
        itemsPerPage: 8,
        resultCount: 0,
        showCart: false,
        showWishlist: false
    },
    computed: {
        //count items in cart
        count: function () {
            return this.cart_items.length;
        },
        //count items in wishlist
        wishlist_count: function () {
            return this.wishlist_items.length;
        },
        //total price in cart
        total: function () {
            return _.reduce(this.cart_items, function (n, cart_item) {
                return cart_item.price * cart_item.qty + n;
            }, 0).toFixed(2);
        },
        // amount of pages: all pages divided by number of items provided on itemsPerPage
        totalPages: function() {
          return Math.ceil(this.resultCount / this.itemsPerPage)
        }
    },
    methods: {
        // Cart Funcitions
        notInCart: function (product) {
            var ids = _.pluck(this.cart_items, 'id');
            return !_.contains(ids, product.id);
        },
        addToCart: function (product) {
            var cart = Vue.util.extend({}, product);
            var ids = _.pluck(this.cart_items, 'id');

            if (!_.contains(ids, product.id)) {
                cart.qty = 1;
                this.cart_items.push(cart);
            }
        },
        addQty: function (product) {
            product.qty = product.qty + 1;
        },
        decQty: function (product) {
            product.qty -= 1;
            if (product.qty <= 0) {
                this.cart_items.$remove(product);
            }
        },
        remProd: function (product) {
            this.cart_items.$remove(product);
        },
        // Wishlist functions
        notInWishlist: function (product) {
            var ids = _.pluck(this.wishlist_items, 'id');
            return !_.contains(ids, product.id);
        },
        addToWishlist: function (product) {
            var wishlist = Vue.util.extend({}, product);
            var ids = _.pluck(this.wishlist_items, 'id');

            if (!_.contains(ids, product.id)) {
                wishlist.qty = 1;
                this.wishlist_items.push(wishlist);
            }
        },
        addWishlistQty: function (product) {
            product.qty = product.qty + 1;
        },
        decWishlistQty: function (product) {
            product.qty -= 1;
            if (product.qty <= 0) {
                this.wishlist_items.$remove(product);
            }
        },
        remProdWishlist: function (product) {
            this.wishlist_items.$remove(product);
        },
        //Set the current page      
        setPage: function(pageNumber) {
          this.currentPage = pageNumber
        }
    },
    filters: {
        // Pager function
        paginate: function(list) {
            this.resultCount = list.length
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages - 1
            }
            var index = this.currentPage * this.itemsPerPage
            return list.slice(index, index + this.itemsPerPage)
        }
    }
});