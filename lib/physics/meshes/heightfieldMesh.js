'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeightfieldMesh = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mesh = require('../core/mesh');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeightfieldMesh = exports.HeightfieldMesh = function (_Mesh) {
    (0, _inherits3.default)(HeightfieldMesh, _Mesh);

    function HeightfieldMesh(geometry, material, mass, xdiv, ydiv) {
        (0, _classCallCheck3.default)(this, HeightfieldMesh);

        var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(HeightfieldMesh).call(this, geometry, material, mass));

        _this._physijs.type = 'heightfield';
        _this._physijs.xsize = geometry.boundingBox.max.x - geometry.boundingBox.min.x;
        _this._physijs.ysize = geometry.boundingBox.max.y - geometry.boundingBox.min.y;
        _this._physijs.xpts = typeof xdiv === 'undefined' ? Math.sqrt(geometry.vertices.length) : xdiv + 1;
        _this._physijs.ypts = typeof ydiv === 'undefined' ? Math.sqrt(geometry.vertices.length) : ydiv + 1;
        // note - this assumes our plane geometry is square, unless we pass in specific xdiv and ydiv
        _this._physijs.absMaxHeight = Math.max(geometry.boundingBox.max.z, Math.abs(geometry.boundingBox.min.z));

        var points = [];

        for (var i = 0; i < geometry.vertices.length; i++) {
            var a = i % _this._physijs.xpts;
            var b = Math.round(i / _this._physijs.xpts - i % _this._physijs.xpts / _this._physijs.xpts);
            points[i] = geometry.vertices[a + (_this._physijs.ypts - b - 1) * _this._physijs.ypts].z;
        }

        _this._physijs.points = points;
        return _this;
    }

    return HeightfieldMesh;
}(_mesh.Mesh);
//# sourceMappingURL=heightfieldMesh.js.map