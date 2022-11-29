"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProcessing_1 = __importDefault(require("../utilities/imageProcessing"));
var routes = express_1.default.Router();
// define a route handler for the image processing
routes.get('/images', imageProcessing_1.default, function (req, res) {
    imageProcessing_1.default;
});
exports.default = routes;
