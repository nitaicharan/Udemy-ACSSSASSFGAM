(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: Lato, sans-serif;\n  font-weight: 400;\n  box-sizing: border-box;\n  /* font-size: 16px; */\n  line-height: 1.7;\n  color: #777;\n  padding: 3rem;\n}\n.u-center-text {\n  text-align: center;\n}\n.u-margin-bottom-big {\n  margin-bottom: 8rem;\n}\n.u-margin-bottom-midiam {\n  margin-bottom: 4rem;\n}\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem;\n}\n.u-margin-top-big {\n  margin-top: 8rem;\n}\n.u-margin-top-huge {\n  margin-top: 10rem;\n}\n.row {\n  max-width: 114rem;\n  margin: 0 auto;\n}\n.row:not(:last-child) {\n  margin-bottom: 8rem;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row [class^=col-] {\n  float: left;\n}\n.row [class^=col-]:not(:last-child) {\n  margin-right: 6rem;\n}\n.row .col-1-of-2 {\n  width: calc((100% - 6rem)/2);\n}\n.row .col-1-of-3 {\n  width: calc((100% - 6rem *2)/3);\n}\n.row .col-1-of-4 {\n  width: calc((100% - 6rem *3)/4);\n}\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #7ed56f, #28b485);\n  -webkit-background-clip: text;\n          background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n}\n.heading-secondary:hover {\n  transform: skewY(2deg) skewX(15deg) scale(1.1);\n  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.5rem 4rem;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer;\n}\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n.btn:hover {\n  transform: translateY(-0.3rem);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.btn:hover::after {\n  transform: scaleX(1.4) scaleY(1.6);\n  opacity: 0;\n}\n.btn:active, .btn:focus {\n  outline: none;\n  transform: translateY(-0.1rem);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n.btn--white {\n  background-color: #fff;\n  color: #777;\n}\n.btn--white::after {\n  background-color: #fff;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--animated {\n  -webkit-animation: moveInBottom 1s ease-out 0.75s;\n          animation: moveInBottom 1s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #55c57a;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #55c57a;\n  padding: 3px;\n  transition-property: all;\n  transition-duration: 0.2s;\n}\n.btn-text:hover {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.btn-text:active {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  transform: translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9iYXNlcy9fYmFzZS5zY3NzIiwiL2hvbWUvYWNkYW4vR2l0L1VkZW15LUFDU1NTQVNTRkdBTS9zcmMvYXNzZXRzL3Nhc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL191dGlsaXRpZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2xheW91dHMvX2dyaWQuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9sYXlvdXRzL19oZWFkaW5nLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9jb21wb25lbnRzL19idXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0VDQUY7RURHQTtJQUNFLDRCQUFBO0VDREY7RURJQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ0ZGO0FBQ0Y7QURYQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDZCQUFBO0VDQUY7RURHQTtJQUNFLDRCQUFBO0VDREY7RURJQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDSEY7RURNQTtJQUNFLDRCQUFBO0VDSkY7RURPQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ0xGO0FBQ0Y7QURSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VDSEY7RURNQTtJQUNFLDRCQUFBO0VDSkY7RURPQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDTkY7RURTQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ1BGO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDTkY7RURTQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtFQ1BGO0FBQ0Y7QUNuQ0E7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QURxQ0Y7QUNsQ0E7RUFFRSxnQkFBQTtBRG9DRjtBQ2pDQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQ0pnQjtFREtoQixhQUFBO0FEb0NGO0FHeERBO0VBQWlCLGtCQUFBO0FINERqQjtBRzFEQTtFQUF1QixtQkFBQTtBSDhEdkI7QUc3REE7RUFBMEIsbUJBQUE7QUhpRTFCO0FHaEVBO0VBQXlCLHFCQUFBO0FIb0V6QjtBR2xFQTtFQUFvQixnQkFBQTtBSHNFcEI7QUdyRUE7RUFBcUIsaUJBQUE7QUh5RXJCO0FJaEZBO0VBQ0ksaUJGMkJTO0VFMUJULGNBQUE7QUptRko7QUlqRkk7RUFDSSxtQkZ3QlU7QUYyRGxCO0FLdkZJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FMeUZSO0FJbkZJO0VBQ0ksV0FBQTtBSnFGUjtBSW5GUTtFQUNJLGtCRmdCUTtBRnFFcEI7QUlqRkk7RUFDSSw0QkFBQTtBSm1GUjtBSWhGSTtFQUNJLCtCQUFBO0FKa0ZSO0FJL0VJO0VBQ0ksK0JBQUE7QUppRlI7QU01R0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBTitHRjtBTTdHRTtFQUNFLDhDQUFBO0VBQ0EsZ0RBQUE7QU4rR0o7QU0zR0E7RUFDRSxpQkpPa0I7RUlObEIsZ0JBQUE7RUFDQSx5QkFBQTtBTjhHRjtBT2hJSTtFQUdJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJMYVk7RUtWWixZQUFBO0VBQ0EsZUFBQTtBUCtIUjtBTzVISTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FQOEhSO0FPM0hJO0VBQ0ksOEJBQUE7RUFDQSwwQ0FBQTtBUDZIUjtBTzNIUTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtBUDZIWjtBT3pISTtFQUVJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0FQMEhSO0FPdkhJO0VBQ0ksc0JMOUJNO0VLK0JOLFdMcENVO0FGNkpsQjtBT3ZIUTtFQUNJLHNCTGxDRTtBRjJKZDtBT3JISTtFQUNJLHlCTDFEUTtFSzJEUixXTHhDTTtBRitKZDtBT3JIUTtFQUNJLHlCTDlESTtBRnFMaEI7QU9uSEk7RUFDSSx5QkxuRVE7RUtvRVIsV0xqRE07QUZzS2Q7QU9uSFE7RUFDSSx5Qkx2RUk7QUY0TGhCO0FPakhJO0VBQ0ksaURBQUE7VUFBQSx5Q0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QVBtSFI7QU83R0k7RUFFSSxpQkw3RFk7RUs4RFosY0x0RlE7RUt1RlIscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkwzRlE7RUs0RlIsWUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QVArR1I7QU81R0k7RUFDSSx5QkxsR1E7RUttR1IsV0xoRk07RUtpRk4sMkNBQUE7RUFDQSwyQkFBQTtBUDhHUjtBTzNHSTtFQUNJLHlCTHpHUTtFSzBHUixXTHZGTTtFS3dGTiw2Q0FBQTtFQUNBLHdCQUFBO0FQNkdSIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBtb3ZlSW5MZWZ0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHJlbSlcbiAgfVxuICBcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcbiAgfVxuICBcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVJbkJvdHRvbSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzcmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbiIsIkBrZXlmcmFtZXMgbW92ZUluTGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTByZW0pO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vdmVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcmVtKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5Cb3R0b20ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBmb250LXNpemU6IDE2cHg7ICovXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNzc3O1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG4udS1jZW50ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnUtbWFyZ2luLWJvdHRvbS1iaWcge1xuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xufVxuXG4udS1tYXJnaW4tYm90dG9tLW1pZGlhbSB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi51LW1hcmdpbi1ib3R0b20tc21hbGwge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi51LW1hcmdpbi10b3AtYmlnIHtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cblxuLnUtbWFyZ2luLXRvcC1odWdlIHtcbiAgbWFyZ2luLXRvcDogMTByZW07XG59XG5cbi5yb3cge1xuICBtYXgtd2lkdGg6IDExNHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucm93Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xufVxuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5yb3cgW2NsYXNzXj1jb2wtXSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnJvdyBbY2xhc3NePWNvbC1dOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDZyZW07XG59XG4ucm93IC5jb2wtMS1vZi0yIHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA2cmVtKS8yKTtcbn1cbi5yb3cgLmNvbC0xLW9mLTMge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDZyZW0gKjIpLzMpO1xufVxuLnJvdyAuY29sLTEtb2YtNCB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNnJlbSAqMykvNCk7XG59XG5cbi5oZWFkaW5nLXNlY29uZGFyeSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdlZDU2ZiwgIzI4YjQ4NSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5oZWFkaW5nLXNlY29uZGFyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2tld1koMmRlZykgc2tld1goMTVkZWcpIHNjYWxlKDEuMSk7XG4gIHRleHQtc2hhZG93OiAwLjVyZW0gMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmhlYWRpbmctdGVydGlhcnkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0biwgLmJ0bjpsaW5rLCAuYnRuOnZpc2l0ZWQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4uYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjNyZW0pO1xuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uYnRuOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEuNCkgc2NhbGVZKDEuNik7XG4gIG9wYWNpdHk6IDA7XG59XG4uYnRuOmFjdGl2ZSwgLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xcmVtKTtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uYnRuLS13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNzc3O1xufVxuLmJ0bi0td2hpdGU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4tLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLS1ncmVlbjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xufVxuLmJ0bi0tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tLWdyZWVuOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG59XG4uYnRuLS1hbmltYXRlZCB7XG4gIGFuaW1hdGlvbjogbW92ZUluQm90dG9tIDFzIGVhc2Utb3V0IDAuNzVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG59XG5cbi5idG4tdGV4dDpsaW5rLCAuYnRuLXRleHQ6dmlzaXRlZCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzU1YzU3YTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM1NWM1N2E7XG4gIHBhZGRpbmc6IDNweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmJ0bi10ZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cbi5idG4tdGV4dDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59IiwiKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgLy8gdGhpcyBkZWZpbmVzIHdoYXQgYSAxcmVtIGlzXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgcGFkZGluZzogM3JlbTtcbn1cbiIsIi8vIENPTE9SU1xuJGNvbG9yLXByaW1hcnk6ICM1NWM1N2E7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzdlZDU2ZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMyOGI0ODU7XG5cbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICNmZmI5MDA7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICNmZjc3MzA7XG5cbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzI5OThmZjtcbiRjb2xvci10ZXJ0aWFyeS1kYXJrOiAjNTY0M2ZhO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2VlZTtcblxuXG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xuJGNvbG9yLWdyZXktZGFyay0yOiAjOTk5O1xuJGNvbG9yLWdyZXktZGFyay0zOiAjMzMzO1xuXG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuLy8gRk9OVFxuXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcblxuLy8gR1JJRFxuJGdyaWQtd2lkdGg6IDExNHJlbTtcbiRndXR0ZXItdmVydGljYWw6IDhyZW07XG4kZ3V0dGVyLWhvcml6b250YWw6IDZyZW07XG4iLCIudS1jZW50ZXItdGV4dCB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udS1tYXJnaW4tYm90dG9tLWJpZyB7IG1hcmdpbi1ib3R0b206IDhyZW07IH1cbi51LW1hcmdpbi1ib3R0b20tbWlkaWFtIHsgbWFyZ2luLWJvdHRvbTogNHJlbTsgfVxuLnUtbWFyZ2luLWJvdHRvbS1zbWFsbCB7IG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxuXG4udS1tYXJnaW4tdG9wLWJpZyB7IG1hcmdpbi10b3A6IDhyZW07IH1cbi51LW1hcmdpbi10b3AtaHVnZSB7IG1hcmdpbi10b3A6IDEwcmVtOyB9XG4iLCIucm93IHtcbiAgICBtYXgtd2lkdGg6ICRncmlkLXdpZHRoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGd1dHRlci12ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICAgIFtjbGFzc149XCJjb2wtXCJdIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlci1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTIge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSkvMik7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTMge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMikvMyk7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTQge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMykvNCk7XG4gICAgfVxufVxuIiwiQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyICB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG4iLCIuaGVhZGluZy1zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvci1wcmltYXJ5LWxpZ2h0LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgyZGVnKSBza2V3WCgxNWRlZykgc2NhbGUoMS4xKTtcbiAgICB0ZXh0LXNoYWRvdzogLjVyZW0gMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMik7XG4gIH1cbn1cblxuLmhlYWRpbmctdGVydGlhcnkge1xuICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIlxuLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcblxuICAgICAgICAvLyBjaGFuZ2UgZm9yIDxidXR0b24+IGVsZW1lbnRzXG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4zcmVtKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4xcmVtKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMik7XG4gICAgfVxuXG4gICAgJi0td2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGNvbG9yOiAgJGNvbG9yLWdyZXktZGFyaztcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ncmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWdyZWVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAgJGNvbG9yLXdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tYW5pbWF0ZWQge1xuICAgICAgICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAxcyBlYXNlLW91dCAuNzVzO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBiYWNrd2FyZHM7XG4gICAgfVxuXG59XG5cbi5idG4tdGV4dCB7XG4gICAgJjpsaW5rXG4gICAgLCY6dmlzaXRlZCAge1xuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgfVxuXG4gICAgJjpob3ZlciAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4xNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMTUpO1xuICAgICAgICB0cmFuc2Zvcm06ICB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
        } catch (e) {
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
    } else {
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
    } else {
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
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
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
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
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
  } else {
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
  } else {
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
    } else {
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

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/acdan/Git/Udemy-ACSSSASSFGAM/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map