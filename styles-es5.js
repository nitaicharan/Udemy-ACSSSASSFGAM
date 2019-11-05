(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
          \*****************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: \"Lato\", sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.7;\n    color: #777;\n    padding: 30px;\n}\n.header {\n    height: 95vh;\n    background-image: linear-gradient(\n        to right bottom\n        ,rgba(126,213,111,0.8)\n        ,rgba(40,180,131,0.8)\n    ),url('hero.jpg');\n    background-size:cover;\n    background-position: top;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n    position: relative;\n}\n.text-box {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n}\n.logo-box {\n    position: absolute;\n    top: 40px;\n    left: 40px;\n}\n.logo {\n    height: 35px;\n}\n.heading-primary {\n    color: #fff;\n    text-transform: uppercase;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n}\n.heading-primary-main {\n    display: block;\n    font-size: 60px;\n    font-weight: 400;\n    letter-spacing: 35px;\n    -webkit-animation: moveInLeft;\n            animation: moveInLeft;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n.heading-primary-sub {\n    display: block;\n    font-size: 20px;\n    font-weight: 700;\n    letter-spacing: 17.4px;\n    -webkit-animation: moveInLeft;\n            animation: moveInLeft;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation: moveInRight 1s ease-out;\n            animation: moveInRight 1s ease-out;\n}\n@-webkit-keyframes moveInLeft {\n    0%{\n        opacity: 0;\n        transform: translatex(-100px);\n    }\n    80%{\n        transform: translatex(10px);\n    }\n    100%{\n        opacity: 1;\n        transform: translatex(0);\n    }\n}\n@keyframes moveInLeft {\n    0%{\n        opacity: 0;\n        transform: translatex(-100px);\n    }\n    80%{\n        transform: translatex(10px);\n    }\n    100%{\n        opacity: 1;\n        transform: translatex(0);\n    }\n}\n@-webkit-keyframes moveInRight {\n    0%{\n        opacity: 0;\n        transform: translatex(100px);\n    }\n    80%{\n        transform: translatex(-10px);\n    }\n    100%{\n        opacity: 1;\n        transform: translatex(0);\n    }\n}\n@keyframes moveInRight {\n    0%{\n        opacity: 0;\n        transform: translatex(100px);\n    }\n    80%{\n        transform: translatex(-10px);\n    }\n    100%{\n        opacity: 1;\n        transform: translatex(0);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFlBQVk7SUFDWjs7OztxQkFJOEI7SUFDOUIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QiwwREFBa0Q7WUFBbEQsa0RBQWtEO0lBQ2xELGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0QztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQVpBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjtBQVpBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS43O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogOTV2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0IGJvdHRvbVxuICAgICAgICAscmdiYSgxMjYsMjEzLDExMSwwLjgpXG4gICAgICAgICxyZ2JhKDQwLDE4MCwxMzEsMC44KVxuICAgICksdXJsKCcuL2Fzc2V0cy9pbWcvaGVyby5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA3NXZoLCAwIDEwMCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5sb2dvLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICBsZWZ0OiA0MHB4O1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uaGVhZGluZy1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5oZWFkaW5nLXByaW1hcnktbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDM1cHg7XG4gICAgYW5pbWF0aW9uOiBtb3ZlSW5MZWZ0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG4uaGVhZGluZy1wcmltYXJ5LXN1YiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDE3LjRweDtcbiAgICBhbmltYXRpb246IG1vdmVJbkxlZnQ7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb246IG1vdmVJblJpZ2h0IDFzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTEwMHB4KTtcbiAgICB9XG4gICAgODAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTBweCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZUluUmlnaHQge1xuICAgIDAle1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwcHgpO1xuICAgIH1cbiAgICA4MCV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtMTBweCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICB9XG59XG4iXX0= */", '', '']];
            /***/ 
        }),
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": 
        /*!****************************************************************************!*\
          !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
          \****************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            var stylesInDom = {};
            var isOldIE = function isOldIE() {
                var memo;
                return function memorize() {
                    if (typeof memo === 'undefined') {
                        // Test for IE <= 9 as proposed by Browserhacks
                        // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
                        // Tests for existence of standard globals is to allow style-loader
                        // to operate correctly into non-standard environments
                        // @see https://github.com/webpack-contrib/style-loader/issues/177
                        memo = Boolean(window && document && document.all && !window.atob);
                    }
                    return memo;
                };
            }();
            var getTarget = function getTarget() {
                var memo = {};
                return function memorize(target) {
                    if (typeof memo[target] === 'undefined') {
                        var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself
                        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                            try {
                                // This will throw an exception if access to iframe is blocked
                                // due to cross-origin restrictions
                                styleTarget = styleTarget.contentDocument.head;
                            }
                            catch (e) {
                                // istanbul ignore next
                                styleTarget = null;
                            }
                        }
                        memo[target] = styleTarget;
                    }
                    return memo[target];
                };
            }();
            function listToStyles(list, options) {
                var styles = [];
                var newStyles = {};
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var css = item[1];
                    var media = item[2];
                    var sourceMap = item[3];
                    var part = {
                        css: css,
                        media: media,
                        sourceMap: sourceMap
                    };
                    if (!newStyles[id]) {
                        styles.push(newStyles[id] = {
                            id: id,
                            parts: [part]
                        });
                    }
                    else {
                        newStyles[id].parts.push(part);
                    }
                }
                return styles;
            }
            function addStylesToDom(styles, options) {
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    var j = 0;
                    if (domStyle) {
                        domStyle.refs++;
                        for (; j < domStyle.parts.length; j++) {
                            domStyle.parts[j](item.parts[j]);
                        }
                        for (; j < item.parts.length; j++) {
                            domStyle.parts.push(addStyle(item.parts[j], options));
                        }
                    }
                    else {
                        var parts = [];
                        for (; j < item.parts.length; j++) {
                            parts.push(addStyle(item.parts[j], options));
                        }
                        stylesInDom[item.id] = {
                            id: item.id,
                            refs: 1,
                            parts: parts
                        };
                    }
                }
            }
            function insertStyleElement(options) {
                var style = document.createElement('style');
                if (typeof options.attributes.nonce === 'undefined') {
                    var nonce = true ? __webpack_require__.nc : undefined;
                    if (nonce) {
                        options.attributes.nonce = nonce;
                    }
                }
                Object.keys(options.attributes).forEach(function (key) {
                    style.setAttribute(key, options.attributes[key]);
                });
                if (typeof options.insert === 'function') {
                    options.insert(style);
                }
                else {
                    var target = getTarget(options.insert || 'head');
                    if (!target) {
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    }
                    target.appendChild(style);
                }
                return style;
            }
            function removeStyleElement(style) {
                // istanbul ignore if
                if (style.parentNode === null) {
                    return false;
                }
                style.parentNode.removeChild(style);
            }
            /* istanbul ignore next  */
            var replaceText = function replaceText() {
                var textStore = [];
                return function replace(index, replacement) {
                    textStore[index] = replacement;
                    return textStore.filter(Boolean).join('\n');
                };
            }();
            function applyToSingletonTag(style, index, remove, obj) {
                var css = remove ? '' : obj.css; // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = replaceText(index, css);
                }
                else {
                    var cssNode = document.createTextNode(css);
                    var childNodes = style.childNodes;
                    if (childNodes[index]) {
                        style.removeChild(childNodes[index]);
                    }
                    if (childNodes.length) {
                        style.insertBefore(cssNode, childNodes[index]);
                    }
                    else {
                        style.appendChild(cssNode);
                    }
                }
            }
            function applyToTag(style, options, obj) {
                var css = obj.css;
                var media = obj.media;
                var sourceMap = obj.sourceMap;
                if (media) {
                    style.setAttribute('media', media);
                }
                if (sourceMap && btoa) {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE
                /* istanbul ignore if  */
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    while (style.firstChild) {
                        style.removeChild(style.firstChild);
                    }
                    style.appendChild(document.createTextNode(css));
                }
            }
            var singleton = null;
            var singletonCounter = 0;
            function addStyle(obj, options) {
                var style;
                var update;
                var remove;
                if (options.singleton) {
                    var styleIndex = singletonCounter++;
                    style = singleton || (singleton = insertStyleElement(options));
                    update = applyToSingletonTag.bind(null, style, styleIndex, false);
                    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
                }
                else {
                    style = insertStyleElement(options);
                    update = applyToTag.bind(null, style, options);
                    remove = function remove() {
                        removeStyleElement(style);
                    };
                }
                update(obj);
                return function updateStyle(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                            return;
                        }
                        update(obj = newObj);
                    }
                    else {
                        remove();
                    }
                };
            }
            module.exports = function (list, options) {
                options = options || {};
                options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
                // tags it will allow on a page
                if (!options.singleton && typeof options.singleton !== 'boolean') {
                    options.singleton = isOldIE();
                }
                var styles = listToStyles(list, options);
                addStylesToDom(styles, options);
                return function update(newList) {
                    var mayRemove = [];
                    for (var i = 0; i < styles.length; i++) {
                        var item = styles[i];
                        var domStyle = stylesInDom[item.id];
                        if (domStyle) {
                            domStyle.refs--;
                            mayRemove.push(domStyle);
                        }
                    }
                    if (newList) {
                        var newStyles = listToStyles(newList, options);
                        addStylesToDom(newStyles, options);
                    }
                    for (var _i = 0; _i < mayRemove.length; _i++) {
                        var _domStyle = mayRemove[_i];
                        if (_domStyle.refs === 0) {
                            for (var j = 0; j < _domStyle.parts.length; j++) {
                                _domStyle.parts[j]();
                            }
                            delete stylesInDom[_domStyle.id];
                        }
                    }
                };
            };
            /***/ 
        }),
        /***/ "./src/styles.css": 
        /*!************************!*\
          !*** ./src/styles.css ***!
          \************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
            if (typeof content === 'string') {
                content = [[module.i, content, '']];
            }
            var options = {};
            options.insert = "head";
            options.singleton = false;
            var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
            if (content.locals) {
                module.exports = content.locals;
            }
            /***/ 
        }),
        /***/ 3: 
        /*!******************************!*\
          !*** multi ./src/styles.css ***!
          \******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/acdan/Git/Udemy-ACSSSASSFGAM/src/styles.css */ "./src/styles.css");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map