(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem);\n  }\n  80% {\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@-webkit-keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n@keyframes moveInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0);\n  }\n}\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: Lato, sans-serif;\n  font-weight: 400;\n  box-sizing: border-box;\n  /* font-size: 16px; */\n  line-height: 1.7;\n  color: #777;\n  padding: 3rem;\n}\n.u-center-text {\n  text-align: center !important;\n}\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important;\n}\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important;\n}\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important;\n}\n.u-margin-top-big {\n  margin-top: 8rem !important;\n}\n.u-margin-top-huge {\n  margin-top: 10rem !important;\n}\n.row {\n  max-width: 114rem;\n  margin: 0 auto;\n}\n.row:not(:last-child) {\n  margin-bottom: 8rem;\n}\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row [class^=col-] {\n  float: left;\n}\n.row [class^=col-]:not(:last-child) {\n  margin-right: 6rem;\n}\n.row .col-1-of-2 {\n  width: calc((100% - 6rem)/2);\n}\n.row .col-1-of-3 {\n  width: calc((100% - 6rem *2)/3);\n}\n.row .col-1-of-4 {\n  width: calc((100% - 6rem *3)/4);\n}\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #7ed56f, #28b485);\n  -webkit-background-clip: text;\n          background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n}\n.heading-secondary:hover {\n  transform: skewY(2deg) skewX(15deg) scale(1.1);\n  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.5rem 4rem;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer;\n}\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 10rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n.btn:hover {\n  transform: translateY(-0.3rem);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.btn:hover::after {\n  transform: scaleX(1.4) scaleY(1.6);\n  opacity: 0;\n}\n.btn:active, .btn:focus {\n  outline: none;\n  transform: translateY(-0.1rem);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n}\n.btn--white {\n  background-color: #fff;\n  color: #777;\n}\n.btn--white::after {\n  background-color: #fff;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--green {\n  background-color: #55c57a;\n  color: #fff;\n}\n.btn--green::after {\n  background-color: #55c57a;\n}\n.btn--animated {\n  -webkit-animation: moveInBottom 1s ease-out 0.75s;\n          animation: moveInBottom 1s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n}\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #55c57a;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: #55c57a;\n  padding: 3px;\n  transition-property: all;\n  transition-duration: 0.2s;\n}\n.btn-text:hover {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.btn-text:active {\n  background-color: #55c57a;\n  color: #fff;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  transform: translateY(0);\n}\n.bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 0.15;\n  overflow: hidden;\n}\n.bg-video__content {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.form__group:not(:last-child) {\n  margin-bottom: 2rem;\n}\n.form__input {\n  font-size: 1.5rem;\n  color: inherit;\n  font-family: inherit;\n  padding: 1.5rem 2rem;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border: none;\n  border-bottom: 3px solid transparent;\n  width: 90%;\n  display: block;\n  transition: all 0.3s;\n}\n.form__input:focus {\n  outline: none;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  border-bottom: 3px solid #55c57a;\n}\n.form__input:focus:invalid {\n  border-bottom: 3px solid #ff7730;\n}\n.form__input::-webkit-input-placeholder {\n  color: #999;\n}\n.form__label {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-left: 2rem;\n  margin-top: 0.7rem;\n  display: block;\n  transition: all 0.3s;\n}\n.form__input:placeholder-shown + .form__label {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-4rem);\n}\n.form__radio-group {\n  width: 49%;\n  display: inline-block;\n}\n.form__radio-input {\n  display: none;\n}\n.form__radio-label {\n  font-size: 1.6rem;\n  cursor: pointer;\n  position: relative;\n  padding-left: 4.5rem;\n}\n.form__radio-button {\n  height: 3rem;\n  width: 3rem;\n  border: 5px solid #55c57a;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: -0.75rem;\n}\n.form__radio-button::after {\n  content: \"\";\n  display: block;\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #55c57a;\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.2s;\n}\n.form__radio-input:checked ~ .form__radio-label .form__radio-button:after {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL19hbmltYXRpb25zLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9iYXNlcy9fYmFzZS5zY3NzIiwiL2hvbWUvYWNkYW4vR2l0L1VkZW15LUFDU1NTQVNTRkdBTS9zcmMvYXNzZXRzL3Nhc3MvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Jhc2VzL191dGlsaXRpZXMuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2xheW91dHMvX2dyaWQuc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2Fic3RyYWN0cy9fbWl4aW5zLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9sYXlvdXRzL19oZWFkaW5nLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9jb21wb25lbnRzL19idXR0b24uc2NzcyIsIi9ob21lL2FjZGFuL0dpdC9VZGVteS1BQ1NTU0FTU0ZHQU0vc3JjL2Fzc2V0cy9zYXNzL2NvbXBvbmVudHMvX2JnLXZpZGVvLnNjc3MiLCIvaG9tZS9hY2Rhbi9HaXQvVWRlbXktQUNTU1NBU1NGR0FNL3NyYy9hc3NldHMvc2Fzcy9jb21wb25lbnRzL19mb3JtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw2QkFBQTtFQ0FGO0VER0E7SUFDRSw0QkFBQTtFQ0RGO0VESUE7SUFDRSxVQUFBO0lBQ0EsdUJB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QSxhQUFBO0FUa09SO0FTaE9RO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJQbkZJO0VPb0ZKLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FUa09aO0FTOU5JO0VBQ0ksVUFBQTtBVGdPUiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBrZXlmcmFtZXMgbW92ZUluTGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTByZW0pXG4gIH1cbiAgXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XG4gIH1cbiAgXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb3ZlSW5Cb3R0b20ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3JlbSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG59XG4iLCJAa2V5ZnJhbWVzIG1vdmVJbkxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcmVtKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlSW5SaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHJlbSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZUluQm90dG9tIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDNyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzc3NztcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLnUtY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLnUtbWFyZ2luLWJvdHRvbS1iaWcge1xuICBtYXJnaW4tYm90dG9tOiA4cmVtICFpbXBvcnRhbnQ7XG59XG5cbi51LW1hcmdpbi1ib3R0b20tbWVkaXVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbSAhaW1wb3J0YW50O1xufVxuXG4udS1tYXJnaW4tYm90dG9tLXNtYWxsIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi51LW1hcmdpbi10b3AtYmlnIHtcbiAgbWFyZ2luLXRvcDogOHJlbSAhaW1wb3J0YW50O1xufVxuXG4udS1tYXJnaW4tdG9wLWh1Z2Uge1xuICBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50O1xufVxuXG4ucm93IHtcbiAgbWF4LXdpZHRoOiAxMTRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnJvdzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbn1cbi5yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4ucm93IFtjbGFzc149Y29sLV0ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5yb3cgW2NsYXNzXj1jb2wtXTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cmVtO1xufVxuLnJvdyAuY29sLTEtb2YtMiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gNnJlbSkvMik7XG59XG4ucm93IC5jb2wtMS1vZi0zIHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSA2cmVtICoyKS8zKTtcbn1cbi5yb3cgLmNvbC0xLW9mLTQge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDZyZW0gKjMpLzQpO1xufVxuXG4uaGVhZGluZy1zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3ZWQ1NmYsICMyOGI0ODUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uaGVhZGluZy1zZWNvbmRhcnk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNrZXdZKDJkZWcpIHNrZXdYKDE1ZGVnKSBzY2FsZSgxLjEpO1xuICB0ZXh0LXNoYWRvdzogMC41cmVtIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5oZWFkaW5nLXRlcnRpYXJ5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idG4sIC5idG46bGluaywgLmJ0bjp2aXNpdGVkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zcmVtKTtcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xuICBvcGFjaXR5OiAwO1xufVxuLmJ0bjphY3RpdmUsIC5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMXJlbSk7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmJ0bi0td2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzc3Nztcbn1cbi5idG4tLXdoaXRlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tZ3JlZW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbn1cbi5idG4tLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLS1ncmVlbjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xufVxuLmJ0bi0tYW5pbWF0ZWQge1xuICBhbmltYXRpb246IG1vdmVJbkJvdHRvbSAxcyBlYXNlLW91dCAwLjc1cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xufVxuXG4uYnRuLXRleHQ6bGluaywgLmJ0bi10ZXh0OnZpc2l0ZWQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICM1NWM1N2E7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNTVjNTdhO1xuICBwYWRkaW5nOiAzcHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbn1cbi5idG4tdGV4dDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWM1N2E7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG4uYnRuLXRleHQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YzU3YTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uYmctdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMTU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmctdmlkZW9fX2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZvcm1fX2dyb3VwOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmZvcm1fX2lucHV0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmZvcm1fX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzU1YzU3YTtcbn1cbi5mb3JtX19pbnB1dDpmb2N1czppbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjc3MzA7XG59XG4uZm9ybV9faW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cbi5mb3JtX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uZm9ybV9faW5wdXQ6cGxhY2Vob2xkZXItc2hvd24gKyAuZm9ybV9fbGFiZWwge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHJlbSk7XG59XG4uZm9ybV9fcmFkaW8tZ3JvdXAge1xuICB3aWR0aDogNDklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZm9ybV9fcmFkaW8taW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZvcm1fX3JhZGlvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDQuNXJlbTtcbn1cbi5mb3JtX19yYWRpby1idXR0b24ge1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBib3JkZXI6IDVweCBzb2xpZCAjNTVjNTdhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0wLjc1cmVtO1xufVxuLmZvcm1fX3JhZGlvLWJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVjNTdhO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuLmZvcm1fX3JhZGlvLWlucHV0OmNoZWNrZWQgfiAuZm9ybV9fcmFkaW8tbGFiZWwgLmZvcm1fX3JhZGlvLWJ1dHRvbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59IiwiKixcbio6OmFmdGVyLFxuKjo6YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgLy8gdGhpcyBkZWZpbmVzIHdoYXQgYSAxcmVtIGlzXG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogZm9udC1zaXplOiAxNnB4OyAqL1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgcGFkZGluZzogM3JlbTtcbn1cbiIsIi8vIENPTE9SU1xuJGNvbG9yLXByaW1hcnk6ICM1NWM1N2E7XG4kY29sb3ItcHJpbWFyeS1saWdodDogIzdlZDU2ZjtcbiRjb2xvci1wcmltYXJ5LWRhcms6ICMyOGI0ODU7XG5cbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICNmZmI5MDA7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICNmZjc3MzA7XG5cbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzI5OThmZjtcbiRjb2xvci10ZXJ0aWFyeS1kYXJrOiAjNTY0M2ZhO1xuXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xuJGNvbG9yLWdyZXktbGlnaHQtMjogI2VlZTtcblxuXG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xuJGNvbG9yLWdyZXktZGFyay0yOiAjOTk5O1xuJGNvbG9yLWdyZXktZGFyay0zOiAjMzMzO1xuXG5cbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1ibGFjazogIzAwMDtcblxuLy8gRk9OVFxuXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcblxuLy8gR1JJRFxuJGdyaWQtd2lkdGg6IDExNHJlbTtcbiRndXR0ZXItdmVydGljYWw6IDhyZW07XG4kZ3V0dGVyLWhvcml6b250YWw6IDZyZW07XG4iLCIudS1jZW50ZXItdGV4dCB7IHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi51LW1hcmdpbi1ib3R0b20tYmlnIHsgbWFyZ2luLWJvdHRvbTogOHJlbSAhaW1wb3J0YW50OyB9XG4udS1tYXJnaW4tYm90dG9tLW1lZGl1bSB7IG1hcmdpbi1ib3R0b206IDRyZW0gIWltcG9ydGFudDsgfVxuLnUtbWFyZ2luLWJvdHRvbS1zbWFsbCB7IG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50OyB9XG5cbi51LW1hcmdpbi10b3AtYmlnIHsgbWFyZ2luLXRvcDogOHJlbSAhaW1wb3J0YW50OyB9XG4udS1tYXJnaW4tdG9wLWh1Z2UgeyBtYXJnaW4tdG9wOiAxMHJlbSAhaW1wb3J0YW50OyB9XG4iLCIucm93IHtcbiAgICBtYXgtd2lkdGg6ICRncmlkLXdpZHRoO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogJGd1dHRlci12ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBjbGVhcmZpeDtcblxuICAgIFtjbGFzc149XCJjb2wtXCJdIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGd1dHRlci1ob3Jpem9udGFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTIge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSkvMik7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTMge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMikvMyk7XG4gICAgfVxuXG4gICAgLmNvbC0xLW9mLTQge1xuICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtICN7JGd1dHRlci1ob3Jpem9udGFsfSAqMykvNCk7XG4gICAgfVxufVxuIiwiQG1peGluIGNsZWFyZml4IHtcbiAgICAmOmFmdGVyICB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbkBtaXhpbiBhYnNDZW50ZXIgIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4iLCIuaGVhZGluZy1zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvci1wcmltYXJ5LWxpZ2h0LCAkY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgyZGVnKSBza2V3WCgxNWRlZykgc2NhbGUoMS4xKTtcbiAgICB0ZXh0LXNoYWRvdzogLjVyZW0gMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMik7XG4gIH1cbn1cblxuLmhlYWRpbmctdGVydGlhcnkge1xuICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiIsIlxuLmJ0biB7XG4gICAgJixcbiAgICAmOmxpbmssXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6ICRkZWZhdWx0LWZvbnQtc2l6ZTtcblxuICAgICAgICAvLyBjaGFuZ2UgZm9yIDxidXR0b24+IGVsZW1lbnRzXG4gICAgICAgIGJvcmRlcjpub25lIDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS4zcmVtKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4yKTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpIHNjYWxlWSgxLjYpO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLCAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uMXJlbSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKCRjb2xvci1ibGFjaywgLjIpO1xuICAgIH1cblxuICAgICYtLXdoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICBjb2xvcjogICRjb2xvci1ncmV5LWRhcms7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi0tZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICAkY29sb3Itd2hpdGU7XG5cbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLS1ncmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogICRjb2xvci13aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtLWFuaW1hdGVkIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlSW5Cb3R0b20gMXMgZWFzZS1vdXQgLjc1cztcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzO1xuICAgIH1cblxufVxuXG4uYnRuLXRleHQge1xuICAgICY6bGlua1xuICAgICwmOnZpc2l0ZWQgIHtcbiAgICAgICAgZm9udC1zaXplOiAkZGVmYXVsdC1mb250LXNpemU7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIH1cblxuICAgICY6aG92ZXIgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHJnYmEoJGNvbG9yLWJsYWNrLCAuMTUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKCRjb2xvci1ibGFjaywgLjE1KTtcbiAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG4iLCIuYmctdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3BhY2l0eTogLjE1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmX19jb250ZW50ICB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn1cbiIsIi5mb3JtIHtcbiAgICAmX19ncm91cDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTsgXG4gICAgfVxuXG4gICAgJl9faW5wdXQge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci13aGl0ZSwgLjUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gcmdiYSgkY29sb3ItYmxhY2ssIC4xKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Zm9jdXM6aW52YWxpZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGNvbG9yLXNlY29uZGFyeS1kYXJrO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyay0yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC43cmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG5cbiAgICAmX19pbnB1dDpwbGFjZWhvbGRlci1zaG93biArICZfX2xhYmVsIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRyZW0pO1xuICAgIH1cblxuICAgICZfX3JhZGlvLWdyb3VwICB7XG4gICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAmX19yYWRpby1pbnB1dCAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICZfX3JhZGlvLWxhYmVsICB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGRlZmF1bHQtZm9udC1zaXplO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0LjVyZW07XG4gICAgfVxuXG4gICAgJl9fcmFkaW8tYnV0dG9uICB7XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IC0uNzVyZW07XG5cbiAgICAgICAgJjo6YWZ0ZXIgIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19yYWRpby1pbnB1dDpjaGVja2VkIH4gJl9fcmFkaW8tbGFiZWwgJl9fcmFkaW8tYnV0dG9uOmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG4iXX0= */", '', '']]

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