/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();
var envConfig = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/blogApi'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (envConfig);

/***/ }),

/***/ "./controllers/authController.js":
/*!***************************************!*\
  !*** ./controllers/authController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authController": () => (/* binding */ authController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");




var authController = function controllers() {
  return {
    signup: function signup(req, res) {
      var userinfo = {
        _id: req.user._id,
        email: req.user.email,
        last_name: req.user.last_name,
        first_name: req.user.first_name
      };
      var token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(userinfo, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      return res.status(201).json({
        loggedIn: true,
        profile: userinfo,
        token: token
      });
    },
    login: function login(req, res, _ref) {
      var err = _ref.err,
        user = _ref.user,
        info = _ref.info;
      if (err) {
        _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(err);
        return res.status(500).json(err);
      }
      req.login(user, {
        session: true
      }, /*#__PURE__*/function () {
        var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(err) {
          var userinfo, token;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!err) {
                  _context.next = 3;
                  break;
                }
                log(err);
                return _context.abrupt("return", res.status(500).json(err));
              case 3:
                userinfo = {
                  _id: req.user._id,
                  email: user.email,
                  last_name: user.last_name,
                  first_name: user.first_name
                };
                token = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign)(userinfo, process.env.JWT_SECRET, {
                  expiresIn: '1h'
                });
                return _context.abrupt("return", res.status(200).json({
                  loggedIn: true,
                  profile: userinfo,
                  token: token
                }));
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  };
}();

/***/ }),

/***/ "./controllers/authorController.js":
/*!*****************************************!*\
  !*** ./controllers/authorController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorController": () => (/* binding */ authorController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var paginate_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paginate-middleware */ "paginate-middleware");
/* harmony import */ var paginate_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paginate_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");
/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Blog */ "./models/Blog.js");
/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_Blog__WEBPACK_IMPORTED_MODULE_4__);





var authorController = function controller() {
  return {
    getAuthorBlogs: function () {
      var _getAuthorBlogs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
        var _req$query, _req$query$page, page, _req$query$limit, limit, queryBy, blogs, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!(req.user._id === req.params.authorId)) {
                _context.next = 12;
                break;
              }
              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit;
              queryBy = {
                authorId: req.user._id
              };
              if (req.query.state) {
                queryBy.state = req.query.state;
              }
              _context.next = 7;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_4___default().find(queryBy);
            case 7:
              blogs = _context.sent;
              result = paginate_middleware__WEBPACK_IMPORTED_MODULE_2___default()(blogs, +page, +limit);
              return _context.abrupt("return", res.status(200).json(result));
            case 12:
              return _context.abrupt("return", res.status(403).json({
                message: 'Can only view your own list of published and draft blogs'
              }));
            case 13:
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(_context.t0);
              return _context.abrupt("return", res.status(500).json(_context.t0));
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 15]]);
      }));
      function getAuthorBlogs(_x, _x2) {
        return _getAuthorBlogs.apply(this, arguments);
      }
      return getAuthorBlogs;
    }(),
    getAuthorBlog: function () {
      var _getAuthorBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {
        var _req$params, authorId, blogId, blog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _req$params = req.params, authorId = _req$params.authorId, blogId = _req$params.blogId;
              _context2.prev = 1;
              if (!(authorId === req.user._id)) {
                _context2.next = 9;
                break;
              }
              _context2.next = 5;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_4___default().findOne({
                _id: blogId,
                authorId: authorId
              });
            case 5:
              blog = _context2.sent;
              if (blog) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt("return", res.status(404).json({
                message: 'Blog not found.'
              }));
            case 8:
              return _context2.abrupt("return", res.status(200).json(blog));
            case 9:
              _context2.next = 15;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(_context2.t0);
              return _context2.abrupt("return", res.status(500).json(_context2.t0));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 11]]);
      }));
      function getAuthorBlog(_x3, _x4) {
        return _getAuthorBlog.apply(this, arguments);
      }
      return getAuthorBlog;
    }()
  };
}();

/***/ }),

/***/ "./controllers/blogController.js":
/*!***************************************!*\
  !*** ./controllers/blogController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogController": () => (/* binding */ blogController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var paginate_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paginate-middleware */ "paginate-middleware");
/* harmony import */ var paginate_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paginate_middleware__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Blog */ "./models/Blog.js");
/* harmony import */ var _models_Blog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Blog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/User */ "./models/User.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var blogController = function () {
  return {
    getAllPublishedBlogs: function () {
      var _getAllPublishedBlogs = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
        var _req$query, _req$query$page, page, _req$query$limit, limit, author, title, tags, _req$query$order_by, order_by, _req$query$order, order, queryBy, sortQuery, sortAtributes, _iterator, _step, sortAttribute, blogs, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit, author = _req$query.author, title = _req$query.title, tags = _req$query.tags, _req$query$order_by = _req$query.order_by, order_by = _req$query$order_by === void 0 ? 'created_at' : _req$query$order_by, _req$query$order = _req$query.order, order = _req$query$order === void 0 ? 'asc' : _req$query$order;
              queryBy = {
                state: 'published'
              };
              if (author) {
                queryBy.author = author;
              }
              if (title) {
                queryBy.title = title;
              }
              if (tags) {
                queryBy.tags = {
                  $regex: tags
                };
              }
              sortQuery = {};
              sortAtributes = order_by.split(',');
              _iterator = _createForOfIteratorHelper(sortAtributes);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  sortAttribute = _step.value;
                  if (order === 'asc') {
                    sortQuery[sortAttribute] = 1;
                  }
                  if (order === 'desc') {
                    sortQuery[sortAttribute] = -1;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _context.next = 12;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().find(queryBy).sort(sortQuery);
            case 12:
              blogs = _context.sent;
              result = paginate_middleware__WEBPACK_IMPORTED_MODULE_2___default()(blogs, +page, +limit);
              return _context.abrupt("return", res.status(200).json(result));
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context.t0);
              return _context.abrupt("return", res.status(500).json(_context.t0));
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 17]]);
      }));
      function getAllPublishedBlogs(_x, _x2) {
        return _getAllPublishedBlogs.apply(this, arguments);
      }
      return getAllPublishedBlogs;
    }(),
    postBlog: function () {
      var _postBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {
        var _req$body, title, description, tags, body, newBlog;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, title = _req$body.title, description = _req$body.description, tags = _req$body.tags, body = _req$body.body;
              _context2.next = 4;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().create({
                title: title,
                description: description,
                author: req.body.author || req.user.first_name + ' ' + req.user.last_name,
                authorId: req.user._id,
                reading_time: "\n            ".concat(Math.ceil(body.length / 265) > 1 ? Math.ceil(body.length / 265) + 'Mins' : Math.ceil(body.length / 265) + 'Min'),
                tags: tags,
                body: body
              });
            case 4:
              newBlog = _context2.sent;
              return _context2.abrupt("return", res.status(201).json(newBlog));
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context2.t0);
              return _context2.abrupt("return", res.status(500).json(_context2.t0));
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }));
      function postBlog(_x3, _x4) {
        return _postBlog.apply(this, arguments);
      }
      return postBlog;
    }(),
    getSingleBlog: function () {
      var _getSingleBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {
        var blogId, foundBlog, authorInfo, blogWithAuthorInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              blogId = req.params.blogId;
              _context3.next = 4;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().findOne({
                _id: blogId,
                state: 'published'
              });
            case 4:
              foundBlog = _context3.sent;
              if (foundBlog) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", res.status(404).json({
                message: 'Blog not found.'
              }));
            case 7:
              foundBlog.read_count += 1;
              _context3.next = 10;
              return foundBlog.save();
            case 10:
              _context3.next = 12;
              return _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findById(foundBlog.authorId);
            case 12:
              authorInfo = _context3.sent;
              authorInfo = authorInfo.toJSON();
              delete authorInfo.password;
              blogWithAuthorInfo = foundBlog.toJSON();
              blogWithAuthorInfo.infos = {};
              blogWithAuthorInfo.infos.author = authorInfo;
              return _context3.abrupt("return", res.status(200).json(blogWithAuthorInfo));
            case 21:
              _context3.prev = 21;
              _context3.t0 = _context3["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context3.t0);
              return _context3.abrupt("return", res.status(500).json(_context3.t0));
            case 25:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 21]]);
      }));
      function getSingleBlog(_x5, _x6) {
        return _getSingleBlog.apply(this, arguments);
      }
      return getSingleBlog;
    }(),
    updateBlog: function () {
      var _updateBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {
        var blogId, blog, updateInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              blogId = req.params.blogId;
              _context4.next = 4;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().findById(blogId);
            case 4:
              blog = _context4.sent;
              if (!(blog.authorId === req.user._id)) {
                _context4.next = 12;
                break;
              }
              _context4.next = 8;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().updateOne({
                _id: blogId
              }, req.body);
            case 8:
              updateInfo = _context4.sent;
              return _context4.abrupt("return", res.status(200).json({
                updateInfo: updateInfo,
                message: 'Blog updated successfully.'
              }));
            case 12:
              return _context4.abrupt("return", res.status(403).json({
                message: 'You can only update your blog.'
              }));
            case 13:
              _context4.next = 19;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context4.t0);
              return _context4.abrupt("return", res.status(500).json(_context4.t0));
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 15]]);
      }));
      function updateBlog(_x7, _x8) {
        return _updateBlog.apply(this, arguments);
      }
      return updateBlog;
    }(),
    deleteBlog: function () {
      var _deleteBlog = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(req, res) {
        var blogId, blog, deleteInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              blogId = req.params.blogId;
              _context5.next = 4;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().findById(blogId);
            case 4:
              blog = _context5.sent;
              if (!(blog.authorId === req.user._id)) {
                _context5.next = 12;
                break;
              }
              _context5.next = 8;
              return _models_Blog__WEBPACK_IMPORTED_MODULE_3___default().deleteOne({
                _id: blogId
              });
            case 8:
              deleteInfo = _context5.sent;
              return _context5.abrupt("return", res.status(200).json({
                deleteInfo: deleteInfo,
                message: 'Blog Deleted successfully.'
              }));
            case 12:
              return _context5.abrupt("return", res.status(403).json({
                message: 'You can only delete your blog.'
              }));
            case 13:
              _context5.next = 19;
              break;
            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context5.t0);
              return _context5.abrupt("return", res.status(500).json(_context5.t0));
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 15]]);
      }));
      function deleteBlog(_x9, _x10) {
        return _deleteBlog.apply(this, arguments);
      }
      return deleteBlog;
    }()
  };
}();

/***/ }),

/***/ "./database/index.js":
/*!***************************!*\
  !*** ./database/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(mongooseUrl) {
    var connectionString;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(mongooseUrl || 'mongodb://localhost:27017');
        case 3:
          connectionString = _context.sent;
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info('  Database connection was successfully established');
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./helpers/createStore.js":
/*!********************************!*\
  !*** ./helpers/createStore.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverCreateStoreKit": () => (/* binding */ serverCreateStoreKit)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "../../../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux */ "./redux/index.js");




var middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];
var serverCreateStoreKit = function serverCreateStoreKit() {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux__WEBPACK_IMPORTED_MODULE_3__.reducers, redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, middlewares));
};

/***/ }),

/***/ "./helpers/renderer.js":
/*!*****************************!*\
  !*** ./helpers/renderer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/Routes */ "./views/Routes.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");








var renderer = function renderer(req, store, context) {
  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(_views_Routes__WEBPACK_IMPORTED_MODULE_6__.Routes)))));
  return "\n  <!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" href=\"/styles.css\">\n\n  </head>\n  <body>\n    <div id=\"root\">".concat(content, "</div>\n\n\n    \n    <script>\n   window.INITIAL_STATE = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(store.getState()), "\n</script>\n    <script src=\"/viewsBundle.js\"></script>\n  </body>\n</html>\n");
};

/***/ }),

/***/ "./logger/httpLogger.js":
/*!******************************!*\
  !*** ./logger/httpLogger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var morgan_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan-json */ "morgan-json");
/* harmony import */ var morgan_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./logger/logger.js");



var format = morgan_json__WEBPACK_IMPORTED_MODULE_1___default()({
  method: ':method',
  url: ':url',
  status: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time'
});
var httpLogger = morgan__WEBPACK_IMPORTED_MODULE_0___default()(format, {
  stream: {
    write: function write(message) {
      var _JSON$parse = JSON.parse(message),
        method = _JSON$parse.method,
        url = _JSON$parse.url,
        status = _JSON$parse.status,
        contentLength = _JSON$parse.contentLength,
        responseTime = _JSON$parse.responseTime;
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info('HTTP Access Log', {
        timestamp: new Date().toString(),
        method: method,
        url: url,
        status: Number(status),
        contentLength: contentLength,
        responseTime: Number(responseTime)
      });
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (httpLogger);

/***/ }),

/***/ "./logger/logger.js":
/*!**************************!*\
  !*** ./logger/logger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

var options = {
  file: {
    level: 'info',
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    maxSize: 5242880,
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};
var logger = winston__WEBPACK_IMPORTED_MODULE_0___default().createLogger({
  levels: (winston__WEBPACK_IMPORTED_MODULE_0___default().config.npm.levels),
  transports: [new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.File)(options.file), new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.Console)(options.console)],
  exitOnError: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ "./models/Blog.js":
/*!************************!*\
  !*** ./models/Blog.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _require = __webpack_require__(/*! mongoose */ "mongoose"),
  Schema = _require.Schema,
  model = _require.model;
var blogSchema = new Schema({
  title: {
    type: String,
    unique: true,
    requred: true
  },
  description: String,
  author: String,
  authorId: String,
  state: {
    type: String,
    "default": 'draft',
    "enum": ['published', 'draft']
  },
  tags: {
    type: String,
    "default": ''
  },
  read_count: {
    type: Number,
    "default": 0
  },
  reading_time: String,
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = model('Blog', blogSchema);

/***/ }),

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var _require = __webpack_require__(/*! mongoose */ "mongoose"),
  Schema = _require.Schema,
  model = _require.model;
var _require2 = __webpack_require__(/*! bcrypt */ "bcrypt"),
  hash = _require2.hash,
  compare = _require2.compare;
var userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
userSchema.pre('save', /*#__PURE__*/function () {
  var _hashPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(next) {
    var hashedPassword;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return hash(this.password, 10);
        case 2:
          hashedPassword = _context.sent;
          this.password = hashedPassword;
          next();
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  function hashPassword(_x) {
    return _hashPassword.apply(this, arguments);
  }
  return hashPassword;
}());
userSchema.methods.verifyPassword = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(password) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return compare(password, this.password);
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  }));
  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model('User', userSchema));

/***/ }),

/***/ "./passport/index.js":
/*!***************************!*\
  !*** ./passport/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passportConfig": () => (/* binding */ passportConfig)
/* harmony export */ });
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strategies_localStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/localStrategy */ "./passport/strategies/localStrategy.js");
/* harmony import */ var _strategies_jwtStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/jwtStrategy */ "./passport/strategies/jwtStrategy.js");



var passportConfig = function passportConfig(app) {
  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize());
  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().session());
  (0,_strategies_localStrategy__WEBPACK_IMPORTED_MODULE_1__.localStrategy)();
  (0,_strategies_jwtStrategy__WEBPACK_IMPORTED_MODULE_2__.jwtStrategy)();
  passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser(function (user, done) {
    process.nextTick(function () {
      return done(null, user);
    });
  });
  passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser(function (user, done) {
    process.nextTick(function () {
      return done(null, user);
    });
  });
};

/***/ }),

/***/ "./passport/strategies/jwtStrategy.js":
/*!********************************************!*\
  !*** ./passport/strategies/jwtStrategy.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jwtStrategy": () => (/* binding */ jwtStrategy)
/* harmony export */ });
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger/logger */ "./logger/logger.js");



var jwtStrategy = function jwtStrategy() {
  var options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_0__.ExtractJwt.fromUrlQueryParameter('blog_token')
  };
  passport__WEBPACK_IMPORTED_MODULE_1___default().use(new passport_jwt__WEBPACK_IMPORTED_MODULE_0__.Strategy(options, function (token, done) {
    try {
      _logger_logger__WEBPACK_IMPORTED_MODULE_2__["default"].info('JWT STRATEGY: ', token);
      return done(null, token);
    } catch (err) {
      _logger_logger__WEBPACK_IMPORTED_MODULE_2__["default"].info('JWT Error: => ', err);
      return done(err);
    }
  }));
};

/***/ }),

/***/ "./passport/strategies/localStrategy.js":
/*!**********************************************!*\
  !*** ./passport/strategies/localStrategy.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStrategy": () => (/* binding */ localStrategy)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/User */ "./models/User.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../logger/logger */ "./logger/logger.js");






var localStrategy = function localStrategy() {
  passport__WEBPACK_IMPORTED_MODULE_2___default().use('login', new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(email, password, done) {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
              email: email
            });
          case 3:
            user = _context.sent;
            if (user) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", done(null, false, {
              message: 'User Not Found!'
            }));
          case 6:
            if (user.verifyPassword(password)) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", done(null, false, {
              message: 'Incorrect Password'
            }));
          case 8:
            return _context.abrupt("return", done(null, user, {
              message: 'User Logged in successfully.'
            }));
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", done(_context.t0));
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));
  passport__WEBPACK_IMPORTED_MODULE_2___default().use('signup', new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy({
    usernameField: 'email',
    passReqToCallback: true
  }, /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, email, password, done) {
      var _req$body, first_name, last_name, emailTest, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name;
            emailTest = /(\w+)\@(\w+)\.[a-zA-Z]/g;
            if (emailTest.test(email)) {
              _context2.next = 5;
              break;
            }
            throw new Error('Please enter a valid email address.');
          case 5:
            _context2.next = 7;
            return _models_User__WEBPACK_IMPORTED_MODULE_4__["default"].create({
              email: email.toLowerCase(),
              first_name: first_name,
              last_name: last_name,
              password: password
            });
          case 7:
            user = _context2.sent;
            done(null, user);
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            _logger_logger__WEBPACK_IMPORTED_MODULE_5__["default"].info(_context2.t0);
            done(_context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function (_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }()));
};

/***/ }),

/***/ "./redux/actions/blogs.js":
/*!********************************!*\
  !*** ./redux/actions/blogs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllBlogs": () => (/* binding */ getAllBlogs),
/* harmony export */   "getSingleBlog": () => (/* binding */ getSingleBlog),
/* harmony export */   "postABlog": () => (/* binding */ postABlog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contants_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/blogs */ "./redux/contants/blogs.js");




var getAllBlogsActionCreator = function getAllBlogsActionCreator(payload) {
  return {
    type: _contants_blogs__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_BLOGS,
    payload: payload
  };
};
var postABlogActionCreator = function postABlogActionCreator(payload) {
  return {
    type: _contants_blogs__WEBPACK_IMPORTED_MODULE_3__.POST_A_BLOG,
    payload: payload
  };
};
var getSingleBlogActionCreator = function getSingleBlogActionCreator(payload) {
  return {
    type: _contants_blogs__WEBPACK_IMPORTED_MODULE_3__.GET_SINGLE_BLOG,
    payload: payload
  };
};
var getAllBlogs = function getAllBlogs() {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$axios$get, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:4040/api/blogs');
          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            dispatch(getAllBlogsActionCreator(data.results));
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var postABlog = function postABlog(blogDetails, token) {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var _yield$axios$post, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:4040/api/blogs/?blog_token=".concat(token), blogDetails);
          case 3:
            _yield$axios$post = _context2.sent;
            data = _yield$axios$post.data;
            dispatch(postABlogActionCreator(data));
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getSingleBlog = function getSingleBlog(blogId) {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      var _yield$axios$get2, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://localhost:4040/api/blogs/".concat(blogId));
          case 3:
            _yield$axios$get2 = _context3.sent;
            data = _yield$axios$get2.data;
            dispatch(getSingleBlogActionCreator(data));
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginUser": () => (/* binding */ loginUser),
/* harmony export */   "signupUser": () => (/* binding */ signupUser)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contants_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/user */ "./redux/contants/user.js");




var signupActionCreator = function signupActionCreator(payload) {
  return {
    type: _contants_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_USER,
    payload: payload
  };
};
var loginUserActionCreator = function loginUserActionCreator(payload) {
  return {
    type: _contants_user__WEBPACK_IMPORTED_MODULE_3__.LOGIN_USER,
    payload: payload
  };
};
var signupUser = function signupUser(userData) {
  return /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$axios$post, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:4040/api/auth/signup', userData);
          case 3:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            dispatch(signupActionCreator(data));
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var loginUser = function loginUser(userData) {
  return /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var _yield$axios$post2, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:4040/api/auth/login', userData);
          case 3:
            _yield$axios$post2 = _context2.sent;
            data = _yield$axios$post2.data;
            console.log('Login User Action: ', data);
            dispatch(loginUserActionCreator(data));
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./redux/contants/blogs.js":
/*!*********************************!*\
  !*** ./redux/contants/blogs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_BLOGS": () => (/* binding */ GET_ALL_BLOGS),
/* harmony export */   "GET_SINGLE_BLOG": () => (/* binding */ GET_SINGLE_BLOG),
/* harmony export */   "POST_A_BLOG": () => (/* binding */ POST_A_BLOG)
/* harmony export */ });
var GET_ALL_BLOGS = 'GET_ALL_BLOGS';
var GET_SINGLE_BLOG = 'GET_SINGLE_BLOG';
var POST_A_BLOG = 'POST_A_BLOG';

/***/ }),

/***/ "./redux/contants/user.js":
/*!********************************!*\
  !*** ./redux/contants/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_USER": () => (/* binding */ LOGIN_USER),
/* harmony export */   "SIGN_UP_USER": () => (/* binding */ SIGN_UP_USER)
/* harmony export */ });
var SIGN_UP_USER = 'SIGN_UP_USER';
var LOGIN_USER = 'LOGIN_USER';

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistedReducer": () => (/* binding */ persistedReducer),
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "viewsCreateStoreKit": () => (/* binding */ viewsCreateStoreKit)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "../../../node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage/createWebStorage */ "redux-persist/lib/storage/createWebStorage");
/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_blogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/blogs */ "./redux/reducers/blogs.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/user */ "./redux/reducers/user.js");







var middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];
var createNoopStorage = function createNoopStorage() {
  return {
    getItem: function getItem(_key) {
      return Promise.resolve(null);
    },
    setItem: function setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem: function removeItem(_key) {
      return Promise.resolve();
    }
  };
};
var storage = typeof window !== 'undefined' ? redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_4___default()('local') : createNoopStorage();
var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blogs: _reducers_blogs__WEBPACK_IMPORTED_MODULE_5__.blogs,
  blog: _reducers_blogs__WEBPACK_IMPORTED_MODULE_5__.blog,
  user: _reducers_user__WEBPACK_IMPORTED_MODULE_6__.user
});
var persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'] // which reducer want to store
};

var persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, reducers);
var viewsCreateStoreKit = function viewsCreateStoreKit(INITIAL_STATE) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, INITIAL_STATE, redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, middlewares));
};

/***/ }),

/***/ "./redux/reducers/blogs.js":
/*!*********************************!*\
  !*** ./redux/reducers/blogs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blog": () => (/* binding */ blog),
/* harmony export */   "blogs": () => (/* binding */ blogs)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contants_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contants/blogs */ "./redux/contants/blogs.js");


var blogs = function blogs() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _contants_blogs__WEBPACK_IMPORTED_MODULE_1__.GET_ALL_BLOGS:
      return action.payload;
    case _contants_blogs__WEBPACK_IMPORTED_MODULE_1__.POST_A_BLOG:
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.payload]);
    default:
      return state;
  }
};
var blog = function blog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _contants_blogs__WEBPACK_IMPORTED_MODULE_1__.GET_SINGLE_BLOG:
      return action.payload;
    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/user.js":
/*!********************************!*\
  !*** ./redux/reducers/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user": () => (/* binding */ user)
/* harmony export */ });
/* harmony import */ var _contants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/user */ "./redux/contants/user.js");

var user = function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _contants_user__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP_USER:
      return action.payload;
    case _contants_user__WEBPACK_IMPORTED_MODULE_0__.LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};

/***/ }),

/***/ "./routes/authRoutes.js":
/*!******************************!*\
  !*** ./routes/authRoutes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authRoutes": () => (/* binding */ authRoutes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _controllers_authController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllers/authController */ "./controllers/authController.js");
/* harmony import */ var _validators_userValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validators/userValidator */ "./validators/userValidator.js");







var signup = _controllers_authController__WEBPACK_IMPORTED_MODULE_6__.authController.signup,
  login = _controllers_authController__WEBPACK_IMPORTED_MODULE_6__.authController.login;

var authRoutes = function authRoutes() {
  var authRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();
  authRouter.route('/signup').post(_validators_userValidator__WEBPACK_IMPORTED_MODULE_7__.userValidator, passport__WEBPACK_IMPORTED_MODULE_3___default().authenticate('signup', {
    session: false
  }), signup);
  authRouter.route('/login').post( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", passport__WEBPACK_IMPORTED_MODULE_3___default().authenticate('login', function (err, user, info) {
              login(req, res, {
                err: err,
                user: user,
                info: info
              });
            })(req, res));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }());
  return authRouter;
};

/***/ }),

/***/ "./routes/authorRoutes.js":
/*!********************************!*\
  !*** ./routes/authorRoutes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorRoutes": () => (/* binding */ authorRoutes)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_authorController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/authorController */ "./controllers/authorController.js");


// import User from '../models/User';


var getAuthorBlogs = _controllers_authorController__WEBPACK_IMPORTED_MODULE_2__.authorController.getAuthorBlogs,
  getAuthorBlog = _controllers_authorController__WEBPACK_IMPORTED_MODULE_2__.authorController.getAuthorBlog;
var authorRoutes = function authorRoutes() {
  var authorRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
  authorRouter.route('/:authorId/blogs').get(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
    session: false
  }), getAuthorBlogs);
  authorRouter.route('/:authorId/blogs/:blogId').get(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
    session: false
  }), getAuthorBlog);
  return authorRouter;
};

/***/ }),

/***/ "./routes/blogRoutes.js":
/*!******************************!*\
  !*** ./routes/blogRoutes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogRoutes": () => (/* binding */ blogRoutes)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/blogController */ "./controllers/blogController.js");
/* harmony import */ var _validators_blogValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/blogValidator */ "./validators/blogValidator.js");




var getAllPublishedBlogs = _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__.blogController.getAllPublishedBlogs,
  postBlog = _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__.blogController.postBlog,
  getSingleBlog = _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__.blogController.getSingleBlog,
  updateBlog = _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__.blogController.updateBlog,
  deleteBlog = _controllers_blogController__WEBPACK_IMPORTED_MODULE_2__.blogController.deleteBlog;
var blogRoutes = function blogRoutes() {
  var blogRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
  blogRouter.route('/').get(getAllPublishedBlogs).post(_validators_blogValidator__WEBPACK_IMPORTED_MODULE_3__.blogValidator, passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
    session: false
  }), postBlog);
  blogRouter.route('/:blogId').get(getSingleBlog).patch(passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
    session: false
  }), updateBlog)["delete"](passport__WEBPACK_IMPORTED_MODULE_1___default().authenticate('jwt', {
    session: false
  }), deleteBlog);
  return blogRouter;
};

/***/ }),

/***/ "./validators/blogValidator.js":
/*!*************************************!*\
  !*** ./validators/blogValidator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogValidator": () => (/* binding */ blogValidator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");




var blogValidatorObject = joi__WEBPACK_IMPORTED_MODULE_2___default().object({
  title: joi__WEBPACK_IMPORTED_MODULE_2___default().string().min(5).max(255).required(),
  description: joi__WEBPACK_IMPORTED_MODULE_2___default().string(),
  author: joi__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),
  authorId: joi__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),
  state: joi__WEBPACK_IMPORTED_MODULE_2___default().string()["default"]('draft'),
  tags: joi__WEBPACK_IMPORTED_MODULE_2___default().string()["default"](''),
  read_count: joi__WEBPACK_IMPORTED_MODULE_2___default().number()["default"](0),
  reading_time: joi__WEBPACK_IMPORTED_MODULE_2___default().string(),
  body: joi__WEBPACK_IMPORTED_MODULE_2___default().string().required()
});
var blogValidator = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {
    var value;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return blogValidatorObject.validateAsync(req.body);
        case 3:
          value = _context.sent;
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(value);
          next();
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].error(_context.t0);
          next(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function blogValidator(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./validators/userValidator.js":
/*!*************************************!*\
  !*** ./validators/userValidator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userValidator": () => (/* binding */ userValidator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ "joi");
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger/logger */ "./logger/logger.js");




var userValidatorObject = joi__WEBPACK_IMPORTED_MODULE_2___default().object({
  first_name: joi__WEBPACK_IMPORTED_MODULE_2___default().string().min(2).required(),
  last_name: joi__WEBPACK_IMPORTED_MODULE_2___default().string().min(2).required(),
  email: joi__WEBPACK_IMPORTED_MODULE_2___default().string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'org']
    }
  }),
  password: joi__WEBPACK_IMPORTED_MODULE_2___default().string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});
var userValidator = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {
    var value;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return userValidatorObject.validateAsync(req.body);
        case 3:
          value = _context.sent;
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(value);
          next();
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _logger_logger__WEBPACK_IMPORTED_MODULE_3__["default"].info(_context.t0);
          next(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function userValidator(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./views/App.js":
/*!**********************!*\
  !*** ./views/App.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/Header */ "./views/partials/Header.js");
/* harmony import */ var _partials_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/Footer */ "./views/partials/Footer.js");




var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_partials_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: App
});

/***/ }),

/***/ "./views/Blog.js":
/*!***********************!*\
  !*** ./views/Blog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/blogs */ "./redux/actions/blogs.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils */ "./views/common/utils.js");





function Blog() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    blogId = _useParams.blogId;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__.getSingleBlog)(blogId));
  }, []);
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state;
    }),
    blog = _useSelector.blog;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "blog-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "meta-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(blog.createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, blog.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, blog.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, blog.body));
}
function loadData(store, blogId) {
  //   console.log('Blog Component Id: ', blogId);
  store.dispatch((0,_redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__.getSingleBlog)(blogId));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: Blog,
  loadData: loadData
});

/***/ }),

/***/ "./views/Blogs.js":
/*!************************!*\
  !*** ./views/Blogs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/blogs */ "./redux/actions/blogs.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils */ "./views/common/utils.js");





function Blogs() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__.getAllBlogs)());
  }, []);
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state;
    }),
    blogs = _useSelector.blogs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "blogs-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "All Published Blogs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, blogs.map(function (blog) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: blog._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, blog.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "meta-details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.formatDate)(blog.createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, blog.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, blog.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/pages/blogs/".concat(blog._id)
    }, "Read More..."));
  })));
}
function loadData(store) {
  store.dispatch((0,_redux_actions_blogs__WEBPACK_IMPORTED_MODULE_3__.getAllBlogs)());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: Blogs,
  loadData: loadData
});

/***/ }),

/***/ "./views/Login.js":
/*!************************!*\
  !*** ./views/Login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      email: '',
      password: ''
    }),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUser(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__.loginUser)(user));
    setUser({
      email: '',
      password: ''
    });
    history.push('/');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "auth-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Login To Start Posting Blogs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "email",
    type: "email",
    placeholder: "Enter your email address",
    name: "email",
    value: user.email,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    value: user.password,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Login")));
}
function loadData() {
  console.log('Hello From The Login Page');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: Login,
  loadData: loadData
});

/***/ }),

/***/ "./views/NewBlog.js":
/*!**************************!*\
  !*** ./views/NewBlog.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/blogs */ "./redux/actions/blogs.js");
/* harmony import */ var _common_RequireAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/RequireAuth */ "./views/common/RequireAuth.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var NewBlog = function NewBlog(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  //   const { user } = useSelector((state) => state);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      title: '',
      description: '',
      tags: '',
      body: '',
      author: ''
    }),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    newBlog = _useState2[0],
    setNewBlog = _useState2[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setNewBlog(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,_redux_actions_blogs__WEBPACK_IMPORTED_MODULE_4__.postABlog)(newBlog, props.token));
    setNewBlog({
      title: '',
      description: '',
      tags: '',
      body: '',
      author: ''
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "newblog-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Post A New Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    placeholder: "Enter Blog Title",
    name: "title",
    required: true,
    value: newBlog.title,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    placeholder: "Enter Blog Description",
    name: "description",
    required: true,
    value: newBlog.description,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    placeholder: "Enter The Name Of The Author If Not You",
    name: "author",
    value: newBlog.author,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    placeholder: "Enter A Comma Separated Blog Tags If Any",
    name: "tags",
    value: newBlog.tags,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "textarea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("textarea", {
    placeholder: "Blog Entries here",
    name: "body",
    required: true,
    value: newBlog.body,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Add Blog")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: (0,_common_RequireAuth__WEBPACK_IMPORTED_MODULE_5__["default"])(NewBlog)
});

/***/ }),

/***/ "./views/NotFound.js":
/*!***************************!*\
  !*** ./views/NotFound.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
    staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;
  staticContext.notFound = true;
  console.log("Not found page: ".concat(JSON.stringify(staticContext)));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "notFound-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Sorry, page not found."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: '/'
  }, "Back Home"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: NotFound
});

/***/ }),

/***/ "./views/Routes.js":
/*!*************************!*\
  !*** ./views/Routes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./views/App.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./views/home.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup */ "./views/Signup.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./views/Login.js");
/* harmony import */ var _Blogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Blogs */ "./views/Blogs.js");
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Blog */ "./views/Blog.js");
/* harmony import */ var _NewBlog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewBlog */ "./views/NewBlog.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NotFound */ "./views/NotFound.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









var Routes = [_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
  routes: [_objectSpread({
    path: '/',
    exact: true
  }, _home__WEBPACK_IMPORTED_MODULE_3__.HomePage), _objectSpread({
    path: '/pages/signup'
  }, _Signup__WEBPACK_IMPORTED_MODULE_4__["default"]), _objectSpread({
    path: '/pages/login'
  }, _Login__WEBPACK_IMPORTED_MODULE_5__["default"]), _objectSpread(_objectSpread({
    path: '/pages/blogs'
  }, _Blogs__WEBPACK_IMPORTED_MODULE_6__["default"]), {}, {
    exact: true
  }), _objectSpread(_objectSpread({
    path: '/pages/new-blog'
  }, _NewBlog__WEBPACK_IMPORTED_MODULE_8__["default"]), {}, {
    exact: true
  }), _objectSpread({
    path: '/pages/blogs/:blogId'
  }, _Blog__WEBPACK_IMPORTED_MODULE_7__["default"]), _objectSpread({}, _NotFound__WEBPACK_IMPORTED_MODULE_9__["default"])]
})];

/***/ }),

/***/ "./views/Signup.js":
/*!*************************!*\
  !*** ./views/Signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function Signup() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }),
    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUser(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__.signupUser)(user));
    setUser({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    });
    history.push('/');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "auth-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Register To Start Posting Blogs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "first_name",
    placeholder: "Enter Your First Name",
    name: "first_name",
    onChange: handleChange,
    value: user.first_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "last_name",
    placeholder: "Enter Your Last Name",
    name: "last_name",
    onChange: handleChange,
    value: user.last_name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "email",
    type: "email",
    placeholder: "Enter your email address",
    name: "email",
    onChange: handleChange,
    value: user.email
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    name: "password",
    value: user.password,
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit"
  }, "Register")));
}
function loadData() {
  console.log('Hello From The Signup Page.');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  component: Signup,
  loadData: loadData
});

/***/ }),

/***/ "./views/common/RequireAuth.js":
/*!*************************************!*\
  !*** ./views/common/RequireAuth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function checkIfLoggedIn(Component) {
  function RequireAuth(props) {
    var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
        return state;
      }),
      token = _useSelector.user.token;
    if (token) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        token: token
      }, props));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: '/pages/login'
      });
    }
  }
  return RequireAuth;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIfLoggedIn);

/***/ }),

/***/ "./views/common/utils.js":
/*!*******************************!*\
  !*** ./views/common/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date) {
  var event = new Date(date);
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return event.toLocaleDateString('US', options);
}

/***/ }),

/***/ "./views/home.js":
/*!***********************!*\
  !*** ./views/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "home-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Welcome To The Blog API Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/login"
  }, "Login or register to post new blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/blogs"
  }, "View all published blogs"))), ' ');
}
function loadData() {
  return function () {
    console.log('Hello From The Home Page');
  }();
}
var HomePage = {
  component: Home,
  loadData: loadData
};

/***/ }),

/***/ "./views/partials/Footer.js":
/*!**********************************!*\
  !*** ./views/partials/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "App Made With Love By darkcode__"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./views/partials/Header.js":
/*!**********************************!*\
  !*** ./views/partials/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Blog API"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/blogs"
  }, "Blogs")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/signup"
  }, "Signup")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/login"
  }, "Login")), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/pages/new-blog"
  }, "Add Blog")), ' '), ' ');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "../../../node_modules/redux-logger/dist/redux-logger.js":
/*!***************************************************************!*\
  !*** ../../../node_modules/redux-logger/dist/redux-logger.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,t){ true?t(exports):0}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-rate-limit");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "morgan-json":
/*!******************************!*\
  !*** external "morgan-json" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan-json");

/***/ }),

/***/ "paginate-middleware":
/*!**************************************!*\
  !*** external "paginate-middleware" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("paginate-middleware");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage/createWebStorage":
/*!*************************************************************!*\
  !*** external "redux-persist/lib/storage/createWebStorage" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("serialize-javascript");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("winston");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./config/index.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./database */ "./database/index.js");
/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport */ "./passport/index.js");
/* harmony import */ var _logger_httpLogger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logger/httpLogger */ "./logger/httpLogger.js");
/* harmony import */ var _logger_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logger/logger */ "./logger/logger.js");
/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/renderer */ "./helpers/renderer.js");
/* harmony import */ var _routes_authRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/authRoutes */ "./routes/authRoutes.js");
/* harmony import */ var _routes_blogRoutes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/blogRoutes */ "./routes/blogRoutes.js");
/* harmony import */ var _routes_authorRoutes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/authorRoutes */ "./routes/authorRoutes.js");
/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/createStore */ "./helpers/createStore.js");
/* harmony import */ var _views_Routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/Routes */ "./views/Routes.js");

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();
















var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
(0,_database__WEBPACK_IMPORTED_MODULE_7__["default"])(_config__WEBPACK_IMPORTED_MODULE_6__["default"].mongoUrl);
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"]('public'));
app.use(_logger_httpLogger__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use(express_session__WEBPACK_IMPORTED_MODULE_2___default()({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 60
  }
}));
(0,_passport__WEBPACK_IMPORTED_MODULE_8__.passportConfig)(app);
var limiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_3___default()({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests, please try again later.',
  statusCode: 429
});
app.use('/api', limiter);
app.use('/api/auth', (0,_routes_authRoutes__WEBPACK_IMPORTED_MODULE_12__.authRoutes)());
app.use('/api/blogs', (0,_routes_blogRoutes__WEBPACK_IMPORTED_MODULE_13__.blogRoutes)());
app.use('/api/authors', (0,_routes_authorRoutes__WEBPACK_IMPORTED_MODULE_14__.authorRoutes)());
app.get('*', function (req, res) {
  var store = (0,_helpers_createStore__WEBPACK_IMPORTED_MODULE_15__.serverCreateStoreKit)();
  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_views_Routes__WEBPACK_IMPORTED_MODULE_16__.Routes, req.path).map(function (_ref) {
    var route = _ref.route;
    return route.loadData ? route.loadData(store, req.path.split('/')[3]) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve)["catch"](resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    _logger_logger__WEBPACK_IMPORTED_MODULE_10__["default"].info('Server Root App Store Get State: ', store.getState());
    var content = (0,_helpers_renderer__WEBPACK_IMPORTED_MODULE_11__.renderer)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    return res.send(content);
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app.listen(_config__WEBPACK_IMPORTED_MODULE_6__["default"].port, function () {
  return _logger_logger__WEBPACK_IMPORTED_MODULE_10__["default"].info('Server is Running on port ' + _config__WEBPACK_IMPORTED_MODULE_6__["default"].port);
}));
})();

/******/ })()
;