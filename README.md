# ngExtend
Extends the default AngularJS Module with useful Services, Filters and Directives


##Instalation

###Bower

You can use bower with `$bower install ngExtend`

###Clone

You can clone this repo with `$git clone https://github.com/Nano1237/ngExtend.git`

###Include rawgit

You can include the raw js file with `<script src="https://rawgit.com/Nano1237/ngExtend/ngExtend.min.js"></script>` *(not recommended, because of XSS vulnerability)*


##Usage

Require the Module

```javascript
angular.module('myModule', [
    'ngExtend'
]);
```

##Directives

###`xt-src-err`

If you are not absolutely sure if your image exists, then you could use the `xt-src-err` directive to replace the image with a placeholder image.

####Usage

Just add the `xt-src-err` Property to any `<img>` Tag you want.
```html
<img src="someImageWith404Response.jpg" xt-src-err="imageVariable" />
<img src="someImageWith404Response.jpg" xt-src-err="'someExistingImage.jpg'" />
```

##Filters

###toFixed

This Filter just calls the `.toFixed()` Method of Numbers.
If you pass a String, then it will be transformed into a Number.

####Usage

Use it like any filter you know

```html

{{123|toFixed:2}} -> 123.00
{{123|toFixed:3}} -> 123.000
{{123.45|toFixed:3}} -> 123.450
{{123.45|toFixed:1}} -> 123.5

```