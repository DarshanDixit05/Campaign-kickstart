"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _factory = require("../ethereum/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _next = require("next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = "C:\\Users\\HP\\Desktop\\Campaign-kickstart\\pages\\index.js?entry";

Page.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
    var campaigns;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _factory2.default.methods.getDeployedCampaigns().call();

          case 2:
            campaigns = _context.sent;
            return _context.abrupt("return", { campaigns: campaigns });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

function campaignIndex(props) {
  console.log(props.campaigns);
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "index");
}

exports.default = campaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29tcGlsZWRGYWN0b3J5IiwiTmV4dFBhZ2VDb250ZXh0IiwiUGFnZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjYW1wYWlnbnMiLCJjYW1wYWlnbkluZGV4IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUyxBQUFXOzs7O0FBQzNCLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBUzs7Ozs7OztBQUVULEtBQUEsQUFBSyw4QkFBTDtzRkFBdUIsaUJBQUEsQUFBTyxLQUFQO1FBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDSyxrQkFBQSxBQUFnQixRQUFoQixBQUF3Qix1QkFEN0IsQUFDSyxBQUErQzs7ZUFBakU7QUFEYSxpQ0FBQTs2Q0FFWixFQUFDLFdBRlcsQUFFWjs7ZUFGWTtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs0QkFBQTtBQUFBOzs7QUFNQSxTQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFPLEFBQzdCO1VBQUEsQUFBUSxJQUFJLE1BQVosQUFBa0IsQUFDakI7eUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEdBQUEsRUFERixBQUNFLEFBRUg7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IUC9EZXNrdG9wL0NhbXBhaWduLWtpY2tzdGFydCJ9