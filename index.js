/* 
* @Author: Geoffrey Bauduin
* @Date:   2015-04-06 16:23:23
* @Last Modified by:   Geoffrey Bauduin
* @Last Modified time: 2015-04-21 18:18:55
*/

(function () {

	var request = require("request");
	var util = require("util");

	function FaceRecognition(api_key) {
		this.api_key = api_key;
	}

	FaceRecognition.prototype.detect = function (urls, callback) {
		var url;
		if (util.isArray(urls)) {
			url = urls.join(";");
		}
		else {
			url = "" + urls; // Converting to string
		}
		request({
			method: "POST",
			url: "https://lambda-face-recognition.p.mashape.com/detect",
			headers: {
				"X-Mashape-Key": this.api_key,
				"Content-Type": "application/x-www-form-urlencoded",
				"Accept": "application/json"
			},
			data: {
				urls: url
			}
		}, callback)
;	}

	module.exports = FaceRecognition;

}).call(this);