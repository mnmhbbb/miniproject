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
        active: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RvcmUiLCJsb2FkUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0TG9hZGluZyIsInVzZXIiLCJtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNsaWNrTGlrZSIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJvbkNsaWNrUmVtb3ZlIiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFFUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHFCQUNrQkMsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUR3RCxDQUQ3QjtBQUFBLE1BQ3JCRyxlQURxQixnQkFDckJBLGVBRHFCO0FBQUEsTUFDSkMsaUJBREksZ0JBQ0pBLGlCQURJOztBQUFBLHNCQUlkSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUpHO0FBQUEsTUFJckJDLEVBSnFCLGlCQUlyQkEsRUFKcUI7O0FBSzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQyxRQUFJLENBQUNKLEVBQUwsRUFBUztBQUNQLGFBQU9LLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDRDtBQUNGLEdBSjhCLEVBSTVCLEVBSjRCLENBQS9CO0FBTUEsTUFBTUMsYUFBYSxHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDdENILFlBQVEsQ0FBQztBQUFFTSxVQUFJLEVBQUVDLGtFQUFSO0FBQTZCQyxVQUFJLEVBQUVmLElBQUksQ0FBQ2dCO0FBQXhDLEtBQUQsQ0FBUjtBQUNELEdBRmdDLEVBRTlCLEVBRjhCLENBQWpDO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BRFQ7QUFFRSxhQUFPLEVBQUUsY0FDUCxxRUFBQywrREFBRDtBQUErQixlQUFPLEVBQUVSO0FBQXhDLFNBQW1CLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETyxFQUVQLENBQUFILEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFVSxFQUFKLE1BQVdoQixJQUFJLENBQUNLLElBQUwsQ0FBVVcsRUFBckIsaUJBQ0UscUVBQUMsNENBQUQ7QUFFRSxlQUFPLGVBQ0wscUVBQUMsMkNBQUQsQ0FBUSxLQUFSO0FBQUEsaUNBQ0UscUVBQUMsMkNBQUQ7QUFDRSxnQkFBSSxFQUFDLFFBRFA7QUFFRSxtQkFBTyxFQUFFWixpQkFGWDtBQUdFLG1CQUFPLEVBQUVRLGFBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUEsK0JBY0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGLFNBQ00sTUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEssQ0FGWDtBQUFBLDZCQXdCRSxxRUFBQyw2Q0FBRDtBQUFVLGVBQU8sRUFBRVQsZUFBbkI7QUFBb0MsY0FBTSxNQUExQztBQUEyQyxjQUFNLE1BQWpEO0FBQUEsK0JBQ0UscUVBQUMsSUFBRDtBQUNFLGdCQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBQSxzQkFBU0gsSUFBSSxDQUFDSyxJQUFMLENBQVVhLFFBQVYsQ0FBbUIsQ0FBbkI7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURWO0FBRUUsZUFBSyxFQUFFbEIsSUFBSSxDQUFDSyxJQUFMLENBQVVhLFFBRm5CO0FBR0UscUJBQVcsRUFBRWxCLElBQUksQ0FBQ21CO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0FyREQ7O0dBQU1wQixRO1VBQzJDRSx1RCxFQUdoQ0EsdUQsRUFDRU8sdUQ7OztLQUxiVCxRO0FBdUROQSxRQUFRLENBQUNxQixTQUFULEdBQXFCO0FBQ25CcEIsTUFBSSxFQUFFcUIsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNwQmpCLFFBQUksRUFBRWdCLGlEQUFTLENBQUNFLE1BREk7QUFFcEJKLFdBQU8sRUFBRUUsaURBQVMsQ0FBQ0c7QUFGQyxHQUFoQjtBQURhLENBQXJCO0FBTWV6Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lYzVkNWY0YzFmNDk3Y2VlMDUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBTa2VsZXRvbiwgQXZhdGFyLCBQb3BvdmVyLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbG9hZFBvc3RMb2FkaW5nLCByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RvcmUpID0+IHN0b3JlLnBvc3RcclxuICApO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdG9yZSkgPT4gc3RvcmUudXNlcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghbWUpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukIScpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlbW92ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCwgZGF0YTogcG9zdC5pZCB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzFyZW0nIH19XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiZmF2b3JpdGVkXCIgb25DbGljaz17b25DbGlja0xpa2V9IC8+LFxyXG4gICAgICAgICAgbWU/LmlkID09PSBwb3N0LnVzZXIuaWQgJiYgKFxyXG4gICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17bG9hZFBvc3RMb2FkaW5nfSBhdmF0YXIgYWN0aXZlPlxyXG4gICAgICAgICAgPE1ldGFcclxuICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LnVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICB0aXRsZT17cG9zdC51c2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=