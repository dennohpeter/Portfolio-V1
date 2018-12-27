/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./_src/js/App.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Jello = __webpack_require__(/*! ./app/Jello */ 1);

	var _Jello2 = _interopRequireDefault(_Jello);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// App class for all js
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);

	    this.app = this;
	    this.jello;
	    this.timeline;
	    this.initialize();
	  }

	  _createClass(App, [{
	    key: 'initialize',
	    value: function initialize() {
	      // new instance of Jello class
	      this.jello = new _Jello2.default();
	    }
	  }]);

	  return App;
	}();

	// App export to scripts/app.js


	exports.default = App;
	var app = new App();

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./_src/js/app/Jello.js ***!
  \******************************/
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Jello = function () {

	  // Cached variables that can be used and changed in all the functions in the class
	  function Jello() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Jello);

	    this.defaults = {};
	    this.options = options;
	    this.canvasHolder = document.getElementById('jello-container');
	    this.imgWidth = 1920;
	    this.imgHeight = 960;
	    this.imgRatio = this.imgHeight / this.imgWidth;
	    this.winWidth = window.innerWidth;
	    this.bgArray = [];
	    this.bgSpriteArray = [];
	    this.renderer = PIXI.autoDetectRenderer(this.winWidth, this.winWidth * this.imgRatio);
	    this.stage = new PIXI.Container();
	    this.imgContainer = new PIXI.Container();
	    this.imageCounter = 0;
	    this.displacementSprite = PIXI.Sprite.fromImage("static/wp-content/themes/jj/images/distortion/dmap-clouds-01.jpg");
	    this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
	    this.currentMap = {};
	    this.mapCounter = 0;
	    this.mapArray = [];
	    this.raf = this.animateFilters.bind(this);

	    this.isDistorted = true;
	    this.isTransitioning = false;

	    this.initialize();
	  }

	  _createClass(Jello, [{
	    key: 'initialize',
	    value: function initialize() {
	      console.log('Jello initialized');

	      this.defaults = {
	        transition: 1,
	        speed: 0.4,
	        dispScale: 300,
	        dispX: true,
	        dispY: true,
	        count: 0
	      };

	      this.update();

	      // An array of images for background (.jpg)
	      // They'll transition in the order listed below
	      this.bgArray.push('image-48');

	      // An array of displacement maps
	      // They'll transition in the order below with the included settings
	      // this.mapArray.push({
	      //   image: 'dmap-glass-01.jpg',
	      //   speed: 0.8,
	      //   scale: 1000
	      // },{
	      //   image: 'dmap-clouds-01.jpg',
	      //   speed: 0.8,
	      //   scale: 1000
	      // });

	      this.backgroundFill();
	      this.buildStage();
	      this.createBackgrounds();
	      this.createFilters();
	      this.animateFilters();
	      this.eventListener();

	      this.renderer.view.setAttribute('class', 'jello-canvas');
	      this.canvasHolder.appendChild(this.renderer.view);
	    }

	    // define animations and call this.raf

	  }, {
	    key: 'animateFilters',
	    value: function animateFilters() {
	      this.displacementFilter.scale.x = this.settings.dispX ? this.settings.transition * this.settings.dispScale : 0;
	      this.displacementFilter.scale.y = this.settings.dispY ? this.settings.transition * (this.settings.dispScale + 10) : 0;

	      this.displacementSprite.x = Math.sin(this.settings.count * 0.15) * 200;
	      this.displacementSprite.y = Math.cos(this.settings.count * 0.13) * 200;

	      this.displacementSprite.rotation = this.settings.count * 0.06;

	      this.settings.count += 0.05 * this.settings.speed;

	      this.renderer.render(this.stage);

	      window.requestAnimationFrame(this.raf);
	    }

	    // canvas built to fill width of window

	  }, {
	    key: 'backgroundFill',
	    value: function backgroundFill() {
	      this.renderer.view.setAttribute('style', 'height:auto;width:100%;');
	    }

	    // main container for animation

	  }, {
	    key: 'buildStage',
	    value: function buildStage() {
	      this.imgContainer.position.x = this.imgWidth / 2;
	      this.imgContainer.position.y = this.imgHeight / 2;

	      this.stage.scale.x = this.stage.scale.y = this.winWidth / this.imgWidth;
	      this.stage.interactive = true;
	      this.stage.addChild(this.imgContainer);
	    }

	    // cycle through this.bgArray and change images with crossfade

	  }, {
	    key: 'changeImage',
	    value: function changeImage() {
	      var _this = this;

	      if (this.imageCounter < this.bgArray.length - 1) {
	        this.imageCounter++;
	      } else {
	        this.imageCounter = 0;
	      }

	      this.bgSpriteArray.map(function (sprite, i) {
	        if (i == _this.imageCounter) {
	          TweenLite.to(sprite, 1, { alpha: 1, ease: Power2.easeInOut });
	        } else {
	          TweenLite.to(sprite, 1, { alpha: 0, ease: Power2.easeInOut });
	        }
	      });
	    }

	    // cycle through this.mapArray and change displacement maps

	  }, {
	    key: 'changeMap',
	    value: function changeMap() {
	      if (this.mapCounter < this.mapArray.length - 1) {
	        this.mapCounter++;
	      } else {
	        this.mapCounter = 0;
	      }

	      this.currentMap = this.mapArray[this.mapCounter];
	      console.log(this.currentMap);
	      this.displacementSprite = PIXI.Sprite.fromImage("static/wp-content/themes/jj/images/distortion/" + this.currentMap.image);
	      this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
	      this.createFilters();
	    }

	    // preload all backgrounds for quick transitions

	  }, {
	    key: 'createBackgrounds',
	    value: function createBackgrounds() {
	      var _this2 = this;

	      this.bgArray.map(function (image) {
	        var bg = PIXI.Sprite.fromImage("static/wp-content/themes/jj/images/bg/"+image+ ".jpg");

	        // Set image anchor to the center of the image
	        bg.anchor.x = 0.5;
	        bg.anchor.y = 0.5;

	        _this2.imgContainer.addChild(bg);
	        _this2.bgSpriteArray.push(bg);

	        // set first image alpha to 1, all else to 0
	        bg.alpha = _this2.bgSpriteArray.length === 1 ? 1 : 0;
	      });
	    }

	    // distortion filters added to stage

	  }, {
	    key: 'createFilters',
	    value: function createFilters() {
	      this.stage.addChild(this.displacementSprite);

	      this.displacementFilter.scale.x = this.displacementFilter.scale.y = this.winWidth / this.imgWidth;

	      this.imgContainer.filters = [this.displacementFilter];
	    }

	    // function changes the distortion level to a specific amount

	  }, {
	    key: 'distortionLevel',
	    value: function distortionLevel(amt) {
	      var _this3 = this;

	      if (!this.isTransitioning) {
	        this.isTransitioning = true;
	        TweenLite.to(this.settings, 1, {
	          transition: amt,
	          speed: this.currentMap.speed,
	          dispScale: this.currentMap.scale,
	          ease: Power2.easeInOut,
	          onComplete: function onComplete() {
	            _this3.isTransitioning = false;
	          }
	        });
	      }
	    }

	    // click events

	  },
	  {
	    key: 'eventListener',
	    value: function eventListener() {
	      var _this4 = this;

	      // var changeImageBtn = document.getElementsByClassName('js-change-image')[0];
	      // var changeDistortionBtn = document.getElementsByClassName('js-change-distortion')[0];
	      // var toggleDistorionBtn = document.getElementsByClassName('js-toggle-distortion')[0];


	      $('#focus, .canvas-hover-zone').click(function(event) {
	      	_this4.toggleDistortion();
	      });



	      // changeDistortionBtn.onclick = function () {
	      //   _this4.changeMap();
	      // };

	      // toggleDistorionBtn.onclick = function () {
	      //   _this4.toggleDistortion();
	      // };
	    }

	    // turn the distortion on and off using the options.transistion variable

	  },
	  {
	    key: 'toggleDistortion',
	    value: function toggleDistortion() {
	      if (this.isDistorted) {
	        this.distortionLevel(0);
	        this.isDistorted = false;
	      } else {
	        this.distortionLevel(1);
	        this.isDistorted = true;
	      }
	    }

	    // Object.assign overwrites defaults with options to create settings

	  }, {
	    key: 'update',
	    value: function update() {
	      this.settings = Object.assign({}, this.defaults, this.options);
	    }

	    // ============ TEAR DOWN =============== //

	  }, {
	    key: 'tearDown',
	    value: function tearDown() {
	      window.cancelAnimationFrame(this.raf);
	      this.settings = {};
	      this.bgArray = [];
	      this.bgSpriteArray = [];
	    }
	  }]);

	  return Jello;
	}();

	exports.default = Jello;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map
