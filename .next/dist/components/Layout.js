'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockChain Dev\\Campaign-kickstart\\components\\Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, { style: { width: '90vw' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', {
        async: true,
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUgsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLE1BQVQsRUFBVCxFQUE0QkMsVUFBVTtBQUM5QkMsc0JBQVVOLFlBRG9CO0FBRTlCTyx3QkFBWTtBQUZrQjtBQUF0QyxLQUZHLEVBT0gsZ0JBQU1MLGFBQU4saUJBRUk7QUFDSUcsa0JBQVU7QUFDTkMsc0JBQVVOLFlBREo7QUFFTk8sd0JBQVk7QUFGTjtBQURkLEtBRkosRUFRSSxnQkFBTUwsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUN4Qk0sZUFBTyxJQURpQjtBQUV4QkMsYUFBSyxZQUZtQjtBQUd4QkMsY0FBTSxrRUFIa0I7QUFJeEJMLGtCQUFVO0FBQ05DLHNCQUFVTixZQURKO0FBRU5PLHdCQUFZO0FBRk47QUFKYyxLQUE1QixDQVJKLENBUEcsRUF5QkgsZ0JBQU1MLGFBQU4sbUJBQTRCO0FBQ3hCRyxrQkFBVTtBQUNOQyxzQkFBVU4sWUFESjtBQUVOTyx3QkFBWTtBQUZOO0FBRGMsS0FBNUIsQ0F6QkcsRUErQkhOLE1BQU1VLFFBL0JILENBQVA7QUFpQ0gsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9qc3hGaWxlTmFtZSA9ICdEOlxcXFxibG9ja0NoYWluIERldlxcXFxDYW1wYWlnbi1raWNrc3RhcnRcXFxcY29tcG9uZW50c1xcXFxMYXlvdXQuanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dFxcXFxkaXN0XFxcXGxpYlxcXFxoZWFkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250YWluZXIsXG4gICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6ICc5MHZ3JyB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogOFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgSGVhZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnLCB7XG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi9kaXN0L3NlbWFudGljLm1pbi5jc3MnLFxuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xufSk7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJ3aWR0aCIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiYXN5bmMiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSwrREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUgsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLE1BQVQsRUFBVCxFQUE0QkMsVUFBVTtBQUM5QkMsc0JBQVVOLFlBRG9CO0FBRTlCTyx3QkFBWTtBQUZrQjtBQUF0QyxLQUZHLEVBT0gsZ0JBQU1MLGFBQU4saUJBRUk7QUFDSUcsa0JBQVU7QUFDTkMsc0JBQVVOLFlBREo7QUFFTk8sd0JBQVk7QUFGTjtBQURkLEtBRkosRUFRSSxnQkFBTUwsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUN4Qk0sZUFBTyxJQURpQjtBQUV4QkMsYUFBSyxZQUZtQjtBQUd4QkMsY0FBTSxrRUFIa0I7QUFJeEJMLGtCQUFVO0FBQ05DLHNCQUFVTixZQURKO0FBRU5PLHdCQUFZO0FBRk47QUFKYyxLQUE1QixDQVJKLENBUEcsRUF5QkgsZ0JBQU1MLGFBQU4sbUJBQTRCO0FBQ3hCRyxrQkFBVTtBQUNOQyxzQkFBVU4sWUFESjtBQUVOTyx3QkFBWTtBQUZOO0FBRGMsS0FBNUIsQ0F6QkcsRUErQkhOLE1BQU1VLFFBL0JILENBQVA7QUFpQ0gsQyIsImZpbGUiOiJ1bmtub3duIn0=