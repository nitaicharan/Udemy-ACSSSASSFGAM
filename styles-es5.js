(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
        /***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = [[module.i, "@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: Lato, sans-serif;\n  font-weight: 400;\n  box-sizing: border-box;\n  /* font-size: 16px; */\n  line-height: 1.7;\n  color: #777;\n  padding: 3rem;\n}\n.u-center-text {\n  text-align: center;\n}\n.u-margin-bottom-big {\n  margin-bottom: 8rem;\n}\n.u-margin-bottom-medium {\n  margin-bottom: 4rem;\n}\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem;\n}\n.u-margin-top-big {\n  margin-top: 8rem;\n}\n.u-margin-top-huge {\n  margin-top: 10rem;\n}\n.row {\n  max-width: 114rem;\n  margin: 0 auto;\n}\n.row:not(:last-child) {\n  margin-bottom: 8rem;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row [class^=col-] {\n  float: left;\n}\n.row [class^=col-]:not(:last-child) {\n  margin-right: 6rem;\n}\n.row .col-1-of-2 {\n  width: calc((100% - 6rem)/2);\n}\n.row .col-1-of-3 {\n  width: calc((100% - 6rem *2)/3);\n}\n.row .col-1-of-4 {\n  width: calc((100% - 6rem *3)/4);\n}\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #7ed56f, #28b485);\n  -webkit-background-clip: text;\n          background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n}\n.heading-secondary:hover {\n  transform: skewY(2deg) skewX(15deg) scale(1.1);\n  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.5rem 4rem;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer;\n}\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n.btn:hover {\n  transform: translateY(-0.3rem);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.btn:hover::after {\n  transform: scaleX(1.4) scaleY(1.6);\n  opacity: 0;\n}\n.btn:active, .btn:focus {\n  outline: none;\n  transform: translateY(-0.1rem);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n.btn--white {\n  background-color: #fff;\n  color: #777;\n}\n.btn--white::after {\n  background-color: #fff;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--animated {\n  -webkit-animation: moveInBottom 1s ease-out 0.75s;\n          animation: moveInBottom 1s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #55c57a;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #55c57a;\n  padding: 3px;\n  transition-property: all;\n  transition-duration: 0.2s;\n}\n.btn-text:hover {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.btn-text:active {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  transform: translateY(0);\n}\n.bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 0.15;\n  overflow: hidden;\n}\n.bg-video__content {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9iYXNlcy9fYmFzZS5zY3NzIiwiL2hvbWUvYWNkYW4vR2l0L1VkZW15LUFDU1NTQVNTRkdBTS9zcmMvYXNzZXRzL3Nhc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL191dGlsaXRpZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2xheW91dHMvX2dyaWQuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9sYXlvdXRzL19oZWFkaW5nLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2NvbXBvbmVudHMvX2JnLXZpZGVvLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ0FGO0VER0E7SUFDRSw0QkFBQTtFQ0RGO0VESUE7SUFDRSxVQUFBO0lBQ0EsdUJBQUE7RUNGRjtBQUNGO0FEWEE7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ0FGO0VER0E7SUFDRSw0QkFBQTtFQ0RGO0VESUE7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O0FPNUdJO0VBQ0kseUJMbEdRO0VLbUdSLFdMaEZNO0VLaUZOLDJDQUFBO0VBQ0EsMkJBQUE7QVA4R1I7QU8zR0k7RUFDSSx5Qkx6R1E7RUswR1IsV0x2Rk07RUt3Rk4sNkNBQUE7RUFDQSx3QkFBQTtBUDZHUjtBUTFOQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QVI2Tko7QVEzTkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QVI2TlIiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5Aa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcmVtKVxuICB9XG4gIFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTByZW0pO1xuICB9XG4gIFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuIiwiQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHJlbSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluUmlnaHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTByZW0pO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG4qLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM3Nzc7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbi51LWNlbnRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udS1tYXJnaW4tYm90dG9tLWJpZyB7XG4gIG1hcmdpbi1ib3R0b206IDhyZW07XG59XG5cbi51LW1hcmdpbi1ib3R0b20tbWVkaXVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxuLnUtbWFyZ2luLWJvdHRvbS1zbWFsbCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnUtbWFyZ2luLXRvcC1iaWcge1xuICBtYXJnaW4tdG9wOiA4cmVtO1xufVxuXG4udS1tYXJnaW4tdG9wLWh1Z2Uge1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbn1cblxuLnJvdyB7XG4gIG1heC13aWR0aDogMTE0cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDhyZW07XG59XG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuLnJvdyBbY2xhc3NePWNvbC1dIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucm93IFtjbGFzc149Y29sLV06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogNnJlbTtcbn1cbi5yb3cgLmNvbC0xLW9mLTIge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDZyZW0pLzIpO1xufVxuLnJvdyAuY29sLTEtb2YtMyB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNnJlbSAqMikvMyk7XG59XG4ucm93IC5jb2wtMS1vZi00IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA2cmVtICozKS80KTtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2VkNTZmLCAjMjhiNDg1KTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLmhlYWRpbmctc2Vjb25kYXJ5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBza2V3WSgyZGVnKSBza2V3WCgxNWRlZykgc2NhbGUoMS4xKTtcbiAgdGV4dC1zaGFkb3c6IDAuNXJlbSAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uaGVhZGluZy10ZXJ0aWFyeSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnRuLCAuYnRuOmxpbmssIC5idG46dmlzaXRlZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMS41cmVtIDRyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuM3JlbSk7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMS40KSBzY2FsZVkoMS42KTtcbiAgb3BhY2l0eTogMDtcbn1cbi5idG46YWN0aXZlLCAuYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5idG4tLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM3Nzc7XG59XG4uYnRuLS13aGl0ZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tLWdyZWVuOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG59XG4uYnRuLS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tZ3JlZW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbn1cbi5idG4tLWFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMXMgZWFzZS1vdXQgMC43NXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJhY2t3YXJkcztcbn1cblxuLmJ0bi10ZXh0OmxpbmssIC5idG4tdGV4dDp2aXNpdGVkIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGNvbG9yOiAjNTVjNTdhO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzU1YzU3YTtcbiAgcGFkZGluZzogM3B4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG4uYnRuLXRleHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLmJ0bi10ZXh0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLmJnLXZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJnLXZpZGVvX19jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgLy8gdGhpcyBkZWZpbmVzIHdoYXQgYSAxcmVtIGlzXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgcGFkZGluZzogM3JlbTtcbn1cbiIsIi8vIENPTE9SU1xuJGNvbG9yLXByaW1hcnk6ICM1NWM1N2E7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzdlZDU2ZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMyOGI0ODU7XG5cbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICNmZmI5MDA7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICNmZjc3MzA7XG5cbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzI5OThmZjtcbiRjb2xvci10ZXJ0aWFyeS1kYXJrOiAjNTY0M2ZhO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2VlZTtcblxuXG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xuJGNvbG9yLWdyZXktZGFyay0yOiAjOTk5O1xuJGNvbG9yLWdyZXktZGFyay0zOiAjMzMzO1xuXG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuLy8gRk9OVFxuXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcblxuLy8gR1JJRFxuJGdyaWQtd2lkdGg6IDExNHJlbTtcbiRndXR0ZXItdmVydGljYWw6IDhyZW07XG4kZ3V0dGVyLWhvcml6b250YWw6IDZyZW07XG4iLCIudS1jZW50ZXItdGV4dCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udS1tYXJnaW4tYm90dG9tLWJpZyB7IG1hcmdpbi1ib3R0b206IDhyZW07IH1cbi51LW1hcmdpbi1ib3R0b20tbWVkaXVtIHsgbWFyZ2luLWJvdHRvbTogNHJlbTsgfVxuLnUtbWFyZ2luLWJvdHRvbS1zbWFsbCB7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuXG4udS1tYXJnaW4tdG9wLWJpZyB7IG1hcmdpbi10b3A6IDhyZW07IH1cbi51LW1hcmdpbi10b3AtaHVnZSB7IG1hcmdpbi10b3A6IDEwcmVtOyB9XG4iLCIucm93IHtcbiAgICBtYXgtd2lkdGg6ICRncmlkLXdpZHRoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGd1dHRlci12ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICAgIFtjbGFzc149XCJjb2wtXCJdIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlci1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTIge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSkvMik7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTMge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMikvMyk7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTQge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMykvNCk7XG4gICAgfVxufVxuIiwiQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyICB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG4iLCIuaGVhZGluZy1zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvci1wcmltYXJ5LWxpZ2h0LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgyZGVnKSBza2V3WCgxNWRlZykgc2NhbGUoMS4xKTtcbiAgICB0ZXh0LXNoYWRvdzogLjVyZW0gMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMik7XG4gIH1cbn1cblxuLmhlYWRpbmctdGVydGlhcnkge1xuICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIlxuLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcblxuICAgICAgICAvLyBjaGFuZ2UgZm9yIDxidXR0b24+IGVsZW1lbnRzXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4zcmVtKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4xcmVtKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMik7XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGNvbG9yOiAgJGNvbG9yLWdyZXktZGFyaztcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ncmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWdyZWVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAgJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAxcyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxuXG59XG5cbi5idG4tdGV4dCB7XG4gICAgJjpsaW5rXG4gICAgLCY6dmlzaXRlZCAge1xuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgfVxuXG4gICAgJjpob3ZlciAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4xNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMTUpO1xuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cbiIsIi5iZy12aWRlbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvcGFjaXR5OiAuMTU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICZfX2NvbnRlbnQgIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxufVxuIl19 */", '', '']];
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
        /***/ "./src/styles.scss": 
        /*!*************************!*\
          !*** ./src/styles.scss ***!
          \*************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");
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
        /*!*******************************!*\
          !*** multi ./src/styles.scss ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/acdan/Git/Udemy-ACSSSASSFGAM/src/styles.scss */ "./src/styles.scss");
            /***/ 
        })
    }, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
//# sourceMappingURL=styles-es5.js.map
//# sourceMappingURL=styles-es5.js.map