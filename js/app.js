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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	//util
	var util = __webpack_require__(2);

	//util.log("ほげほげ");
	(function(angular) {
	    var MODULES = [
	        'ui.router',
	        'angularLocalStorage',
	        'ngResource',
	        'ngSanitize',
	        'ngAnimate',
	        'ngTouch'
	    ];
	    var MODULE_GROUP = [
	        'controllers'
	        ,'directives'
	        ,'filters'
	        ,'models'
	        ,'services'
	        ,'config'
	    ];
	    for (var i = 0, len = MODULE_GROUP.length; i < len; i++) angular.module(MODULE_GROUP[i],[]);
	    angular.module('offsideApp',MODULES.concat(MODULE_GROUP));
	})(angular);

	//ルーティング
	__webpack_require__(3);

	//コントローラー読み込み (./controllersフォルダ内の全て)
	var ctx = __webpack_require__(1),
	    map = ctx.keys(),
	    i = map.length;
	while (i--) ctx(map[i]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./finishCtrl.js": 4,
		"./headCtrl.js": 5,
		"./mainCtrl.js": 6,
		"./playerCtrl.js": 7,
		"./readyCtrl.js": 8,
		"./roleCtrl.js": 9,
		"./signinCtrl.js": 10
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	   log: function(val){
	       console.log("debug",val);
	   }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	angular.module('config').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state("/",{
	            url:"/",
	            template: __webpack_require__(18),
	            controller: "MainCtrl"
	        })

	        .state("/palyer",{
	            url:"/player",
	            template: __webpack_require__(19),
	            controller: 'PlayerCtrl'
	        })

	        .state("/role",{
	            url:"/role",
	            template: __webpack_require__(20),
	            controller: 'RoleCtrl'
	        })
	        .state("/ready",{
	            url:"/ready",
	            template: __webpack_require__(21),
	            controller: 'ReadyCtrl'
	        })

	        .state("/discuss",{
	            url:"/discuss",
	            template: __webpack_require__(22),
	            controller: 'ReadyCtrl'
	        })

	        .state("/finish",{
	            url:"/finish",
	            template: __webpack_require__(23),
	            controller: 'ReadyCtrl'
	        })

	        .state("/signin",{
	            url:"/signin",
	            template: __webpack_require__(24),
	            controller: 'SigninCtrl'
	        });
	}]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('controllers').controller('FinishCtrl', [
	    '$scope',
	    'storage',

	    function ($scope, storage) {
	        var ROOM = 'ligroom1';
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        $scope.finish = function(){
	            $scope.open = 1;

	            var after = jinroData.after, tmp = [], result=[];

	            for(var i = 0, len = after.length; i < len; i++){
	                tmp[i] = after[i].split(":");
	                result[i] = {
	                    role: jinroData.role[tmp[i][0]].name,
	                    name: tmp[i][1]
	                };
	            }

	            $scope.friends = result;
	        };
	    }
	]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//ディレクティブ読み込み
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(11);
	__webpack_require__(12);

	angular.module('controllers').controller('HeadCtrl', [
	    '$scope',
	    'storage',
	    'EventModel',
	    'LocalModel',
	    function ($scope, storage, EventModel, LocalModel) {

	        $scope.methodA = function(){
	            alert();
	        };

	        $scope.plusplus = function(){
	            $scope.ls += "a";
	            LocalModel.set('userName',$scope.ls);
	        };

	        $scope.ping = function(){
	            $scope.event = EventModel.query();
	            LocalModel.huga();
	        };

	        //初期実行
	        function init(){

	            // * defaultValue: デフォルト値
	            // * storeName: 変数名と異なる localStorage への保存 key を指定
	            storage.bind($scope, 'varName', {
	                defaultValue: 'n0bisuke',
	                storeName: 'userName'
	            });

	            $scope.ls = storage.get('userName');
	        }(init());

	    }
	]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);
	__webpack_require__(14);

	angular.module('controllers').controller('MainCtrl',[
	    '$scope',
	    'UserModel',
	    'RoomModel',
	    'storage',

	    function ($scope, UserModel, RoomModel, storage) {
	        var ROOM = 'ligroom1';

	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        //部屋初期か
	        $scope.roomInit = function(){
	            RoomModel.init(ROOM);
	            console.log("初期化");
	        };

	        //ユーザー追加
	        $scope.userInit = function(){
	            $scope.init = 1;
	            jinroData.users.push($scope.userName);
	            jinroDS.set(ROOM, {users:jinroData.users});
	            console.log("ユーザー追加",jinroData.users);
	            storage.set('jinroUser', $scope.userName);
	        };

	        //$scope.roomCreate = function(){
	        //    $scope.input = "open";
	        //};


	        //storage.set('room', ROOM);
	        //
	        ////var jinroDataStore = new MilkCocoa("https://io-zi1nh53uc.mlkcca.com").dataStore("jinro");
	        ////storage.set('milkcocoa', jinroDataStore);
	        ////storage.set('milk', "yo");
	        //
	        //$scope.rooms = ['ligroom1'];
	        //
	        //
	        ////if(!UserModel.ping(ROOM)){
	        ////    UserModel.init(ROOM);
	        ////    console.log("aaa");
	        ////}
	        //


	        //
	        //$scope.name = 'hokaccha';
	        //$scope.$on('change:filter', function (evt, filter) {
	        //    $scope.currentFilter = filter;
	        //});));
	        //

	    }
	]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);
	__webpack_require__(15);

	angular.module('controllers').controller('PlayerCtrl', [
	    '$scope',
	    'UserModel',
	    'MilkModel',

	    function ($scope, UserModel, MilkModel) {
	        //var ROOM = 'ligroom1';
	        //var roomDS = jinroDS.child(ROOM);
	        //var jinroData = {};
	        //roomDS.get(function(data){
	        //    jinroData = data;
	        //});
	        //$scope.member = [];

	        //$scope.getRole = function(){
	        //    UserModel.role(ROOM, function (role, data) {
	        //        console.log(ROOM, data);
	        //        //LocalModel.set('jinro_all',data);
	        //    });
	        //
	        //    //var jinro = LocalModel.get('jinro_all');
	        //    //jinro.userName = $scope.userName;//ユーザー名
	        //    //
	        //    //if(jinro.name) {
	        //    //    $scope.role = jinro.name;
	        //    //    $scope.ex = jinro.ex;
	        //    //    UserModel.roleUpdate(ROOM, jinro);
	        //    //}else{
	        //    //    alert("定員オーバーです。");
	        //    //}
	        //};



	        $scope.userInit = function(){
	            $scope.init = 1; //確定ボタンを消す

	            UserModel.addUser();
	            //jinroDS.set(ROOM, jinroData); //更新

	            console.log($scope.userName);
	            //jinroData.users.push($scope.userName);
	            //$scope.init = 1; //確定ボタンを消す
	            //
	            //jinroDS.send({user: $scope.userName}); //ユーザー名
	            //
	            //console.log(jinroData.users);


	            //roomDS.child(ROOM).get(function(data){
	            //    //jinroSet(data);
	            //
	            //    jinroDS.push({"aaa": 111},function(data){
	            //        console.log("送信完了!", data);
	            //    });
	            //
	            //});
	            //
	            //function jinroSet(data){
	            //    jinroDS.child(ROOM).set(data);
	            //}
	        };



	        //jinroDS.on('send',function(data) {
	        //
	        //    //console.log("取得", data);
	        //    //data.push(data.value.user);
	        //
	        //    //$scope.list
	        //    console.log("取得", data.value.user);
	        //    //console.log("取得", data.users);
	        //    $scope.member.push(data.value.user);
	        //
	        //    console.log('push',$scope.member);
	        //
	        //});
	        //
	        ////jinroDataStore.on(event, callback)
	        //
	        //
	        //$scope.$watch(function() {
	        //    return $scope.member;
	        //}, function() {
	        //    console.log("監視");
	        //    // $location の path が変わった時
	        //});

	        /*
	         jinroDataStore.on('send',function(data){
	         var friends = $scope.friends;
	         console.log("取得",data);
	         console.log("fりえんd",friends);
	         friends.push(data.value.new_user);
	         console.log(friends);

	         });

	         $scope.$watch('friends', function() {
	         // scope の name が変わった時
	         console.log("監視");
	         $scope.friends = friends;
	         });*/

	    }
	]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	angular.module('controllers').controller('ReadyCtrl', [
	    '$scope',
	    'UserModel',
	    'storage',

	    function ($scope, UserModel, storage) {
	        var ROOM = 'ligroom1';
	        var jinroRole = storage.get('jinroRole');
	        $scope.ex =  jinroRole.ex;
	        $scope.role =  jinroRole.name;
	        $scope.userName =  storage.get('jinroUser');
	        $scope.type =  jinroRole.role;
	        $scope.partner = 1;
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        $scope.action = function(){
	            $scope.actionBtn = 1;
	            $scope.partner = storage.get('partner');

	            if($scope.type === 'wizard' || $scope.type === 'thief'){
	                var action = jinroData.action;
	                var tmp = [];
	                for(var i = 0, len = action.length; i < len; i++){
	                    tmp[i] = action[i].split(":");
	                }
	                $scope.friends = tmp;
	            }
	        };

	        //人狼と狂人
	        if($scope.type === 'wolf' || $scope.type === 'crazy') {
	            UserModel.getPlayer(ROOM, function (data) {
	                $scope.friends = data;
	                console.log("aaa", data);
	                var target = '';

	                if ($scope.type == 'wolf') {
	                    for (var i = 0, len = data.length; i < len; i++) {
	                        if (data[i].match(/crazy/)) {
	                            target = data[i];
	                        }
	                    }
	                } else if ($scope.type == 'crazy') {
	                    for (var i = 0, len = data.length; i < len; i++) {
	                        if (data[i].match(/wolf/)) {
	                            target = data[i];
	                        }
	                    }
	                }

	                storage.set('partner', parse(target));
	            });
	        }
	        //怪盗
	        else if($scope.type === 'thief'){

	        }
	        //魔法使い
	        else if($scope.type === 'wizard'){
	            console.log(jinroData);

	            $scope.friends = jinroData.action;
	        }
	        //一般人
	        else if($scope.type === 'general'){

	        }



	        //$scope.action = function(){
	        //    $scope.actionBtn = 1;
	        //    var partner = LocalModel.get('partner');
	        //    $scope.partner = partner;
	        //};




	        //UserModel.role(ROOM, function (data) {
	        //    console.log('yooo',data);
	        //    LocalModel.set('jinro_all',data);
	        //});

	        //
	        $scope.getRole = function(index){
	            console.log($scope.friends[index]);
	            var role = $scope.friends[index][0];
	            var name = jinroData.role[role].name;
	            var user = $scope.friends[index][1];

	            console.log(name);
	            if($scope.type === 'wizard') {
	                $scope.message = user + "さんは" + name + "です";
	            }else{
	                $scope.message = user + "さんは" + name + "です。" + user + 'さんの' + name + 'と怪盗を交換しました。';
	                var action = jinroData.action;
	                var after = [];
	                var tmp = [];
	                var thief = "", target = "";

	                for(var i = 0, len = action.length; i < len; i++){
	                    tmp[i] = action[i].split(":");
	                    if(tmp[i][0] === 'thief')thief = tmp[i]; //自分
	                    if(tmp[i][0] === role)target = tmp[i]; //交換対称
	                }

	                for(var i = 0, len = action.length; i < len; i++){
	                    tmp[i] = action[i].split(":");
	                    if(tmp[i][0] === 'thief'){
	                        after[i] = target[0]+":"+thief[1];
	                    }else if(tmp[i][0] === role){
	                        after[i] = thief[0]+":"+target[1];
	                    }else{
	                        after[i] = action[i];
	                    }
	                }

	                jinroDS.set(ROOM, {after:after});
	                console.log("交代",target);
	            }
	        };

	        //役職交代
	        function change(){

	        }
	    }
	]);

	//役職パーサー
	function parse(item){
	    var tmp = item.split(':');
	    return tmp[1];
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);

	angular.module('controllers').controller('RoleCtrl', [
	    '$scope',
	    'UserModel',
	    'LocalModel',
	    'storage',

	    function ($scope, UserModel, LocalModel, storage) {
	        var ROOM = 'ligroom1';
	        $scope.userName = storage.get('jinroUser');
	        //部屋情報取得
	        var jinroData = {};
	        jinroDS.child(ROOM).get(function(data){
	            jinroData = data;
	        });

	        $scope.getRole = function(){
	            var role = jinroData.current.shift();
	            if(!role) {
	                alert("定員オーバーです。");
	                return;
	            }

	            var action = role+':'+$scope.userName;
	            var member = jinroData.action;
	            member.push(action);

	            console.log("役", role);
	            console.log("れじすと", action, member.length);
	            console.log("もと", jinroData.current);

	            if(member.length === 5){
	                //全員
	            }

	            jinroDS.set(ROOM, {current:jinroData.current, action:member});
	            storage.set("jinroRole", jinroData.role[role]);

	            $scope.role = jinroData.role[role].name;
	            $scope.ex = jinroData.role[role].ex;

	        };

	    }
	]);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('controllers').controller('SigninCtrl', ['$scope', function ($scope) {
	    $scope.auth = function(){

	        alert();
	    }
	}]);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('EventModel', [
	    '$resource',

	    function ($resource) {
	        var portals = $resource('js/testdata/event.json' ,{
	            id: '@id'
	        }, {
	            'save': {
	                method: 'POST'
	            },
	            'get': {
	                method: 'GET',
	                cache: true
	            },
	            'query': {
	                method: 'GET',
	                cache: true,
	                isArray: true
	            },
	            'update': {
	                method: 'PUT',
	                isArray: false
	            }
	        });
	        return portals;
	    }
	]);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('LocalModel', [
	    'storage',

	    function (storage) {
	        var portals = {
	            //init: function(){
	            //    storage.bind($scope, 'varName', {
	            //        defaultValue: 'n0bisuke',
	            //        storeName: 'userName'
	            //    });
	            //},

	            set: function(key, val){
	                storage.set(key,val);
	            },

	            get: function(key){
	                return storage.get(key);
	            },

	            huga: function(){
	                console.log("ほげほげ");
	            }
	        };

	        return portals;
	    }
	]);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('UserModel', [
	    'storage',
	    'MilkModel',

	    function (storage, MilkModel) {
	        var portals = {

	            //部屋があるかどうか確認する
	            ping: function(room_name){
	                jinroDataStore.child(room_name).get(getdata);
	                function getdata(data){
	                    if (!data) {
	                        console.log("へやなし");
	                        return false;
	                    } else {
	                        console.log(data);
	                        return true;
	                    }
	                }

	            },
	            addUser: function(){

	                var roomRef = new Firebase('https://ngjinro.firebaseio.com/room1');

	                var hoge = [1];
	                roomRef.set({users: hoge});


	                console.log("usr",roomRef);

	            },
	            //配役
	            role: function(room_name, cb){
	                MilkModel.get(room_name, function(data){
	                    var init_data = data;
	                    var role = init_data.current.shift();

	                    console.log(role, init_data.current);
	                    cb(role, init_data);

	                });
	                //jinroDataStore.child(room_name).get(function(data){
	                //    var rnd = Math.floor(Math.random() * data.current.length);
	                //    var current_role = data.current[rnd];
	                //    var result = {
	                //        name: data.role[current_role].name,
	                //        ex: data.role[current_role].ex,
	                //        role: current_role,
	                //        main: data
	                //    };
	                //
	                //    cb(result);
	                //});
	            },

	            //サーバー上の配役管理
	            roleUp: function(room_name, data){
	                MilkModel.set(room_name, data); //状態を保存
	                storage('jinro_all', data); //ローカル保存
	            },


	            //部屋削除
	            remove: function(room_name){
	                jinroDataStore.remove(room_name);
	            },

	            //役職
	            roleUpdate: function(room_name, jinro){
	                var current = jinro.main.current;
	                var role = jinro.role;

	                //配列から削除
	                for(var i = 0, len = current.length; i < len; i++){
	                    if(current[i] == role){
	                        current.splice(i, 1);
	                        break;
	                    }
	                }

	                //usersとcurrentを更新
	                jinroDataStore.child(room_name).get(function(data){
	                    var users = data.users;
	                    users.push(role+':'+jinro.userName);
	                    jinroDataStore.set(room_name, {current: current, users: users});
	                    jinroDataStore.send({new_user: jinro.userName});
	                });

	            },

	            //参加者情報
	            getPlayer: function(room_name, cb){
	                jinroDS.child(room_name).get(function(data){
	                    cb(data.action);
	                });
	            },

	            getPlayerName: function(room_name, cb){
	                jinroDataStore.child(room_name).get(function(data){
	                    cb(data.users);
	                });
	            },

	            set: function(room_name){
	                jinroDataStore.send({message : "from angular"},function(data){
	                    console.log("送信完了!");
	                });
	            },
	            huga: function(){
	                console.log("ほげほげ");
	            }
	        };

	        return portals;
	    }
	]);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(15);

	angular.module('services').factory('RoomModel', [
	    'storage',
	    'MilkModel',

	    function (storage, MilkModel) {
	        return {
	            //部屋の初期化
	            init: function(room_name){
	                var init_data = __webpack_require__(25)(room_name);
	                shuffle(init_data.current); //シャッフル

	                jinroDS.set(room_name, init_data);

	                //jinroRef.set({room1: init_data});
	            },



	            set: function(){

	            },

	            getAll: function(){
	                //jinroDataStore.child({}).get(function(data){
	                //    return data;
	                //});
	            }
	        };

	    }
	]);

	//シャッフル
	function shuffle(a){
	    var n = a.length;
	    for(var i = n - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var tmp = a[i];
	        a[i] = a[j];
	        a[j] = tmp;
	    }

	    return a;
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('services').factory('MilkModel', [
	    'storage',

	    function (storage) {

	        return {
	            set: function(id, data){
	                jinroDS.set(id,data);
	            },

	            get: function(id, cb){
	                jinroDS.child(id).get(function(data, cb){
	                    cb(data);
	                });
	            },

	            getAll: function(cb){
	                jinroDS.child({}).get(function(data){
	                    cb(data);
	                });
	            }

	        };

	    }
	]);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('directives').directive('navBtn', function() {
	    return {
	        template: __webpack_require__(26)
	    };
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('directives').directive('navBtn2', function() {
	    return {
	        template: __webpack_require__(27)
	    };
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-controller=\"MainCtrl\">\n\n    <div ng-hide=\"init\">\n        <label>プレイヤー名を入力してください。</label>\n        <input type=\"text\" placeholder=\"例:のびすけ\" ng-model=\"userName\" required>\n    </div>\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\" ng-show=\"userName\">\n        <p>ユーザー名は{{userName}}になります。</p>\n        <button ng-click=\"userInit()\" ng-hide=\"init\">確定</button>\n    </div>\n\n    <div class=\"large-6 medium-6 small-6 columns\" ng-show=\"init\">\n        <a href=\"#/role\" class=\"laerge success button\">入室</a>\n    </div>\n\n    <!--<div class=\"large-6 medium-6 small-6 columns\" ng-show=\"init\">-->\n        <!--<button ng-click=\"userCheck()\">ユーザー確認</button>-->\n    <!--</div>-->\n\n    <!--<div class=\"large-6 medium-6 small-6 columns\">-->\n    <!--<select>-->\n    <!--<option value=\"husker\" ng-repeat=\"room in rooms\">{{room}}</option>-->\n    <!--</select>-->\n    <!--</div>-->\n\n    <div class=\"large-12 columns\">\n\n        <!--<div>-->\n            <!--<label for=\"room\">部屋を作成する場合は部屋名を入力してください。</label>-->\n            <!--<input type=\"text\" id=\"room\" placeholder=\"例:のびすけRoom\" ng-model=\"roomName\" required>-->\n        <!--</div>-->\n\n        <!--<button class=\"laerge round button\" ng-show=\"roomName\">-->\n            <!--部屋作成-->\n        <!--</button>-->\n\n        <div class=\"panel\">\n            <h3>α版につき5人限定です</h3>\n            <p>役職は村人,怪盗,占い師,人狼,狂人です。</p>\n\n            <div class=\"row\">\n                <div class=\"large-4 medium-4 columns\">\n                    <p>by <a href=\"http://qiita.com/n0bisuke\">@n0bisuke</p>\n                </div>\n            </div>\n\n        </div>\n\n        <hr/>\n\n        <button class=\"laerge alert button\" ng-click=\"roomInit()\">初期化</button>\n\n    </div>\n\n</div>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"PlayerCtrl\">\n\n    <div ng-hide=\"init\">\n        <label>プレイヤー名を入力してください。</label>\n        <input type=\"text\" placeholder=\"例:のびすけ\" ng-model=\"userName\" required>\n    </div>\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\" ng-show=\"userName\">\n        <p>ユーザー名は{{userName}}になります。</p>\n        <button ng-click=\"userInit()\" ng-hide=\"init\">確定</button>\n    </div>\n\n    <ul>\n        <li ng-repeat=\"friend in member\">{{friend}}</li>\n    </ul>\n\n</div>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"RoleCtrl\">\n\n    <!--ユーザー名入力後-->\n    <div class=\"callout panel\">\n        <p>{{userName}}さんの役職は...\n            <strong>{{role}}</strong>\n            です。\n        </p>\n    </div>\n\n    <div ng-hide=\"role\">\n        <button class=\"laerge round button\" ng-click=\"getRole()\" ng-show=\"userName\">\n            役職を決める\n        </button>\n    </div>\n\n    <!--配役後-->\n    <div class=\"panel\" ng-show=\"role\">\n        <h3>役職解説</h3>\n        <p>{{ex}}</p>\n    </div>\n\n    <a href=\"#/ready\" class=\"laerge round button\" ng-show=\"role\">\n        ゲームを始める\n    </a>\n\n    <!--<div ng-init=\"friends = ['まろ','のび','りょうちん']\">-->\n    <!--<span class=\"label\" ng-repeat=\"friend in friends\">-->\n        <!--{{friend}}-->\n    <!--</span>-->\n\n</div>\n\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"ReadyCtrl\">\n\n    <!--<div ng-hide=\"ready\">-->\n        <!--ほげほげ-->\n    <!--</div>-->\n\n    <div>\n\n        <div class=\"callout panel\">\n            <p>夜が来ました。役職にあったアクションをしてください。</p>\n        </div>\n\n        <div class=\"panel\">\n            <h3>役職解説: <strong>{{role}}</strong>{{userName}}</h3>\n            <p>{{ex}}</p>\n        </div>\n\n        <div ng-show=\"actionBtn\">\n\n            <div ng-if=\"type === 'thief'\">\n                交換する相手を選んでください。\n                <button class=\"laerge round button\" ng-repeat=\"friend in friends\" ng-click=\"getRole($index)\" ng-hide=\"message\">\n                    {{friend[1]}}\n                </button>\n                <hr/>\n                <p>{{message}}</p>\n            </div>\n\n            <div ng-if=\"type === 'general'\">特にアクションはありません。</div>\n\n            <div ng-if=\"type === 'wizard'\">\n                見る相手を選んでください。\n                <button class=\"laerge round button\" ng-repeat=\"friend in friends\" ng-click=\"getRole($index)\" ng-hide=\"message\">\n                    {{friend[1]}}\n                </button>\n                <hr/>\n                <p>{{message}}</p>\n            </div>\n\n            <div ng-if=\"type === 'crazy'\">\n                人狼は{{partner}}さんです。\n            </div>\n\n            <div ng-if=\"type === 'wolf'\">\n                狂人は{{partner}}さんです。\n            </div>\n\n        </div>\n\n        <br/>\n\n        <button class=\"laerge success button\" ng-hide=\"actionBtn\" ng-click=\"action()\">\n            アクションを起こす。\n        </button>\n\n        <a href=\"#/finish\" class=\"laerge alert button\" ng-if=\"actionBtn === 1\">\n            アクションを完了する。\n        </a>\n\n    </div>\n\n</div>\n\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"large-12 columns\" ng-controller=\"FinishCtrl\">\n    <button ng-click=\"finish()\">答えあわせ</button>\n\n    <ul ng-show=\"open\">\n        <li ng-repeat=\"friend in friends\" >{{friend.name}} : {{friend.role}}</li>\n    </ul>\n\n</div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-controller=\"SigninCtrl\">\n    <input type=\"text\"/>\n    <button ng-click=\"auth()\">そうしんsss</button>\n    ほげほげほげ<br />\n    あああああああ<br />\n    ほげほげ<br />\n    ほげほげ\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(room_name){
	  return {
	      room_id : room_name,
	      role : {
	          general: {
	              name: '市民',
	              ex: '特に能力は何も出来ません。画面を操作するフリをしてください。',
	              team: '人間側です。',
	              role: 'general'
	          },
	          wizard:  {
	              name: '魔法使い',
	              ex: '魔法で1人だけ正体を知ることが出来ます。',
	              team: '人間側です。',
	              role: 'wizard'
	          },
	          thief:  {
	              name: '怪盗',
	              ex: '指名した１人と自分の役職を交換します。',
	              team: '人間側です。',
	              role: 'thief'
	          },
	          crazy:  {
	              name: '狂人',
	              ex: '人間ですが、人狼の味方です。人狼と手を組み、人狼が人間側にばれないようにしましょう。',
	              team: '人狼側です。',
	              role: 'crazy'
	          },
	          wolf: {
	              name: '人狼',
	              ex: '人狼です。狂人と手を組んで人間側にばれないようにしましょう。',
	              team: '人狼側です。',
	              role: 'wolf'
	          },
	      },
	      users : [],
	      count: 5,
	      current : ['general', 'wizard', 'thief', 'crazy', 'wolf'],
	      action: [],
	      after: []
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>ほげほげ</p>\n<p>ほげほげ</p>\n<p>ほげほげ</p>\n<p>ほげほげ</p>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<p>aaa</p>\n<p>aaa</p>\n";

/***/ }
/******/ ])