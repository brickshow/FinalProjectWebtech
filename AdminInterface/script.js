
/////Menu bar code
document.addEventListener('DOMContentLoaded', function () {
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    const menu = document.querySelector('.menu-bar');
    let logo = document.querySelector('.shop-logo');

    console.log(document.querySelector('.menu-bar'));


    menu.onclick = function () {
        main.classList.toggle('active');
        navigation.classList.toggle('active');
        logo.classList.toggle('active');
    }

    //add  event listener to the navigation bar
    let listOfnavigation = document.querySelectorAll('.navigation  li a');
    let loadDynamic = document.querySelector('.loadContent');


    function activenavigation() {
        listOfnavigation.forEach((navigation) => {
            navigation.classList.remove('active');
        });

        this.classList.add("active")

        //  // Load content based on the active link

        if (this.classList.contains('products active')) {
            loadDynamic.innerHTML = '';
            $('.loadContent').load('products.html');
        }


    }

    //event handler for adding active to list
    listOfnavigation.forEach((nav) => nav.addEventListener('click', activenavigation))

    // When the "products" menu item is clicked
    document.querySelector('.Products').addEventListener('click', function (event) {
        event.preventDefault();
        fetch('products.html')
            .then(response => response.text())
            .then(products => {
                document.getElementById('contentForm').innerHTML = products;
            })
            .catch(error => console.error('Error loading products:', error));
    });


    //Show add product layout when button is clicked
    let showAddProduct = document.querySelector("addProducts");

    showAddProduct.onclick = function () {
        showAddProduct.classList.add("show")
    }


});