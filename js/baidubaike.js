/**
 * Created by Administrator on 2016/7/19.
 */
/*
var $a = $('.more-product-item');
$a.on('mouseenter', function(){
    var $list = $('.product-list')[0];
    $list.style.display = 'block';
});

var $list = $('.product-list');
$list.on('mouseleave', function () {
    var i = $list[0];
    i.style.display  = 'none';
});*/
var b = document.getElementsByClassName('navbar-content-box')[0];

b.addEventListener('mouseenter', function () {
    var a = document.getElementsByClassName('wgt-navbar')[0];
    a.style.overflow="visible";
});

var productListNodes = document.getElementsByClassName('wgt-navbar')[0];

productListNodes.addEventListener('mouseleave', function () {
    productListNodes.style.overflow="hidden";
});

/*
var a = document.getElementsByClassName('mores-product-item')[0];

a.addEventListener('mouseenter', function () {
    var productListNodes = document.getElementsByClassName('products-list')[0];
    productListNodes.style.display = 'block';
});

var productListNodes = document.getElementsByClassName('products-list')[0];

productListNodes.addEventListener('mouseleave', function () {
    var productListNodes = document.getElementsByClassName('products-list')[0];
    productListNodes.style.display = 'none';
});

/!*�û�*!/
var a = document.getElementsByClassName('user-mores-product-item')[0];

a.addEventListener('mouseenter', function () {
    var productListNodes = document.getElementsByClassName('user-products-list')[0];
    productListNodes.style.display = 'block';
});

var productListNodes = document.getElementsByClassName('user-products-list')[0];

productListNodes.addEventListener('mouseleave', function () {
    var productListNodes = document.getElementsByClassName('user-products-list')[0];
    productListNodes.style.display = 'none';
});

/!*Ȩ������*!/
var a = document.getElementsByClassName('cooperation-mores-product-item')[0];

a.addEventListener('mouseenter', function () {
    var productListNodes = document.getElementsByClassName('cooperation-sproducts-list')[0];
    productListNodes.style.display = 'block';
});

var productListNodes = document.getElementsByClassName('cooperation-sproducts-list')[0];

productListNodes.addEventListener('mouseleave', function () {
    var productListNodes = document.getElementsByClassName('cooperation-sproducts-list')[0];
    productListNodes.style.display = 'none';
});

/!*�ֻ��ٿ�*!/
var a = document.getElementsByClassName('mobile-mores-product-item')[0];

a.addEventListener('mouseenter', function () {
    var productListNodes = document.getElementsByClassName('mobile-sproducts-list')[0];
    productListNodes.style.display = 'block';
});

var productListNodes = document.getElementsByClassName('mobile-sproducts-list')[0];

productListNodes.addEventListener('mouseleave', function () {
    var productListNodes = document.getElementsByClassName('mobile-sproducts-list')[0];
    productListNodes.style.display = 'none';
});*/
