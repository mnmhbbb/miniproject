webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\Users\\User\\Desktop\\new\\dev\\miniland\\components\\PostCard.js",
    _this = undefined,
    _s = $RefreshSig$();







var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (store) {
    return store.post;
  }),
      loadPostLoading = _useSelector.loadPostLoading,
      removePostLoading = _useSelector.removePostLoading;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (store) {
    return store.user;
  }),
      me = _useSelector2.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var onClickLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!me) {
      return alert('로그인이 필요합니다!');
    }
  }, []);
  var onClickRemove = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        marginBottom: '1rem'
      },
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onClickLike
      }, "favorited", false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, _this), (me === null || me === void 0 ? void 0 : me.id) === post.user.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "danger",
            loading: removePostLoading,
            onClick: onClickRemove,
            children: "\uC0AD\uC81C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, _this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
        loading: loadPostLoading,
        avatar: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Meta, {
          avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
            children: post.user.nickname[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, _this),
          title: post.user.nickname,
          description: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(PostCard, "EdsJXuZJCVMUKu4LiJUN2ngJaeg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RvcmUiLCJsb2FkUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNsaWNrTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJvbkNsaWNrUmVtb3ZlIiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNrQkMsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUR3RCxDQUQ3QjtBQUFBLE1BQ3JCRyxlQURxQixnQkFDckJBLGVBRHFCO0FBQUEsTUFDSkMsaUJBREksZ0JBQ0pBLGlCQURJOztBQUFBLHNCQUlkSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUpHO0FBQUEsTUFJckJDLEVBSnFCLGlCQUlyQkEsRUFKcUI7O0FBSzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQyxRQUFJLENBQUNKLEVBQUwsRUFBUztBQUNQLGFBQU9LLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDRDtBQUNGLEdBSjhCLEVBSTVCLEVBSjRCLENBQS9CO0FBTUEsTUFBTUMsYUFBYSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDdENILFlBQVEsQ0FBQztBQUFFTSxVQUFJLEVBQUVDLGtFQUFSO0FBQTZCQyxVQUFJLEVBQUVmLElBQUksQ0FBQ2dCO0FBQXhDLEtBQUQsQ0FBUjtBQUNELEdBRmdDLEVBRTlCLEVBRjhCLENBQWpDO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BRFQ7QUFFRSxhQUFPLEVBQUUsY0FDUCxxRUFBQywrREFBRDtBQUErQixlQUFPLEVBQUVSO0FBQXhDLFNBQW1CLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxFQUVQLENBQUFILEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFVSxFQUFKLE1BQVdoQixJQUFJLENBQUNLLElBQUwsQ0FBVVcsRUFBckIsaUJBQ0UscUVBQUMsNENBQUQ7QUFFRSxlQUFPLGVBQ0wscUVBQUMsMkNBQUQsQ0FBUSxLQUFSO0FBQUEsaUNBQ0UscUVBQUMsMkNBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxtQkFBTyxFQUFFWixpQkFGWDtBQUdFLG1CQUFPLEVBQUVRLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUEsK0JBY0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGLFNBQ00sTUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEssQ0FGWDtBQUFBLDZCQXdCRSxxRUFBQyw2Q0FBRDtBQUFVLGVBQU8sRUFBRVQsZUFBbkI7QUFBb0MsY0FBTSxNQUExQztBQUFBLCtCQUNFLHFFQUFDLElBQUQ7QUFDRSxnQkFBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsc0JBQVNILElBQUksQ0FBQ0ssSUFBTCxDQUFVYSxRQUFWLENBQW1CLENBQW5CO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVjtBQUVFLGVBQUssRUFBRWxCLElBQUksQ0FBQ0ssSUFBTCxDQUFVYSxRQUZuQjtBQUdFLHFCQUFXLEVBQUVsQixJQUFJLENBQUNtQjtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBckREOztHQUFNcEIsUTtVQUMyQ0UsdUQsRUFHaENBLHVELEVBQ0VPLHVEOzs7S0FMYlQsUTtBQXVETkEsUUFBUSxDQUFDcUIsU0FBVCxHQUFxQjtBQUNuQnBCLE1BQUksRUFBRXFCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDcEJqQixRQUFJLEVBQUVnQixpREFBUyxDQUFDRSxNQURJO0FBRXBCSixXQUFPLEVBQUVFLGlEQUFTLENBQUNHO0FBRkMsR0FBaEI7QUFEYSxDQUFyQjtBQU1lekIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRlMTExMDA4M2Y3NTZhNDE2YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgU2tlbGV0b24sIEF2YXRhciwgUG9wb3ZlciwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVsbGlwc2lzT3V0bGluZWQsIEhlYXJ0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCB7IGxvYWRQb3N0TG9hZGluZywgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0b3JlKSA9PiBzdG9yZS5wb3N0XHJcbiAgKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RvcmUpID0+IHN0b3JlLnVzZXIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpCEnKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tSZW1vdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsIGRhdGE6IHBvc3QuaWQgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmRcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImZhdm9yaXRlZFwiIG9uQ2xpY2s9e29uQ2xpY2tMaWtlfSAvPixcclxuICAgICAgICAgIG1lPy5pZCA9PT0gcG9zdC51c2VyLmlkICYmIChcclxuICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrUmVtb3ZlfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2xvYWRQb3N0TG9hZGluZ30gYXZhdGFyPlxyXG4gICAgICAgICAgPE1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LnVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC51c2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=