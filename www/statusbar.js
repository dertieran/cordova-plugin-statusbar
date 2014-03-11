/*
     *
     * Licensed to the Apache Software Foundation (ASF) under one
     * or more contributor license agreements.  See the NOTICE file
     * distributed with this work for additional information
     * regarding copyright ownership.  The ASF licenses this file
     * to you under the Apache License, Version 2.0 (the
     * "License"); you may not use this file except in compliance
     * with the License.  You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing,
     * software distributed under the License is distributed on an
     * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     * KIND, either express or implied.  See the License for the
     * specific language governing permissions and limitations
     * under the License.
     *
    */

    var argscheck = require('cordova/argscheck'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec');

    var namedColors = {
        "black": "#000000",
        "darkGray": "#A9A9A9",
        "lightGray": "#D3D3D3",
        "white": "#FFFFFF",
        "gray": "#808080",
        "red": "#FF0000",
        "green": "#00FF00",
        "blue": "#0000FF",
        "cyan": "#00FFFF",
        "yellow": "#FFFF00",
        "magenta": "#FF00FF",
        "orange": "##FFA500",
        "purple": "#800080",
        "brown": "#A52A2A"
    };

    // prime it
    exec(null, null, "StatusBar", "_ready", []);

    var StatusBar = function () {
    };

    StatusBar.overlaysWebView = function (doOverlay) {
        exec(null, null, "StatusBar", "overlaysWebView", [doOverlay]);
    };

    StatusBar.styleDefault = function () {
        // dark text on a light background
        exec(null, null, "StatusBar", "styleDefault", []);
    };

    StatusBar.styleLightContent = function () {
        // light text on a dark background
        exec(null, null, "StatusBar", "styleLightContent", []);
    };

    StatusBar.styleBlackTranslucent = function () {
        // #88000000 ? Apple says to use lightContent instead
        exec(null, null, "StatusBar", "styleBlackTranslucent", []);
    };

    StatusBar.styleBlackOpaque = function () {
        // #FF000000 ? Apple says to use lightContent instead
        exec(null, null, "StatusBar", "styleBlackOpaque", []);
    };

    StatusBar.backgroundColorByName = function (colorname) {
        return StatusBar.backgroundColorByHexString(namedColors[colorname]);
    }

    StatusBar.backgroundColorByHexString = function (hexString) {
        if (hexString.indexOf("#") < 0) {
            hexString = "#" + hexString;
        }

        if (hexString.length == 4) {
            var split = hexString.split("");
            hexString = "#" + hexString[1] + hexString[1] + hexString[2] + hexString[2] + hexString[3] + hexString[3];
        }

        exec(null, null, "StatusBar", "backgroundColorByHexString", [hexString]);
    }

    StatusBar.hide = function () {
        exec(null, null, "StatusBar", "hide", []);
    }

    StatusBar.show = function () {
        exec(null, null, "StatusBar", "show", []);
    }

    StatusBar.isVisible = true;

    module.exports = StatusBar;
